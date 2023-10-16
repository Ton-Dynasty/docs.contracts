"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[877],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7858:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={slug:"nft-enforced-royalty",title:"NFT Enforced Royalty",authors:["alan","maxey","jacky","maroon"],tags:["nft","royalty","fractionalize","jetton"]},i=void 0,s={permalink:"/docs.contracts/blog/nft-enforced-royalty",editUrl:"https://github.com/Ton-Dynasty/tondynasty-contracts/pulls/blog/2023-10-13-NFT Royalty Enforcement/index.mdx",source:"@site/blog/2023-10-13-NFT Royalty Enforcement/index.mdx",title:"NFT Enforced Royalty",description:"Introduction",date:"2023-10-13T00:00:00.000Z",formattedDate:"October 13, 2023",tags:[{label:"nft",permalink:"/docs.contracts/blog/tags/nft"},{label:"royalty",permalink:"/docs.contracts/blog/tags/royalty"},{label:"fractionalize",permalink:"/docs.contracts/blog/tags/fractionalize"},{label:"jetton",permalink:"/docs.contracts/blog/tags/jetton"}],readingTime:9.03,hasTruncateMarker:!0,authors:[{name:"Yu Lun Hsu (Alan)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/alan890104",imageURL:"https://github.com/alan890104.png",key:"alan"},{name:"Li Xun Liu (Maxey)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/ipromise2324",imageURL:"https://github.com/ipromise2324.png",key:"maxey"},{name:"Yu Cheng Tsai (Jacky)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/WaterSo0910",imageURL:"https://github.com/WaterSo0910.png",key:"jacky"},{name:"Wei Cheng Wang (Xander)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/skyline9981",imageURL:"https://github.com/skyline9981.png",key:"maroon"}],frontMatter:{slug:"nft-enforced-royalty",title:"NFT Enforced Royalty",authors:["alan","maxey","jacky","maroon"],tags:["nft","royalty","fractionalize","jetton"]}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:2},{value:"What is NFT &amp; Enforced Royalty?",id:"what-is-nft--enforced-royalty",level:3},{value:"What is Fractionalization?",id:"what-is-fractionalization",level:3},{value:"Motivation",id:"motivation",level:2},{value:"Discussions",id:"discussions",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Core Concepts - Hybrid Royalty",id:"core-concepts---hybrid-royalty",level:2},{value:"Solutions",id:"solutions",level:2},{value:"\ud83c\udfaf Fractionalize",id:"-fractionalize",level:3},{value:"Steps",id:"steps",level:4},{value:"\ud83c\udfaf Quota",id:"-quota",level:3},{value:"Steps",id:"steps-1",level:4},{value:"\ud83c\udfaf Auction",id:"-auction",level:3},{value:"Steps",id:"steps-2",level:4},{value:"Summary",id:"summary",level:2},{value:"Message Flows",id:"message-flows",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Future Works",id:"future-works",level:2},{value:"Resources",id:"resources",level:2}],u=(d="GithubBookmark",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)});var d;const p={toc:c},h="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(h,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Imagine a world where artists are effortlessly rewarded each time their work changes hands, ensuring their continuous recognition and compensation.\ud83d\udcb0 Leveraging the groundbreaking power of NFT fractionalization, we've sculpted a solution that is not only intuitively simple but also remarkably effective, seamlessly intertwining with existing NFT standards."),(0,o.kt)("p",null,"Your journey through the revolutionary pathways of NFT enforced royalties on TON begins here \u2013 where the equitable future of digital artistry is being rewritten! \ud83c\udfa8\u2728"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"readmore")," to learn more about our project."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"To enhance our understanding of our solution, in this section, we will first introduce the background knowledge of NFT Enforced Royalty and Fractionalization."),(0,o.kt)("h3",{id:"what-is-nft--enforced-royalty"},"What is NFT & Enforced Royalty?"),(0,o.kt)("p",null,"The advent of NFTs (Non-Fungible Tokens) has introduced a programmable digital asset, serving as a certificate for digital artworks. The concept of NFTs allows creators to continuously track the transfer transactions of users, and with each transfer, creators can obtain a certain percentage of royalties."),(0,o.kt)("p",null,"Enforced royalty is a hotly debated issue. While it enables creators to obtain deserved earnings, excessively high royalties can also somewhat reduce market liquidity. In August 2023, OpenSea, an NFT platform on Ethereum, decided to discontinue its on-chain royalty enforcement tool \u2014 Operator Filter, which allowed creators to block NFT markets that do not enforce royalties. This move may impact NFT artists who expect to generate passive income through royalties, yet it might also rescue a languishing market."),(0,o.kt)("h3",{id:"what-is-fractionalization"},"What is Fractionalization?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fractionalization")," is a technique that divides an NFT into multiple portions, each of which can be owned by different holders. The emergence of ",(0,o.kt)("inlineCode",{parentName:"p"},"Fractionalization")," significantly enhances the liquidity of NFTs and makes the value of NFTs more readily accepted by the market."),(0,o.kt)("p",null,"For example, if an NFT is valued at 1000 USD, ",(0,o.kt)("inlineCode",{parentName:"p"},"Fractionalization")," can split it into 100 pieces (often using Fungible Tokens as certificates), each worth 10 USD. In this way, an NFT, originally valued at 1000 USD, can be owned by 100 people and can be freely traded on the market."),(0,o.kt)("p",null,"We have adapted ",(0,o.kt)("a",{parentName:"p",href:"https://www.leewayhertz.com/fractional-nft/"},"Ethereum's NFT Fractionalization")," to a model suitable for TON, and applied it to NFT Enforced Royalty."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Discussions about NFT Enforced Royalty are no stranger to the TON blockchain. Thanks to TON's asynchronous nature and the upgradability of contracts, there are even more possibilities for implementing NFT royalty enforcement mechanisms. On TON, the method for obtaining royalties from NFTs is defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md"},"TEP-0064"),", although it does not prescribe how royalty enforcement should be carried out."),(0,o.kt)("p",null,"Enforcing royalties on TON, while protecting creators\u2019 rights, might result in a suboptimal user experience. For instance, if someone wishes to gift an NFT to another individual, the royalty enforcement mechanism requires royalties to be paid during the transfer. Consequently, users have to pay additional fees when transferring NFTs, which is not user-friendly."),(0,o.kt)("p",null,"Therefore, we aim to implement a user-friendly and compatible NFT Enforced Royalty mechanism on TON, ensuring that the execution of NFT royalties does not burden users. We offer various options to users, allowing them to freely choose the royalty enforcement mechanism they desire."),(0,o.kt)("h2",{id:"discussions"},"Discussions"),(0,o.kt)("p",null,"In this section, we discuss the existing needs for NFT Enforced Royalty, and solutions will be proposed in the next section, under ",(0,o.kt)("strong",{parentName:"p"},"Core Concept"),"."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"NFT Enforced Royalty requires a certain percentage of royalties to be collected based on the transaction amount during every trade.")),(0,o.kt)("p",null,"This point is relatively undisputed as it constitutes the fundamental need for NFT Enforced Royalty."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For NFT transfers without a transaction amount, a certain percentage of royalties needs to be collected without compromising user experience (e.g., imposing a fee during Transfer).")),(0,o.kt)("p",null,"This requirement might be more controversial since it entails users having to pay additional fees when transferring NFTs, an experience that can be perceived as unfriendly to users. However, this requirement also has its rationality. In this way, creators can still obtain a certain percentage of royalties even when NFTs are transferred without a transaction amount."),(0,o.kt)("p",null,"An intuitive solution is to allow creators to forcibly disable NFTs that haven't paid royalties. However, this allows creators to arbitrarily block NFT transactions, potentially leading to unfairness in the market and affecting the liquidity and value of NFTs. Furthermore, this could render the NFT market ",(0,o.kt)("strong",{parentName:"p"},"overly centralized"),", as creators or copyright holders would possess excessive control. In such circumstances, a balance must be found to ensure equilibrium between the interests of creators and the rights of users."),(0,o.kt)("h2",{id:"core-concepts---hybrid-royalty"},"Core Concepts - Hybrid Royalty"),(0,o.kt)("p",null,"To find a balance between creators and users, we present three distinct solutions to run concurrently, allowing users to freely choose the royalty enforcement mechanism they desire. All of this while ensuring that creators can obtain a certain percentage of royalties without compromising the user experience."),(0,o.kt)("p",null,"However, currently, only auctions (Auction) can generate transaction amounts and calculate royalties. So, how can fees be collected during transfers (Transfer)? We introduce a new concept \u2014 Hybrid Royalty, which allows NFTs to gain a certain percentage of royalties even during transfers without a transaction amount."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In other words, NFT holders still need to pay royalties but have the option to not utilize ",(0,o.kt)("inlineCode",{parentName:"p"},"TON / Jetton")," for payment. They can fractionalize the NFT and extract a certain percentage as royalty.")),(0,o.kt)("h2",{id:"solutions"},"Solutions"),(0,o.kt)("p",null,"In this section, we will present, through illustrative examples, how our Hybrid Royalty mechanism facilitates a win-win situation between creators and NFT holders."),(0,o.kt)("h3",{id:"-fractionalize"},"\ud83c\udfaf Fractionalize"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fractionalize",src:n(9399).Z,width:"1968",height:"1062"})),(0,o.kt)("p",null,"Let\u2019s first talk about our core principle - Paying Royalties using NFT Fragments"),(0,o.kt)("h4",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When ",(0,o.kt)("strong",{parentName:"li"},"Alan")," transfers the ",(0,o.kt)("strong",{parentName:"li"},"NFT Item"),", it gets locked."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NFT Fraction (Jetton)")," is minted for ",(0,o.kt)("strong",{parentName:"li"},"Jacky"),"."),(0,o.kt)("li",{parentName:"ol"},"Another portion is minted for the ",(0,o.kt)("strong",{parentName:"li"},"Author")," as a royalty.")),(0,o.kt)("p",null,"These ",(0,o.kt)("strong",{parentName:"p"},"NFT Fractions")," will also have a certain percentage deducted as royalty upon future transfers."),(0,o.kt)("p",null,"In simple terms, we can consider NFT fragments as a type of share (Share). Future additional earnings will be distributed to the fragment holders. For instance, if someone wants to buy out the NFT (acquiring all fragments), the amount paid for the acquisition will be distributed to each fragment holder according to their share."),(0,o.kt)("p",null,"However, you might be thinking:"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"I don\u2019t want my NFT to become fragments! I want to transfer the complete NFT!"))),(0,o.kt)("p",null,"Or maybe"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"I don\u2019t want the NFT fragments I hold to be buyable at any moment!"))),(0,o.kt)("p",null,"No worries! We offer multiple options to users, allowing them to freely select the royalty enforcement mechanism they prefer. The following ",(0,o.kt)("strong",{parentName:"p"},"Quota")," and ",(0,o.kt)("strong",{parentName:"p"},"Auction")," are solutions that won\u2019t fragmentize the NFT."),(0,o.kt)("h3",{id:"-quota"},"\ud83c\udfaf Quota"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quota",src:n(6721).Z,width:"1968",height:"994"})),(0,o.kt)("p",null,"Recognizing that some individuals want to transfer NFTs in their entirety without utilizing time-consuming methods like ",(0,o.kt)("strong",{parentName:"p"},"Auction"),", we offer a solution called ",(0,o.kt)("strong",{parentName:"p"},"Quota"),"."),(0,o.kt)("p",null,"The Quota solution introduces a QuotaShop for an NFT Item, which provides Quota to users. When transferring, Quota can be consumed to prevent NFT fragmentation."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In the current POC version, our implementation allows authors to determine the price and quantity of Quota, which to some extent leads to centralization. However, the price of QuotaShop should be determined by the market. In the future, we will introduce incentives for the community to participate in setting the price of QuotaShop, making the price of QuotaShop more reasonable.")),(0,o.kt)("h4",{id:"steps-1"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Author")," uses ",(0,o.kt)("inlineCode",{parentName:"li"},"IssueQuota")," to provide ",(0,o.kt)("strong",{parentName:"li"},"Quota")," for everyone to purchase, setting the price and quantity of the ",(0,o.kt)("strong",{parentName:"li"},"Quota"),"."),(0,o.kt)("li",{parentName:"ol"},"Since ",(0,o.kt)("strong",{parentName:"li"},"Alan")," wishes to transfer a complete NFT, he uses ",(0,o.kt)("inlineCode",{parentName:"li"},"BuyQuota")," to purchase ",(0,o.kt)("strong",{parentName:"li"},"Quota"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Alan")," utilizes ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer"),", expending ",(0,o.kt)("inlineCode",{parentName:"li"},"Quota")," to transfer the NFT to ",(0,o.kt)("strong",{parentName:"li"},"Jacky"),".")),(0,o.kt)("p",null,"The TON used to pay for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Quota")," will be stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"QuotaShop"),", and the ",(0,o.kt)("strong",{parentName:"p"},"Author")," can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdraw")," to withdraw the TON at any time."),(0,o.kt)("h3",{id:"-auction"},"\ud83c\udfaf Auction"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Auction",src:n(8251).Z,width:"1968",height:"2062"})),(0,o.kt)("p",null,"Next, if you're aiming to sell NFTs and maximize revenue, we present the ",(0,o.kt)("strong",{parentName:"p"},"Auction")," solution. Without relying on intermediaries, you can initiate auctions directly on TON."),(0,o.kt)("p",null,"Auctions can be categorized into two types, both following the same procedure. At the conclusion, the NFT will be transferred to the highest bidder, and a portion of the winning bid in TON will be transferred to the ",(0,o.kt)("strong",{parentName:"p"},"Author")," as a royalty. If it's an auction to buy out fractional NFTs, the proceeds are distributed proportionally among the fraction holders."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Auctions intending to sell a complete NFT."),(0,o.kt)("li",{parentName:"ol"},"Auctions intending to buy out fractional NFTs.")),(0,o.kt)("h4",{id:"steps-2"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Start Auction")," initiates the auction and transfers the NFT to the ",(0,o.kt)("strong",{parentName:"li"},"Auction Contract"),"."),(0,o.kt)("li",{parentName:"ol"},"Bidders use ",(0,o.kt)("inlineCode",{parentName:"li"},"Bid")," to participate in the auction."),(0,o.kt)("li",{parentName:"ol"},"After the bidding concludes, the ",(0,o.kt)("strong",{parentName:"li"},"Auction Contract")," transfers the NFT to the highest bidder and moves a portion of the winning TON bid to the ",(0,o.kt)("strong",{parentName:"li"},"Author")," as a royalty.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In the case of buying out fractional NFTs, we deposit the proceeds into ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT Fraction (Jetton Master)"),". fraction holders can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdraw")," at any time to claim their TON according to their share. At this point, the ",(0,o.kt)("inlineCode",{parentName:"p"},"nullifier")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT Item")," increments by 1, ensuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT Fraction")," in subsequent fractionalizations has a different ",(0,o.kt)("inlineCode",{parentName:"p"},"nullifier"),"."),(0,o.kt)("p",{parentName:"admonition"},"The advantage of this approach is that it eliminates the need to send TON to each fraction holder individually. Instead, they can withdraw it themselves, significantly saving on Gas costs.")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Previously, we introduced various royalty options. Let's summarize their characteristics:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Royalty Payment"),(0,o.kt)("th",{parentName:"tr",align:null},"Transfer Time"),(0,o.kt)("th",{parentName:"tr",align:null},"User's Timing Preference"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Fractionalize"),(0,o.kt)("td",{parentName:"tr",align:null},"NFT fractions"),(0,o.kt)("td",{parentName:"tr",align:null},"Short"),(0,o.kt)("td",{parentName:"tr",align:null},"Desires immediate transfer, without using TON/Jetton for royalty payment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Quota"),(0,o.kt)("td",{parentName:"tr",align:null},"TON/Jetton"),(0,o.kt)("td",{parentName:"tr",align:null},"Moderate, requires prior purchase of Quota"),(0,o.kt)("td",{parentName:"tr",align:null},"Wishes to transfer a complete NFT, but doesn't want to wait for an Auction to conclude")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Auction"),(0,o.kt)("td",{parentName:"tr",align:null},"TON"),(0,o.kt)("td",{parentName:"tr",align:null},"Long, waits for Auction to conclude"),(0,o.kt)("td",{parentName:"tr",align:null},"Wants to transfer a complete NFT and aims to maximize revenue")))),(0,o.kt)("h2",{id:"message-flows"},"Message Flows"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overview",src:n(9958).Z,width:"3025",height:"1813"})),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"We utilized ",(0,o.kt)("a",{parentName:"p",href:"https://tact-lang.org/"},"Tact")," to compose a series of standard, reusable ",(0,o.kt)("inlineCode",{parentName:"p"},"traits")," following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ton-blockchain/TEPs"},"TON Enhancement Proposals (TEP)"),". These ",(0,o.kt)("inlineCode",{parentName:"p"},"traits")," were then employed to implement our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ton-Dynasty/tondynasty-contracts/blob/main/contracts/nft_enforce_royalty_example.tact"},"NFT Enforced Royalty mechanism as previously described"),". Furthermore, we\u2019ve developed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ton-Dynasty/tondynasty-contracts/tree/main/tests/NFTEnforceRoyalty"},"a suite of tests")," to validate our implementation of the NFT Enforced Royalty."),(0,o.kt)(u,{owner:"Ton-Dynasty",repoName:"tondynasty-contracts",mdxType:"GithubBookmark"}),(0,o.kt)("h2",{id:"future-works"},"Future Works"),(0,o.kt)("p",null,"We have introduced a new concept - Hybrid Royalty, which allows authors to receive a certain percentage of royalties when NFTs change hands. Our solution aims to create a win-win situation between creators and NFT holders, enhancing the NFT ecosystem on TON."),(0,o.kt)("p",null,"In the current Proof of Concept (POC) version, we have implemented the ability for authors to set their own prices in QuotaShop. In the future, we plan to involve the community in the pricing mechanism of QuotaShop, utilizing incentive mechanisms and market forces to determine prices, making the pricing of QuotaShop more equitable."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md"},"TEP-0062 NFT Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md"},"TEP-0064 Token Data Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0066-nft-royalty-standard.md"},"TEP-0066 NFT Royalty Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md"},"TEP-0074 Jetton Standard"))))}m.isMDXComponent=!0},8251:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/auction-480499f24be791454956299749e2a6f8.png"},9399:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/fractionalize-a767f8d19c9d60390d68b9f094c68f32.png"},9958:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/overview-ff105f83567cfe948a20af9568719c6f.png"},6721:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/quota-ebb864a2bc2780a39453d2d464687cbd.png"}}]);