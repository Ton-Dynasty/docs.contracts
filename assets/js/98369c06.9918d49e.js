"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[129],{6553:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"nft-enforced-royalty","metadata":{"permalink":"/docs.contracts/blog/nft-enforced-royalty","editUrl":"https://github.com/Ton-Dynasty/tondynasty-contracts/pulls/blog/2023-10-13-NFT Royalty Enforcement/index.mdx","source":"@site/blog/2023-10-13-NFT Royalty Enforcement/index.mdx","title":"NFT Enforced Royalty","description":"Introduction","date":"2023-10-13T00:00:00.000Z","formattedDate":"October 13, 2023","tags":[{"label":"nft","permalink":"/docs.contracts/blog/tags/nft"},{"label":"royalty","permalink":"/docs.contracts/blog/tags/royalty"},{"label":"fractionalize","permalink":"/docs.contracts/blog/tags/fractionalize"},{"label":"jetton","permalink":"/docs.contracts/blog/tags/jetton"}],"readingTime":9.03,"hasTruncateMarker":true,"authors":[{"name":"Yu Lun Hsu (Alan)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/alan890104","imageURL":"https://github.com/alan890104.png","key":"alan"},{"name":"Li Xun Liu (Maxey)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/ipromise2324","imageURL":"https://github.com/ipromise2324.png","key":"maxey"},{"name":"Yu Cheng Tsai (Jacky)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/WaterSo0910","imageURL":"https://github.com/WaterSo0910.png","key":"jacky"},{"name":"Wei Cheng Wang (Xander)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/skyline9981","imageURL":"https://github.com/skyline9981.png","key":"maroon"}],"frontMatter":{"slug":"nft-enforced-royalty","title":"NFT Enforced Royalty","authors":["alan","maxey","jacky","maroon"],"tags":["nft","royalty","fractionalize","jetton"]}},"content":"## Introduction\\n\\nImagine a world where artists are effortlessly rewarded each time their work changes hands, ensuring their continuous recognition and compensation.\ud83d\udcb0 Leveraging the groundbreaking power of NFT fractionalization, we\'ve sculpted a solution that is not only intuitively simple but also remarkably effective, seamlessly intertwining with existing NFT standards.\\n\\nYour journey through the revolutionary pathways of NFT enforced royalties on TON begins here \u2013 where the equitable future of digital artistry is being rewritten! \ud83c\udfa8\u2728\\n\\nClick **readmore** to learn more about our project.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Background\\n\\nTo enhance our understanding of our solution, in this section, we will first introduce the background knowledge of NFT Enforced Royalty and Fractionalization.\\n\\n### What is NFT & Enforced Royalty?\\n\\nThe advent of NFTs (Non-Fungible Tokens) has introduced a programmable digital asset, serving as a certificate for digital artworks. The concept of NFTs allows creators to continuously track the transfer transactions of users, and with each transfer, creators can obtain a certain percentage of royalties.\\n\\nEnforced royalty is a hotly debated issue. While it enables creators to obtain deserved earnings, excessively high royalties can also somewhat reduce market liquidity. In August 2023, OpenSea, an NFT platform on Ethereum, decided to discontinue its on-chain royalty enforcement tool \u2014 Operator Filter, which allowed creators to block NFT markets that do not enforce royalties. This move may impact NFT artists who expect to generate passive income through royalties, yet it might also rescue a languishing market.\\n\\n### What is Fractionalization?\\n\\n**Fractionalization** is a technique that divides an NFT into multiple portions, each of which can be owned by different holders. The emergence of `Fractionalization` significantly enhances the liquidity of NFTs and makes the value of NFTs more readily accepted by the market.\\n\\nFor example, if an NFT is valued at 1000 USD, `Fractionalization` can split it into 100 pieces (often using Fungible Tokens as certificates), each worth 10 USD. In this way, an NFT, originally valued at 1000 USD, can be owned by 100 people and can be freely traded on the market.\\n\\nWe have adapted [Ethereum\'s NFT Fractionalization](https://www.leewayhertz.com/fractional-nft/) to a model suitable for TON, and applied it to NFT Enforced Royalty.\\n\\n## Motivation\\n\\nDiscussions about NFT Enforced Royalty are no stranger to the TON blockchain. Thanks to TON\'s asynchronous nature and the upgradability of contracts, there are even more possibilities for implementing NFT royalty enforcement mechanisms. On TON, the method for obtaining royalties from NFTs is defined in [TEP-0064](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md), although it does not prescribe how royalty enforcement should be carried out.\\n\\nEnforcing royalties on TON, while protecting creators\u2019 rights, might result in a suboptimal user experience. For instance, if someone wishes to gift an NFT to another individual, the royalty enforcement mechanism requires royalties to be paid during the transfer. Consequently, users have to pay additional fees when transferring NFTs, which is not user-friendly.\\n\\nTherefore, we aim to implement a user-friendly and compatible NFT Enforced Royalty mechanism on TON, ensuring that the execution of NFT royalties does not burden users. We offer various options to users, allowing them to freely choose the royalty enforcement mechanism they desire.\\n\\n## Discussions\\n\\nIn this section, we discuss the existing needs for NFT Enforced Royalty, and solutions will be proposed in the next section, under **Core Concept**.\\n\\n### Requirements\\n\\n:::info\\n\\nNFT Enforced Royalty requires a certain percentage of royalties to be collected based on the transaction amount during every trade.\\n\\n:::\\n\\nThis point is relatively undisputed as it constitutes the fundamental need for NFT Enforced Royalty.\\n\\n:::info\\n\\nFor NFT transfers without a transaction amount, a certain percentage of royalties needs to be collected without compromising user experience (e.g., imposing a fee during Transfer).\\n\\n:::\\n\\nThis requirement might be more controversial since it entails users having to pay additional fees when transferring NFTs, an experience that can be perceived as unfriendly to users. However, this requirement also has its rationality. In this way, creators can still obtain a certain percentage of royalties even when NFTs are transferred without a transaction amount.\\n\\nAn intuitive solution is to allow creators to forcibly disable NFTs that haven\'t paid royalties. However, this allows creators to arbitrarily block NFT transactions, potentially leading to unfairness in the market and affecting the liquidity and value of NFTs. Furthermore, this could render the NFT market **overly centralized**, as creators or copyright holders would possess excessive control. In such circumstances, a balance must be found to ensure equilibrium between the interests of creators and the rights of users.\\n\\n## Core Concepts - Hybrid Royalty\\n\\nTo find a balance between creators and users, we present three distinct solutions to run concurrently, allowing users to freely choose the royalty enforcement mechanism they desire. All of this while ensuring that creators can obtain a certain percentage of royalties without compromising the user experience.\\n\\nHowever, currently, only auctions (Auction) can generate transaction amounts and calculate royalties. So, how can fees be collected during transfers (Transfer)? We introduce a new concept \u2014 Hybrid Royalty, which allows NFTs to gain a certain percentage of royalties even during transfers without a transaction amount.\\n\\n:::tip\\n\\nIn other words, NFT holders still need to pay royalties but have the option to not utilize `TON / Jetton` for payment. They can fractionalize the NFT and extract a certain percentage as royalty.\\n\\n:::\\n\\n## Solutions\\n\\nIn this section, we will present, through illustrative examples, how our Hybrid Royalty mechanism facilitates a win-win situation between creators and NFT holders.\\n\\n### \ud83c\udfaf Fractionalize\\n\\n![Fractionalize](./images/fractionalize.png)\\n\\nLet\u2019s first talk about our core principle - Paying Royalties using NFT Fragments\\n\\n#### Steps\\n\\n1. When **Alan** transfers the **NFT Item**, it gets locked.\\n2. **NFT Fraction (Jetton)** is minted for **Jacky**.\\n3. Another portion is minted for the **Author** as a royalty.\\n\\nThese **NFT Fractions** will also have a certain percentage deducted as royalty upon future transfers.\\n\\nIn simple terms, we can consider NFT fragments as a type of share (Share). Future additional earnings will be distributed to the fragment holders. For instance, if someone wants to buy out the NFT (acquiring all fragments), the amount paid for the acquisition will be distributed to each fragment holder according to their share.\\n\\nHowever, you might be thinking:\\n\\n:::danger\\n**I don\u2019t want my NFT to become fragments! I want to transfer the complete NFT!**\\n:::\\n\\nOr maybe\\n\\n:::danger\\n**I don\u2019t want the NFT fragments I hold to be buyable at any moment!**\\n:::\\n\\nNo worries! We offer multiple options to users, allowing them to freely select the royalty enforcement mechanism they prefer. The following **Quota** and **Auction** are solutions that won\u2019t fragmentize the NFT.\\n\\n### \ud83c\udfaf Quota\\n\\n![Quota](./images/quota.png)\\n\\nRecognizing that some individuals want to transfer NFTs in their entirety without utilizing time-consuming methods like **Auction**, we offer a solution called **Quota**.\\n\\nThe Quota solution introduces a QuotaShop for an NFT Item, which provides Quota to users. When transferring, Quota can be consumed to prevent NFT fragmentation.\\n\\n:::tip\\nIn the current POC version, our implementation allows authors to determine the price and quantity of Quota, which to some extent leads to centralization. However, the price of QuotaShop should be determined by the market. In the future, we will introduce incentives for the community to participate in setting the price of QuotaShop, making the price of QuotaShop more reasonable.\\n:::\\n\\n#### Steps\\n\\n1. The **Author** uses `IssueQuota` to provide **Quota** for everyone to purchase, setting the price and quantity of the **Quota**.\\n2. Since **Alan** wishes to transfer a complete NFT, he uses `BuyQuota` to purchase **Quota**.\\n3. **Alan** utilizes `Transfer`, expending `Quota` to transfer the NFT to **Jacky**.\\n\\nThe TON used to pay for the `Quota` will be stored in the `QuotaShop`, and the **Author** can use `Withdraw` to withdraw the TON at any time.\\n\\n### \ud83c\udfaf Auction\\n\\n![Auction](./images/auction.png)\\n\\nNext, if you\'re aiming to sell NFTs and maximize revenue, we present the **Auction** solution. Without relying on intermediaries, you can initiate auctions directly on TON.\\n\\nAuctions can be categorized into two types, both following the same procedure. At the conclusion, the NFT will be transferred to the highest bidder, and a portion of the winning bid in TON will be transferred to the **Author** as a royalty. If it\'s an auction to buy out fractional NFTs, the proceeds are distributed proportionally among the fraction holders.\\n\\n1. Auctions intending to sell a complete NFT.\\n2. Auctions intending to buy out fractional NFTs.\\n\\n\\n#### Steps\\n\\n1. **Start Auction** initiates the auction and transfers the NFT to the **Auction Contract**.\\n2. Bidders use `Bid` to participate in the auction.\\n3. After the bidding concludes, the **Auction Contract** transfers the NFT to the highest bidder and moves a portion of the winning TON bid to the **Author** as a royalty.\\n\\n:::tip\\nIn the case of buying out fractional NFTs, we deposit the proceeds into `NFT Fraction (Jetton Master)`. fraction holders can use `Withdraw` at any time to claim their TON according to their share. At this point, the `nullifier` of the `NFT Item` increments by 1, ensuring the `NFT Fraction` in subsequent fractionalizations has a different `nullifier`.\\n\\nThe advantage of this approach is that it eliminates the need to send TON to each fraction holder individually. Instead, they can withdraw it themselves, significantly saving on Gas costs.\\n:::\\n\\n## Summary\\n\\nPreviously, we introduced various royalty options. Let\'s summarize their characteristics:\\n\\n|               | Royalty Payment | Transfer Time                              | User\'s Timing Preference                                                               |\\n| ------------- | --------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |\\n| Fractionalize | NFT fractions   | Short                                      | Desires immediate transfer, without using TON/Jetton for royalty payment               |\\n| Quota         | TON/Jetton      | Moderate, requires prior purchase of Quota | Wishes to transfer a complete NFT, but doesn\'t want to wait for an Auction to conclude |\\n| Auction       | TON             | Long, waits for Auction to conclude        | Wants to transfer a complete NFT and aims to maximize revenue                          |\\n\\n## Message Flows\\n\\n![Overview](./images/overview.png)\\n\\n## Implementation\\n\\nWe utilized [Tact](https://tact-lang.org/) to compose a series of standard, reusable `traits` following the [TON Enhancement Proposals (TEP)](https://github.com/ton-blockchain/TEPs). These `traits` were then employed to implement our [NFT Enforced Royalty mechanism as previously described](https://github.com/Ton-Dynasty/tondynasty-contracts/blob/main/contracts/nft_enforce_royalty_example.tact). Furthermore, we\u2019ve developed [a suite of tests](https://github.com/Ton-Dynasty/tondynasty-contracts/tree/main/tests/NFTEnforceRoyalty) to validate our implementation of the NFT Enforced Royalty.\\n\\n\\n<GithubBookmark owner=\\"Ton-Dynasty\\" repoName=\\"tondynasty-contracts\\" />\\n\\n## Future Works\\n\\nWe have introduced a new concept - Hybrid Royalty, which allows authors to receive a certain percentage of royalties when NFTs change hands. Our solution aims to create a win-win situation between creators and NFT holders, enhancing the NFT ecosystem on TON.\\n\\nIn the current Proof of Concept (POC) version, we have implemented the ability for authors to set their own prices in QuotaShop. In the future, we plan to involve the community in the pricing mechanism of QuotaShop, utilizing incentive mechanisms and market forces to determine prices, making the pricing of QuotaShop more equitable.\\n\\n\\n## Resources\\n\\n- [TEP-0062 NFT Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md)\\n- [TEP-0064 Token Data Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md)\\n- [TEP-0066 NFT Royalty Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0066-nft-royalty-standard.md)\\n- [TEP-0074 Jetton Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md)"}]}')}}]);