"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[711],{9948:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"nft-enforced-royalty","metadata":{"permalink":"/docs.contracts/zh-tw/blog/nft-enforced-royalty","editUrl":"https://github.com/Ton-Dynasty/tondynasty-contracts/pulls/blog/2023-10-13-NFT Royalty Enforcement/index.mdx","source":"@site/i18n/zh-tw/docusaurus-plugin-content-blog/2023-10-13-NFT Royalty Enforcement/index.mdx","title":"NFT Enforced Royalty","description":"Introduction","date":"2023-10-13T00:00:00.000Z","formattedDate":"2023\u5e7410\u670813\u65e5","tags":[{"label":"nft","permalink":"/docs.contracts/zh-tw/blog/tags/nft"},{"label":"royalty","permalink":"/docs.contracts/zh-tw/blog/tags/royalty"},{"label":"fractionalize","permalink":"/docs.contracts/zh-tw/blog/tags/fractionalize"},{"label":"jetton","permalink":"/docs.contracts/zh-tw/blog/tags/jetton"}],"readingTime":14.025,"hasTruncateMarker":true,"authors":[{"name":"Yu Lun Hsu (Alan)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/alan890104","imageURL":"https://github.com/alan890104.png","key":"alan"},{"name":"Li Xun Liu (Maxey)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/ipromise2324","imageURL":"https://github.com/ipromise2324.png","key":"maxey"},{"name":"Yu Cheng Tsai (Jacky)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/WaterSo0910","imageURL":"https://github.com/WaterSo0910.png","key":"jacky"},{"name":"Wei Cheng Wang (Xander)","title":"Co-Founder of Ton-Dynasty","url":"https://github.com/skyline9981","imageURL":"https://github.com/skyline9981.png","key":"maroon"}],"frontMatter":{"slug":"nft-enforced-royalty","title":"NFT Enforced Royalty","authors":["alan","maxey","jacky","maroon"],"tags":["nft","royalty","fractionalize","jetton"]}},"content":"## Introduction\\n\\n\u6578\u4f4d\u85dd\u8853\u5de5\u4f5c\u8005\u5011\u8acb\u76e1\u60c5\u6fc0\u767c\u4f60\u5011\u7684\u5275\u610f\u5427\uff01\u904e\u53bb\uff0c\u7531\u65bc NFT \u5f37\u5236\u7248\u7a05\u57f7\u884c\u5e36\u4f86\u7684\u8ca0\u9762\u5f71\u97ff\uff0c\u5c0e\u81f4\u85dd\u8853\u5bb6\u4ee4\u4eba\u9a5a\u8a6b\u7684\u5275\u9020\u529b\u5f80\u5f80\u672a\u80fd\u63db\u5f97\u61c9\u5f97\u7684\u56de\u5831\u3002\u800c\u73fe\u5728\uff0cTonDynasty \u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u63a8\u51fa\u4e86\u4e00\u500b\u5168\u65b0\u7684\u89e3\u6c7a\u65b9\u6848\u2014\u2014 Hybrid NFT Enforced Royalty\uff0c\u4e26\u5728 TON \u4e0a\u6210\u529f\u5be6\u73fe\u4e86\u9019\u4e00\u6a5f\u5236\u3002\u6211\u5011\u4e5f\u95dc\u6ce8\u4f7f\u7528\u8005\u9ad4\u9a57\uff0c\u8b93\u5404\u4f4d NFT Holders \u80fd\u5920\u81ea\u7531\u5f9c\u5f89\u5728 `TON` \u7684\u4e16\u754c\u88e1\uff01\\n\\n\u9ede\u64ca **\u95b1\u8b80\u66f4\u591a** \u4f86\u6df1\u5165\u4e86\u89e3\u6211\u5011\u7684 NFT Enforced Royalty \u8a2d\u8a08\u6587\u6a94\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## Background\\n\\n\u70ba\u4e86\u66f4\u597d\u7684\u7406\u89e3\u6211\u5011\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u6211\u5011\u5728\u9019\u500b\u7ae0\u7bc0\u6703\u5148\u4ecb\u7d39 NFT Enforced Royalty \u548c Fractionalization \u7684\u80cc\u666f\u77e5\u8b58\u3002\\n\\n### What is NFT & Enforced Royalty?\\n\\nNFT (Non-Fungible Token) \u7684\u51fa\u73fe\u63d0\u4f9b\u4e86\u4e00\u7a2e\u53ef\u7a0b\u5f0f\u5316\u7684\u6578\u4f4d\u8cc7\u7522\uff0c\u4e5f\u4f5c\u70ba\u6578\u4f4d\u85dd\u8853\u54c1\u7684\u6191\u8b49\u3002NFT \u7684\u63d0\u51fa\u5141\u8a31\u4f5c\u5bb6\u5011\u80fd\u5920\u6301\u7e8c\u8ffd\u8e64\u4f7f\u7528\u8005\u7684\u8f49\u624b\u4ea4\u6613 (transfer)\uff0c\u4e26\u4e14\u5728\u6bcf\u6b21\u8f49\u624b\u4ea4\u6613\u6642\uff0c\u4f5c\u5bb6\u5011\u53ef\u4ee5\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\\n\\n\u5f37\u5236\u57f7\u884c\u7248\u7a05\u662f\u4e00\u500b\u5099\u53d7\u8a0e\u8ad6\u7684\u8b70\u984c\uff0c\u5f37\u5236\u7248\u7a05\u53ef\u4ee5\u4f7f\u5275\u4f5c\u8005\u7372\u5f97\u61c9\u6709\u7684\u6536\u76ca\uff0c\u4e0d\u904e\u904e\u9ad8\u7684\u7248\u7a05\u4e5f\u6703\u4e00\u5b9a\u7a0b\u5ea6\u964d\u4f4e\u5e02\u5834\u7684\u6d41\u901a\u6027\u30022023 \u5e74 8 \u6708\uff0c\u4ee5\u592a\u574a\u4e0a\u7684 NFT \u5e73\u53f0 OpenSea \u6c7a\u5b9a\u53d6\u6d88\u5176\u93c8\u4e0a\u7248\u7a05\u57f7\u884c\u5de5\u5177 \u2014 Operator Filter\uff0c\u8a72\u5de5\u5177\u5141\u8a31\u5275\u4f5c\u8005\u5c01\u9396\u4e0d\u57f7\u884c\u7248\u7a05\u7684 NFT \u5e02\u5834\u3002\u6b64\u8209\u53ef\u80fd\u5c0d\u671f\u671b\u901a\u904e\u7248\u7a05\u7372\u5f97\u88ab\u52d5\u6536\u5165\u7684 NFT \u85dd\u8853\u5bb6\u9020\u6210\u5f71\u97ff\uff0c\u4e0d\u904e\u53ef\u80fd\u56e0\u6b64\u62ef\u6551\u4f4e\u8ff7\u7684\u5e02\u5834\u3002\\n\\n### What is Fractionalization?\\n\\n`Fractionalization` \u662f\u4e00\u7a2e\u5c07 NFT \u5206\u5272\u6210\u591a\u500b\u90e8\u5206\u7684\u6280\u8853\uff0c\u9019\u4e9b\u90e8\u5206\u53ef\u4ee5\u88ab\u4e0d\u540c\u7684\u6301\u6709\u8005\u64c1\u6709\u3002`Fractionalization` \u7684\u51fa\u73fe\u4f7f\u5f97 NFT \u7684\u6d41\u901a\u6027\u5927\u5e45\u63d0\u5347\uff0c\u4e5f\u4f7f\u5f97 NFT \u7684\u50f9\u503c\u66f4\u52a0\u5bb9\u6613\u88ab\u5e02\u5834\u6240\u63a5\u53d7\u3002\\n\\n\u8209\u4f8b\u4f86\u8aaa\u4e00\u500b NFT \u7684\u50f9\u503c\u70ba 1000 USD\uff0c`Fractionalization` \u53ef\u4ee5\u5c07\u5176\u5206\u5272\u6210 100 \u500b\u90e8\u5206\uff08\u901a\u5e38\u4f7f\u7528 Fungible Token \u4f86\u4f5c\u70ba\u6191\u8b49\uff09\uff0c\u6bcf\u500b\u90e8\u5206\u50f9\u503c 10 USD\uff0c\u9019\u6a23\u4e00\u4f86\uff0c\u539f\u672c\u50f9\u503c 1000 USD \u7684 NFT \u5c31\u53ef\u4ee5\u88ab 100 \u500b\u4eba\u64c1\u6709\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728\u5e02\u5834\u4e0a\u81ea\u7531\u4ea4\u6613\u3002\\n\\n\u6211\u5011\u5c07 [Ethereum \u7684 NFT Fractionalization](https://www.leewayhertz.com/fractional-nft/) \u6539\u9020\u6210\u9069\u5408 TON \u7684\u6a21\u5f0f\uff0c\u4e26\u4e14\u5c07\u5176\u61c9\u7528\u5728 NFT Enforced Royalty \u4e0a\u3002\\n\\n## Motivation\\n\\n\u5728 TON blockchain \u4e0a\u4e0d\u4e4f\u6709 NFT Enforced Royalty \u76f8\u95dc\u7684\u8a0e\u8ad6\uff0c\u7531\u65bc TON \u7684\u7570\u6b65\u548c\u5408\u7d04\u53ef\u5347\u7d1a\u7b49\u7279\u6027\uff0cNFT \u7684\u7248\u7a05\u57f7\u884c\u6a5f\u5236\u4e5f\u6709\u4e86\u66f4\u591a\u7684\u53ef\u80fd\u6027\u3002\u5728 TON \u4e0a\uff0cNFT \u7684\u7248\u7a05\u5728 [TEP-0064](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md) \u4e2d\u6709\u8a02\u5b9a\u53d6\u5f97\u7248\u7a05\u7684\u65b9\u5f0f\uff0c\u4e0d\u904e\u4e26\u6c92\u6709\u898f\u5b9a\u7248\u7a05\u7684\u57f7\u884c\u65b9\u5f0f\u3002\\n\\n\u5728 TON \u4e0a\u5f37\u5236\u57f7\u884c\u7248\u7a05\u96d6\u7136\u53ef\u4ee5\u4fdd\u969c\u5275\u4f5c\u8005\u7684\u6b0a\u76ca\uff0c\u4f46\u53ef\u80fd\u6703\u9020\u6210\u4f7f\u7528\u8005\u9ad4\u9a57\u4e0d\u4f73\u7684\u60c5\u5f62\uff0c\u8209\u4f8b\u4f86\u8aaa\uff1a\u4e00\u500b\u4eba\u60f3\u8981\u5c0d\u6301\u6709 NFT \u7684\u9322\u5305\u9032\u884c\u5347\u7d1a\uff0c\u7531\u65bc\u5347\u7d1a\u5f8c\u9322\u5305\u5730\u5740\u6539\u8b8a\uff0c\u9700\u8981\u8f49\u79fb\u539f\u5148\u5730\u5740\u64c1\u6709\u7684 NFT\u3002\u4e0d\u904e\u7531\u65bc NFT \u7684\u7248\u7a05\u57f7\u884c\u6a5f\u5236\uff0c\u8f49\u79fb NFT \u6642\u9700\u8981\u652f\u4ed8\u7248\u7a05\uff0c\u9019\u6a23\u4e00\u4f86\u5c31\u6703\u9020\u6210\u4f7f\u7528\u8005\u5728\u8f49\u79fb NFT \u6642\u9700\u8981\u652f\u4ed8\u984d\u5916\u7684\u8cbb\u7528\uff0c\u9019\u6a23\u7684\u9ad4\u9a57\u5c0d\u65bc\u4f7f\u7528\u8005\u4f86\u8aaa\u662f\u4e0d\u53cb\u5584\u7684\u3002\\n\\n\u56e0\u6b64\uff0c\u6211\u5011\u60f3\u8981\u5728 TON \u4e0a\u5be6\u73fe\u4f7f\u7528\u8005\u53cb\u5584\u4e26\u4e14\u517c\u5bb9\u6027\u7684 NFT Enforced Royalty \u6a5f\u5236\uff0c\u4f7f\u5f97 NFT \u7684\u7248\u7a05\u57f7\u884c\u4e0d\u6703\u5c0d\u4f7f\u7528\u8005\u9020\u6210\u8ca0\u64d4\u3002\u6211\u5011\u63d0\u4f9b\u4e86\u591a\u7a2e\u9078\u9805\u7d66\u4f7f\u7528\u8005\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u7531\u9078\u64c7\u81ea\u5df1\u60f3\u8981\u7684\u7248\u7a05\u5f37\u5236\u57f7\u884c\u6a5f\u5236\u3002\\n\\n## Discussions\\n\\n\u6211\u5011\u5728\u9019\u500b\u7ae0\u7bc0\u8a0e\u8ad6\u73fe\u6709 NFT Enforced Royalty \u7684\u9700\u6c42\uff0c\u4e26\u4e14\u6703\u5728\u4e0b\u4e00\u7ae0\u7bc0\u7684 **Core Concept** \u4e2d\u63d0\u51fa\u89e3\u6c7a\u65b9\u6848\u3002\\n\\n### Requirements\\n\\n:::info\\n\\nNFT Enforced Royalty \u5728\u6bcf\u6b21\u9032\u884c\u4ea4\u6613\u6642\uff0c\u90fd\u8981\u6839\u64da\u4ea4\u6613\u984d\u6536\u53d6\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\\n\\n:::\\n\\n\u9019\u500b\u6bd4\u8f03\u6c92\u6709\u7570\u8b70\uff0c\u56e0\u70ba\u9019\u662f NFT Enforced Royalty \u7684\u57fa\u672c\u9700\u6c42\u3002\\n\\n:::info\\n\\nNFT \u5728\u6c92\u6709\u4ea4\u6613\u984d\u7684\u63db\u624b (Transfer) \u6642\uff0c\u9700\u8981\u5728\u4e0d\u5f71\u97ff\u4f7f\u7528\u8005\u9ad4\u9a57\u7684\u60c5\u6cc1\u4e0b (e.g. Transfer \u7684\u6642\u5019\u8981\u6536\u53d6)\uff0c\u6536\u53d6\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\\n\\n:::\\n\\n\u9019\u500b\u9700\u6c42\u53ef\u80fd\u662f\u6bd4\u8f03\u6709\u722d\u8b70\u7684\uff0c\u56e0\u70ba\u9019\u6a23\u4e00\u4f86\uff0c\u4f7f\u7528\u8005\u5728\u8f49\u79fb NFT \u6642\u9700\u8981\u652f\u4ed8\u984d\u5916\u7684\u8cbb\u7528\uff0c\u9019\u6a23\u7684\u9ad4\u9a57\u5c0d\u65bc\u4f7f\u7528\u8005\u4f86\u8aaa\u662f\u4e0d\u53cb\u5584\u7684\u3002\u4e0d\u904e\u9019\u500b\u9700\u6c42\u4e5f\u662f\u6709\u5176\u5408\u7406\u6027\u7684\uff0c\u56e0\u70ba\u9019\u6a23\u4e00\u4f86\uff0c\u5275\u4f5c\u8005\u53ef\u4ee5\u5728 NFT \u6c92\u6709\u4ea4\u6613\u984d\u7684\u63db\u624b\u6642\uff0c\u4e5f\u80fd\u5920\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\\n\\n\u4e00\u500b\u5f88\u76f4\u89ba\u7684\u89e3\u6c7a\u65b9\u5f0f\u662f\u8b93\u4f5c\u8005\u80fd\u5920\u5f37\u5236\u7981\u7528\u6c92\u6709\u7e73\u4ea4\u7248\u7a05\u7684 NFT\uff0c\u4e0d\u904e\u9019\u6a23\u4e00\u4f86\uff0c\u4f5c\u8005\u5c31\u53ef\u4ee5\u96a8\u610f\u5c01\u9396 NFT \u7684\u4ea4\u6613\uff0c\u53ef\u80fd\u9020\u6210\u5e02\u5834\u4e0a\u7684\u4e0d\u516c\u5e73\uff0c\u4e26\u5f71\u97ff\u5230 NFT \u7684\u6d41\u901a\u6027\u548c\u50f9\u503c\u3002\u6b64\u5916\uff0c\u9019\u4e5f\u53ef\u80fd\u6703\u4f7f\u5f97 NFT \u7684\u5e02\u5834\u8b8a\u5f97**\u904e\u65bc\u4e2d\u5fc3\u5316**\uff0c\u56e0\u70ba\u5275\u4f5c\u8005\u6216\u7248\u6b0a\u6301\u6709\u4eba\u6703\u6709\u904e\u5927\u7684\u63a7\u5236\u6b0a\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u9700\u8981\u5c0b\u627e\u4e00\u500b\u5e73\u8861\u9ede\uff0c\u4ee5\u78ba\u4fdd\u5275\u4f5c\u8005\u7684\u5229\u76ca\u548c\u4f7f\u7528\u8005\u7684\u6b0a\u5229\u4e4b\u9593\u7684\u5e73\u8861\u3002\\n\\n## Core Concepts - Hybrid Royalty\\n\\n\u70ba\u4e86\u627e\u5230\u5275\u4f5c\u8005\u548c\u4f7f\u7528\u8005\u4e4b\u9593\u7684\u5e73\u8861\u9ede\uff0c\u6211\u5011\u63d0\u51fa\u4e86\u4e09\u7a2e\u4e0d\u540c\u7684\u89e3\u6c7a\u65b9\u6848\u540c\u6642\u904b\u884c\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u7531\u9078\u64c7\u81ea\u5df1\u60f3\u8981\u7684\u7248\u7a05\u5f37\u5236\u57f7\u884c\u6a5f\u5236\uff0c\u4e26\u4e14\u5728\u4e0d\u72a7\u7272\u4f7f\u7528\u8005\u9ad4\u9a57\u7684\u60c5\u6cc1\u4e0b\uff0c\u540c\u6642\u8b93\u5275\u4f5c\u8005\u80fd\u5920\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\\n\\n\u4e0d\u904e\uff0c\u76ee\u524d\u552f\u6709\u62cd\u8ce3 (Auction) \u80fd\u5920\u7522\u751f\u4ea4\u6613\u984d\u4e26\u8a08\u7b97\u7248\u7a05\uff0c\u90a3\u5728\u63db\u624b\uff08Transfer\uff09\u7684\u6642\u5019\u5982\u4f55\u6536\u53d6\u8cbb\u7528\u5462\uff1f\u6211\u5011\u63d0\u51fa\u4e86\u4e00\u500b\u65b0\u7684\u6982\u5ff5 \u2014 Hybrid Royalty\uff0c\u8b93 NFT \u5728\u6c92\u6709\u4ea4\u6613\u984d\u7684\u63db\u624b\u6642\uff0c\u4e5f\u80fd\u5920\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\\n\\n:::tip\\n\\n\u4e5f\u5c31\u662f\u8aaa NFT \u6301\u6709\u8005\u4f9d\u7136\u9700\u8981\u652f\u4ed8\u7248\u7a05\uff0c\u4f46\u662f\u53ef\u4ee5\u9078\u64c7\u4e0d\u4f7f\u7528 `TON / Jetton` \u4f86\u652f\u4ed8\uff0c\u53ef\u4ee5\u5c07 NFT \u788e\u7247\u5316\u4e26\u62bd\u53d6\u5176\u4e2d\u4e00\u5b9a\u6bd4\u4f8b\u4f5c\u70ba\u7248\u7a05\u3002\\n\\n:::\\n\\n## Solutions\\n\\n\u6211\u5011\u5728\u9019\u500b\u7ae0\u7bc0\u6703\u4ee5\u5716\u4f8b\u7684\u65b9\u5f0f\u5448\u73fe\uff0c\u8209\u4f8b\u8aaa\u660e\u6211\u5011\u7684 Hybrid Royalty \u6a5f\u5236\u662f\u5982\u4f55\u8b93\u5275\u4f5c\u8005\u548c NFT \u6301\u6709\u8005\u4e4b\u9593\u9054\u5230\u96d9\u8d0f\u7684\u3002\\n\\n### \ud83c\udfaf Fractionalize\\n\\n![Fractionalize](../../../../blog/2023-10-13-NFT%20Royalty%20Enforcement/images/fractionalize.png)\\n\\n\u6211\u5011\u5148\u8b1b\u8ff0\u6211\u5011\u7684\u6838\u5fc3 - \u4f7f\u7528 NFT \u788e\u7247\u652f\u4ed8\u7248\u7a05\\n\\n#### Steps\\n\\n1. \u7576 **Alan** \u8f49\u79fb **NFT Item** \u6642\uff0c**NFT Item** \u6703\u88ab\u9396\u5b9a\\n2. \u9444\u9020 **NFT Fraction (Jetton)** \u7d66 **Jacky**\\n3. \u53e6\u4e00\u90e8\u4efd\u6703\u9444\u9020\u7d66 **Author** \u4f5c\u70ba\u7248\u7a05\u3002\\n\\n\u9019\u4e9b **NFT Fraction** \u672a\u4f86\u518d\u8f49\u79fb\u7d66\u5176\u4ed6\u4eba\u6642\uff0c\u4e5f\u6703\u6263\u9664\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\\n\\n\u7c21\u55ae\u4f86\u8aaa\uff0c\u6211\u5011\u53ef\u4ee5\u5c07 NFT \u788e\u7247\u7576\u4f5c\u662f\u4e00\u7a2e\u80a1\u4efd\uff08Share\uff09\uff0c\u672a\u4f86\u7684\u984d\u5916\u6536\u76ca\u90fd\u6703\u4ea4\u7d66\u6301\u6709\u788e\u7247\u7684\u4eba\uff0c\u4f8b\u5982\u8aaa\u6709\u4eba\u8981\u8cb7\u65b7 NFT \uff08\u6536\u8cfc\u6240\u6709\u788e\u7247\uff09\uff0c\u90a3\u6536\u8cfc\u6240\u4ed8\u51fa\u7684\u91d1\u984d\u5c31\u6703\u4f9d\u7167\u788e\u7247\u7684\u6bd4\u4f8b\u5206\u914d\u7d66\u6bcf\u500b\u788e\u7247\u7684\u6301\u6709\u8005\u3002\\n\\n\u4e0d\u904e\u770b\u5230\u9019\u88e1\uff0c\u4f60\u53ef\u80fd\u6703\u60f3\uff1a\\n\\n:::danger\\n**\u6211\u4e0d\u60f3\u8981\u6211\u7684 NFT \u8b8a\u6210\u788e\u7247\uff01\u6211\u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff01**\\n:::\\n\\n\u6216\u662f\\n\\n:::danger\\n**\u6211\u4e0d\u60f3\u8981\u6211\u6301\u6709\u7684 NFT \u788e\u7247\u96a8\u6642\u90fd\u80fd\u88ab\u6536\u8cfc\uff01**\\n:::\\n\\n\u6c92\u95dc\u4fc2\uff01\u6211\u5011\u63d0\u4f9b\u4e86\u591a\u7a2e\u9078\u9805\u7d66\u4f7f\u7528\u8005\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u7531\u9078\u64c7\u81ea\u5df1\u60f3\u8981\u7684\u7248\u7a05\u5f37\u5236\u57f7\u884c\u6a5f\u5236\u3002\u63a5\u4e0b\u4f86\u7684 **Quota** \u548c **Auction** \u5c31\u662f\u4e0d\u6703\u788e\u7247\u5316\u7684\u89e3\u6c7a\u65b9\u6848\u3002\\n\\n### \ud83c\udfaf Quota\\n\\n![Quota](../../../../blog/2023-10-13-NFT%20Royalty%20Enforcement/images/quota.png)\\n\\n\u6709\u9451\u65bc\u6709\u4e9b\u4eba\u60f3\u8981\u5b8c\u6574\u7684\u8f49\u79fb NFT\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u8981\u85c9\u7531 **Auction** \u9019\u7a2e\u8017\u6642\u9593\u7684\u65b9\u5f0f\u4f86\u8f49\u79fb\uff0c\u6211\u5011\u63d0\u4f9b\u4e86 **Quota** \u9019\u7a2e\u89e3\u6c7a\u65b9\u6848\u3002\\n\\nQutoa \u89e3\u6c7a\u65b9\u6848\u662f\u5c0d\u65bc\u4e00\u500b NFT Item \u5f15\u5165\u4e00\u500b QuotaShop\uff0cQuotaShop \u6703\u63d0\u4f9b Quota \u7d66\u4f7f\u7528\u8005\uff0c\u4e26\u4e14\u8f49\u79fb\u6642\u53ef\u4ee5\u6d88\u8017 Quota \u4f86\u907f\u514d NFT \u88ab\u788e\u7247\u5316\u3002\\n\\n:::tip\\n\u5728\u76ee\u524d\u7684 POC \u7248\u672c\uff0c\u6211\u5011\u7684\u5be6\u505a\u65b9\u5f0f\u662f\u8b93\u4f5c\u8005\u81ea\u884c\u6c7a\u5b9a Quota \u7684\u91d1\u984d\u8207\u6578\u91cf\uff0c\u9019\u6703\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5c0e\u81f4\u4e2d\u5fc3\u5316\u3002\u7136\u800c\uff0cQuotaShop \u7684\u50f9\u683c\u61c9\u8a72\u8981\u7531\u5e02\u5834\u4f86\u6c7a\u5b9a\uff0c\u6211\u5011\u6703\u5728\u672a\u4f86\u5f15\u5165\u6fc0\u52f5\u6a5f\u5236\u8b93\u793e\u7fa4\u5171\u540c\u53c3\u8207 QuotaShop \u7684\u5b9a\u50f9\uff0c\u8b93 QuotaShop \u7684\u50f9\u683c\u66f4\u52a0\u5408\u7406\u3002\\n:::\\n\\n#### Steps\\n\\n1. **Author** \u6703\u4f7f\u7528 `IssueQuota` \u4f86\u63d0\u4f9b **Quota** \u8b93\u5927\u5bb6\u4f86\u8cfc\u8cb7\uff0c\u4e26\u4e14\u6703\u8a02\u5b9a **Quota** \u7684\u50f9\u683c\u8207\u6578\u91cf\\n2. \u7531\u65bc **Alan** \u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff0c\u6240\u4ee5\u4ed6\u6703\u4f7f\u7528 `BuyQuota` \u4f86\u8cfc\u8cb7 **Quota**\\n3. **Alan** \u6703\u4f7f\u7528 `Transfer` \uff0c\u6d88\u8017 `Quota` \u4f86\u8f49\u79fb NFT \u7d66 **Jacky**\\n\\n\u7528\u65bc\u652f\u4ed8 `Quota` \u7684 TON \u6703\u5b58\u5132\u5728 `QuotaShop` \u4e2d\uff0c**Author** \u53ef\u4ee5\u96a8\u6642\u4f7f\u7528 `Withdraw` \u5c07 TON \u63d0\u9818\u51fa\u4f86\u3002\\n\\n### \ud83c\udfaf Auction\\n\\n![Auction](../../../../blog/2023-10-13-NFT%20Royalty%20Enforcement/images/auction.png)\\n\\n\u518d\u4f86\uff0c\u5982\u679c\u4f60\u671f\u671b\u80fd\u5920\u51fa\u552e NFT \u4e26\u4e14\u7372\u5f97\u6700\u5927\u5316\u7684\u6536\u5165\uff0c\u90a3\u9ebc\u6211\u5011\u63d0\u4f9b\u4e86 **Auction** \u9019\u7a2e\u89e3\u6c7a\u65b9\u6848\uff0c\u4e0d\u5fc5\u518d\u4f9d\u9760\u4e2d\u4ecb\u4eba\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 TON \u4e0a\u81ea\u5df1\u958b\u555f\u62cd\u8ce3\u3002\\n\\n\u62cd\u8ce3\u5206\u70ba\u5169\u7a2e\uff0c\u5169\u7a2e\u6a21\u5f0f\u6d41\u7a0b\u76f8\u540c\uff0c\u5728\u7d50\u675f\u7684\u6642\u5019\u6703\u5c07 NFT \u8f49\u79fb\u7d66\u6700\u9ad8\u51fa\u50f9\u8005\uff0c\u4e26\u4e14\u5c07\u5f97\u6a19\u7684\u4e00\u90e8\u5206 TON \u8f49\u79fb\u7d66 **Author** \u4f5c\u70ba\u7248\u7a05\u3002\u5982\u679c\u662f\u8cb7\u65b7 NFT \u788e\u7247\uff0c\u6536\u76ca\u5247\u7531\u6301\u6709\u788e\u7247\u7684\u4eba\u4f9d\u7167\u6bd4\u4f8b\u5206\u914d\u3002\\n\\n1. \u60f3\u8981\u51fa\u552e\u5b8c\u6574 NFT \u7684\u62cd\u8ce3\\n2. \u60f3\u8981\u8cb7\u65b7 NFT \u788e\u7247\u7684\u62cd\u8ce3\\n\\n#### Steps\\n\\n1. **Start Auction** \u6703\u958b\u555f\u62cd\u8ce3\uff0c\u4e26\u4e14\u5c07 NFT \u8f49\u79fb\u7d66 **Auction Contract**\\n2. \u7af6\u6a19\u8005\u6703\u4f7f\u7528 `Bid` \u4f86\u7af6\u6a19\\n3. \u7af6\u6a19\u7d50\u675f\u5f8c\uff0c**Auction Contract** \u6703\u5c07 NFT \u8f49\u79fb\u7d66\u6700\u9ad8\u51fa\u50f9\u8005\uff0c\u4e26\u4e14\u5c07\u5f97\u6a19\u7684\u4e00\u90e8\u5206 TON \u8f49\u79fb\u7d66 **Author** \u4f5c\u70ba\u7248\u7a05\\n\\n:::tip\\n\u5982\u679c\u662f\u8cb7\u65b7 NFT \u788e\u7247\uff0c\u6211\u5011\u6703\u5c07\u6536\u76ca\u5b58\u5165 `NFT Fraction (Jetton Master)`\uff0c\u6301\u6709\u788e\u7247\u7684\u4eba\u53ef\u4ee5\u96a8\u6642\u4f7f\u7528 `Withdraw` \u5c07 TON \u4f9d\u7167\u63d0\u9818\u51fa\u4f86\u3002\u6b64\u6642 `NFT Item` \u7684 `nullifier` \u6703\u52a0 1 \uff0c\u8b93\u4e0b\u6b21\u788e\u7247\u5316\u7684 `NFT Fraction` \u6703\u6709\u4e0d\u540c\u7684 `nullifier`\u3002\\n\\n\u9019\u6a23\u505a\u7684\u597d\u8655\u662f\u4e0d\u7528\u4e00\u4e00\u767c\u9001 TON \u7d66\u6bcf\u500b\u6301\u6709\u788e\u7247\u7684\u4eba\uff0c\u800c\u662f\u8b93\u4ed6\u5011\u81ea\u5df1\u4f86\u63d0\u9818\uff0c\u9019\u6a23\u4e00\u4f86\u53ef\u4ee5\u7bc0\u7701\u5f88\u591a Gas\u3002\\n:::\\n\\n## Summary\\n\\n\u4e0a\u9762\u4ecb\u7d39\u4e86\u6211\u5011\u4e0d\u540c\u7684\u7248\u7a05\u9078\u64c7\uff0c\u6211\u5011\u4f86\u7e3d\u7d50\u4e00\u4e0b\u4ed6\u5011\u7684\u7279\u6027\\n\\n|               | \u7248\u7a05\u652f\u4ed8     | \u8f49\u79fb\u6642\u9593                  | \u4f7f\u7528\u8005\u9078\u7528\u6642\u6a5f                                     |\\n| ------------- | ------------ | ------------------------- | -------------------------------------------------- |\\n| Fractionalize | NFT \u788e\u7247     | \u77ed                        | \u60f3\u8981\u7acb\u5373\u8f49\u79fb\uff0c\u4e26\u4e14\u4e0d\u60f3\u4f7f\u7528 TON / Jetton \u4f86\u652f\u4ed8\u7248\u7a05 |\\n| Quota         | TON / Jetton | \u4e2d\uff0c\u9700\u8981\u4e8b\u5148\u8cfc\u8cb7 Quota    | \u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff0c\u4f46\u4e0d\u60f3\u7b49\u5f85 Auction \u7d50\u675f        |\\n| Auction       | TON          | \u9577\uff0c\u9700\u8981\u7b49\u5f85 Auction \u7d50\u675f | \u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff0c\u4e26\u4e14\u60f3\u8981\u6700\u5927\u5316\u6536\u5165             |\\n\\n## Message Flows\\n\\n![Overview](../../../../blog/2023-10-13-NFT%20Royalty%20Enforcement/images/overview.png)\\n\\n## Implementation\\n\\n\u6211\u5011\u4f7f\u7528\u4e86 [Tact](https://tact-lang.org/) \u6309\u7167 [TON Enhancement Proposals (TEP)](https://github.com/ton-blockchain/TEPs) \u64b0\u5beb\u4e86\u4e00\u7cfb\u5217\u7684\u6a19\u6e96\u3001\u53ef\u8907\u7528\u7684 `traits`\uff0c\u4e26\u4e14\u4f7f\u7528\u9019\u4e9b `traits` \u4f86\u5be6\u4f5c\u6211\u5011[\u4e0a\u8ff0\u8aaa\u660e\u7684 NFT Enforced Royalty \u6a5f\u5236](https://github.com/Ton-Dynasty/tondynasty-contracts/blob/main/contracts/nft_enforce_royalty_example.tact)\u3002\u4e26\u4e14\u91dd\u5c0d NFT Enfroced Royalty \u64b0\u5beb\u4e86[\u4e00\u7cfb\u5217\u7684 Test \u4f86\u9a57\u8b49\u6211\u5011\u7684\u5be6\u4f5c](https://github.com/Ton-Dynasty/tondynasty-contracts/tree/main/tests/NFTEnforceRoyalty)\u3002\\n\\n<GithubBookmark owner=\\"Ton-Dynasty\\" repoName=\\"tondynasty-contracts\\" />\\n\\n## Future Works\\n\\n\u6211\u5011\u63d0\u51fa\u4e86\u4e00\u500b\u65b0\u7684\u6982\u5ff5 \u2014 Hybrid Royalty\uff0c\u8b93 NFT \u5728\u63db\u624b\u6642\uff0c\u4f5c\u8005\u4e5f\u80fd\u5920\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002\u6211\u5011\u7684\u89e3\u6c7a\u65b9\u6848\u53ef\u4ee5\u8b93\u5275\u4f5c\u8005\u548c NFT \u6301\u6709\u8005\u4e4b\u9593\u9054\u5230\u96d9\u8d0f\uff0c\u5728 TON \u5275\u9020\u4e00\u500b\u66f4\u597d\u7684 NFT \u751f\u614b\u7cfb\u7d71\u3002\\n\\n\u5728\u76ee\u524d\u7684 POC \u7248\u672c\uff0c\u6211\u5011\u5c0d\u65bc QuotaShop \u7684\u5be6\u505a\u662f\u8b93 Author \u53ef\u4ee5\u81ea\u884c\u5b9a\u50f9\u3002\u672a\u4f86\uff0c\u6211\u5011\u5c07\u6703\u8b93\u793e\u7fa4\u878d\u5165\u9019\u500b QuotaShop \u7684\u5b9a\u50f9\u6a5f\u5236\uff0c\u5229\u7528\u6fc0\u52f5\u6a5f\u5236\u9084\u6709\u5e02\u5834\u7684\u529b\u91cf\u4f86\u6c7a\u5b9a\u50f9\u683c\uff0c\u8b93 QuotaShop \u7684\u5b9a\u50f9\u66f4\u52a0\u5408\u7406\u3002\\n\\n## Resources\\n\\n- [TEP-0062 NFT Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md)\\n- [TEP-0064 Token Data Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md)\\n- [TEP-0066 NFT Royalty Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0066-nft-royalty-standard.md)\\n- [TEP-0074 Jetton Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md)"}]}')}}]);