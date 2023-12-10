---
sidebar_position: 1
---

# Fixed Point Float
Float library is implemented in FunC for the consideration of gas efficiency. Our implementation takes int128 as input and shifts it left by 64 bits, resulting a fixed $64$ bit space for storing decimals. Take number $7$ as example, when user transforms integer $7$ into float format, the output value will be $7*2^{64}$. 

## Overview
Same as solidity, both FunC and Tact do not support float datatype. However, what if our DeFi application requires to compute some interest rate in a float format? To address this issue, early developers in Solidity adopt a fixed point floating point method, which is relatively easy and gas efficient in comparison with `IEEE 754` format. The basic idea is multiplying a number by a large constant to simulate a decimal points, effectively shifting the decimal place to the right. 

For example, if we need to represent $3.14$ in smart contract, we could easily multiply it by $1000$ (shifting the decimals three place to the right), to get $3140$ as an integer. This approach simplifies computations while maintaining precision, as long as the developers carefully manage the scaling factor throughout the calculations. It is noteworthy we can substitude the constant $1000$ for any arbitrary number, thus, we can use binary shift operator to further reduce the computation complexity. In order to preserve a sufficient range to represent almost all rates in developing, we choose $2^{64}$ for the constant, which is equivalent to shift the origin number 64 bit left by the operator `<<`.

## Case Study
To explain the arithmetic (especially multiplication and division) in a simple term, we will introduce our usage step by step with elaboration. We take number $2$, $7$ and scaling factor $2^{64}$  for example in this section.

### Multiplication
Multiply $2$ by $7$ is quite easy, we directly compute $2 \times 7 = 14$. However, since we are talking about fixed point arithmetic, we need to process $2$ and $7$ into fixed point format before performing the multiplication. First, we convert these numbers into a fixed point representation by multiplying them with the scaling factor $2^{64}$. In this case, $2$ becomes $2 \times 2^{64}$ and $7$ becomes $7 \times 2^{64}$. These converted numbers are now in a format that allows for integer-based calculations while simulating floating-point precision.

Next, we perform the multiplication. In fixed point arithmetic, when we multiply two numbers, the result's scale is the square of the original scale. So, when we multiply the fixed point representations of $2$ and $7$, the calculation is equivalent to $(2 \times 2^{64}) \times (7 \times 2^{64})$. This results in a number that is scaled by $(2^{64})^2$.

However, we want our final answer to be in the same scale as our original inputs, which is $2^{64}$. To achieve this, we divide our result by the scaling factor $2^{64}$. This step readjusts the scale of the result back to our intended scale. The final computation is therefore $((2 \times 2^{64}) \times (7 \times 2^{64})) / 2^{64}$, which gives us the correctly scaled result of $2.5$ in fixed point format.

By leveraging our implementation, you can simply do the above procedure in Tact Language:

```js
import "./packages/math/float.fc";

@name(safeMul)
extends native safeMul(self: Int, b: Int): Int;

contract MathExample with Deployable {
    x: Int = 2;
    y: Int = 7;

    get fun safeMul(): Int {
        let a: Int = self.x.toFloat();
        let b: Int = self.y.toFloat();
        return a.safeMul(b);
    }
}
```

### Division

Division in fixed point arithmetic follows a logic similar to multiplication, but with a few differences to accommodate the nature of division. Using the same numbers $2$, $7$, and scaling factor $2^{64}$ as in the multiplication example, let's break down the process of division.

First, like in multiplication, we convert our numbers into fixed point format using the scaling factor $2^{64}$. So, $2$ becomes $2 \times 2^{64}$ and $7$ becomes $7 \times 2^{64}$. These numbers are now ready for arithmetic operations in fixed point format.

When performing division in fixed point arithmetic, it's important to maintain the scale of the result consistent with the scale of the inputs. To divide $2$ by $7$ in fixed point format, we calculate $(2 \times 2^{64}) / (7 \times 2^{64})$. Here, the scaling factors in the numerator and denominator cancel each other out. This leaves us with the division of the original numbers, which is $2 / 7 = 0$.

However, this direct division would lead to a loss of precision since $floor(2 / 7) = 0$. To address this, we can multiply the numerator by an additional scaling factor before performing the division, and divide it at the end of computation. This means we calculate $((2 \times 2^{64}) \times 2^{64}) / (7 \times 2^{64}) / 2^{64}$. Now, the result of this division will align with the scale of our inputs.

In Tact Language, this division process can be implemented as follows:

```js
import "./packages/math/float.fc";

@name(safeDiv)
extends native safeDiv(self: Int, b: Int): Int;

contract MathExample with Deployable {
    x: Int = 2;
    y: Int = 7;

    get fun safeDiv(): Int {
        let a: Int = self.x.toFloat();
        let b: Int = self.y.toFloat();
        return a.safeDiv(b);
    }
}
```