"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[877],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(a),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,l(l({ref:e},c),{},{components:a})):n.createElement(k,l({ref:e},c))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7858:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={slug:"nft-enforced-royalty",title:"NFT Enforced Royalty",authors:["alan","maxey","jacky","maroon"],tags:["nft","royalty","fractionalize","jetton"]},l=void 0,i={permalink:"/docs.contracts/blog/nft-enforced-royalty",editUrl:"https://github.com/Ton-Dynasty/tondynasty-contracts/pulls/blog/2023-10-13-NFT Royalty Enforcement/index.mdx",source:"@site/blog/2023-10-13-NFT Royalty Enforcement/index.mdx",title:"NFT Enforced Royalty",description:"Introduction",date:"2023-10-13T00:00:00.000Z",formattedDate:"October 13, 2023",tags:[{label:"nft",permalink:"/docs.contracts/blog/tags/nft"},{label:"royalty",permalink:"/docs.contracts/blog/tags/royalty"},{label:"fractionalize",permalink:"/docs.contracts/blog/tags/fractionalize"},{label:"jetton",permalink:"/docs.contracts/blog/tags/jetton"}],readingTime:10.575,hasTruncateMarker:!0,authors:[{name:"Yu Lun Hsu (Alan)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/alan890104",imageURL:"https://github.com/alan890104.png",key:"alan"},{name:"Li Xun Liu (Maxey)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/ipromise2324",imageURL:"https://github.com/ipromise2324.png",key:"maxey"},{name:"Yu Cheng Tsai (Jacky)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/WaterSo0910",imageURL:"https://github.com/WaterSo0910.png",key:"jacky"},{name:"Wei Cheng Wang (Xander)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/skyline9981",imageURL:"https://github.com/skyline9981.png",key:"maroon"}],frontMatter:{slug:"nft-enforced-royalty",title:"NFT Enforced Royalty",authors:["alan","maxey","jacky","maroon"],tags:["nft","royalty","fractionalize","jetton"]}},s={authorsImageUrls:[void 0,void 0,void 0,void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:2},{value:"What is NFT &amp; Enforced Royalty?",id:"what-is-nft--enforced-royalty",level:3},{value:"What is Fractionalization?",id:"what-is-fractionalization",level:3},{value:"Motivation",id:"motivation",level:2},{value:"Discussions",id:"discussions",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Core Concepts - Hybrid Royalty",id:"core-concepts---hybrid-royalty",level:2},{value:"Solutions",id:"solutions",level:2},{value:"\ud83c\udfaf Fractionalize",id:"-fractionalize",level:3},{value:"Steps",id:"steps",level:4},{value:"\ud83c\udfaf Quota",id:"-quota",level:3},{value:"Steps",id:"steps-1",level:4},{value:"\ud83c\udfaf Auction",id:"-auction",level:3},{value:"Summary",id:"summary",level:2},{value:"Message Flows",id:"message-flows",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p},u="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Imagine a world where artists are effortlessly rewarded each time their work changes hands, ensuring their continuous recognition and compensation.\ud83d\udcb0 Leveraging the groundbreaking power of NFT fractionalization, we've sculpted a solution that is not only intuitively simple but also remarkably effective, seamlessly intertwining with existing NFT standards."),(0,o.kt)("p",null,"Your journey through the revolutionary pathways of NFT enforced royalties on TON begins here \u2013 where the equitable future of digital artistry is being rewritten! \ud83c\udfa8\u2728"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"readmore")," to learn more about our project."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"\u70ba\u4e86\u66f4\u597d\u7684\u7406\u89e3\u6211\u5011\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u6211\u5011\u5728\u9019\u500b\u7ae0\u7bc0\u6703\u5148\u4ecb\u7d39 NFT Enforced Royalty \u548c Fractionalization \u7684\u80cc\u666f\u77e5\u8b58\u3002"),(0,o.kt)("h3",{id:"what-is-nft--enforced-royalty"},"What is NFT & Enforced Royalty?"),(0,o.kt)("p",null,"NFT (Non-Fungible Token) \u7684\u51fa\u73fe\u63d0\u4f9b\u4e86\u4e00\u7a2e\u53ef\u7a0b\u5f0f\u5316\u7684\u6578\u4f4d\u8cc7\u7522\uff0c\u4e5f\u4f5c\u70ba\u6578\u4f4d\u85dd\u8853\u54c1\u7684\u6191\u8b49\u3002NFT \u7684\u63d0\u51fa\u5141\u8a31\u4f5c\u5bb6\u5011\u80fd\u5920\u6301\u7e8c\u8ffd\u8e64\u4f7f\u7528\u8005\u7684\u8f49\u624b\u4ea4\u6613 (transfer)\uff0c\u4e26\u4e14\u5728\u6bcf\u6b21\u8f49\u624b\u4ea4\u6613\u6642\uff0c\u4f5c\u5bb6\u5011\u53ef\u4ee5\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002"),(0,o.kt)("p",null,"\u5f37\u5236\u57f7\u884c\u7248\u7a05\u662f\u4e00\u500b\u5099\u53d7\u8a0e\u8ad6\u7684\u8b70\u984c\uff0c\u5f37\u5236\u7248\u7a05\u53ef\u4ee5\u4f7f\u5275\u4f5c\u8005\u7372\u5f97\u61c9\u6709\u7684\u6536\u76ca\uff0c\u4e0d\u904e\u904e\u9ad8\u7684\u7248\u7a05\u4e5f\u6703\u4e00\u5b9a\u7a0b\u5ea6\u964d\u4f4e\u5e02\u5834\u7684\u6d41\u901a\u6027\u30022023 \u5e74 8 \u6708\uff0c\u4ee5\u592a\u574a\u4e0a\u7684 NFT \u5e73\u53f0 OpenSea \u6c7a\u5b9a\u53d6\u6d88\u5176\u93c8\u4e0a\u7248\u7a05\u57f7\u884c\u5de5\u5177 \u2014 Operator Filter\uff0c\u8a72\u5de5\u5177\u5141\u8a31\u5275\u4f5c\u8005\u5c01\u9396\u4e0d\u57f7\u884c\u7248\u7a05\u7684 NFT \u5e02\u5834\u3002\u6b64\u8209\u53ef\u80fd\u5c0d\u671f\u671b\u901a\u904e\u7248\u7a05\u7372\u5f97\u88ab\u52d5\u6536\u5165\u7684 NFT \u85dd\u8853\u5bb6\u9020\u6210\u5f71\u97ff\uff0c\u4e0d\u904e\u53ef\u80fd\u56e0\u6b64\u62ef\u6551\u4f4e\u8ff7\u7684\u5e02\u5834\u3002"),(0,o.kt)("h3",{id:"what-is-fractionalization"},"What is Fractionalization?"),(0,o.kt)("p",null,"Fractionalization \u662f\u4e00\u7a2e\u5c07 NFT \u5206\u5272\u6210\u591a\u500b\u90e8\u5206\u7684\u6280\u8853\uff0c\u9019\u4e9b\u90e8\u5206\u53ef\u4ee5\u88ab\u4e0d\u540c\u7684\u6301\u6709\u8005\u64c1\u6709\u3002Fractionalization \u7684\u51fa\u73fe\u4f7f\u5f97 NFT \u7684\u6d41\u901a\u6027\u5927\u5e45\u63d0\u5347\uff0c\u4e5f\u4f7f\u5f97 NFT \u7684\u50f9\u503c\u66f4\u52a0\u5bb9\u6613\u88ab\u5e02\u5834\u6240\u63a5\u53d7\u3002\u8209\u4f8b\u4f86\u8aaa\u4e00\u500b NFT \u7684\u50f9\u503c\u70ba 1000 USD\uff0cFractionalization \u53ef\u4ee5\u5c07\u5176\u5206\u5272\u6210 100 \u500b\u90e8\u5206(\u901a\u5e38\u4f7f\u7528 Fungible Token \u4f86\u4f5c\u70ba\u6191\u8b49)\uff0c\u6bcf\u500b\u90e8\u5206\u50f9\u503c 10 USD\uff0c\u9019\u6a23\u4e00\u4f86\uff0c\u539f\u672c\u50f9\u503c 1000 USD \u7684 NFT \u5c31\u53ef\u4ee5\u88ab 100 \u500b\u4eba\u64c1\u6709\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728\u5e02\u5834\u4e0a\u81ea\u7531\u4ea4\u6613\u3002"),(0,o.kt)("p",null,"\u6211\u5011\u5c07 ",(0,o.kt)("a",{parentName:"p",href:"https://www.leewayhertz.com/fractional-nft/"},"Ethereum \u7684 NFT Fractionalization")," \u6539\u9020\u6210\u9069\u5408 TON \u7684\u65b9\u6cd5\uff0c\u4e26\u4e14\u5c07\u5176\u61c9\u7528\u5728 NFT Enforced Royalty \u4e0a\u3002"),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"\u5728 TON blockchain \u4e0a\u4e0d\u4e4f\u6709 NFT Enforced Royalty \u76f8\u95dc\u7684\u8a0e\u8ad6\uff0c\u7531\u65bc TON \u7684\u7570\u6b65\u548c\u5408\u7d04\u53ef\u5347\u7d1a\u7b49\u7279\u6027\uff0cNFT \u7684\u7248\u7a05\u57f7\u884c\u6a5f\u5236\u4e5f\u6709\u4e86\u66f4\u591a\u7684\u53ef\u80fd\u6027\u3002\u5728 TON \u4e0a\uff0cNFT \u7684\u7248\u7a05\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md"},"TEP-0064")," \u4e2d\u6709\u8a02\u5b9a\u53d6\u5f97\u7248\u7a05\u7684\u65b9\u5f0f\uff0c\u4e0d\u904e\u4e26\u6c92\u6709\u898f\u5b9a\u7248\u7a05\u7684\u57f7\u884c\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u5728 TON \u4e0a\u5f37\u5236\u57f7\u884c\u7248\u7a05\u96d6\u7136\u53ef\u4ee5\u4fdd\u969c\u5275\u4f5c\u8005\u7684\u6b0a\u76ca\uff0c\u4f46\u53ef\u80fd\u6703\u9020\u6210\u4f7f\u7528\u8005\u9ad4\u9a57\u4e0d\u4f73\u7684\u60c5\u5f62\uff0c\u8209\u4f8b\u4f86\u8aaa\uff1a\u4e00\u500b\u4eba\u60f3\u8981\u5c0d\u6301\u6709 NFT \u7684\u9322\u5305\u9032\u884c\u5347\u7d1a\uff0c\u7531\u65bc\u5347\u7d1a\u5f8c\u9322\u5305\u5730\u5740\u6539\u8b8a\uff0c\u9700\u8981\u8f49\u79fb\u539f\u5148\u5730\u5740\u64c1\u6709\u7684 NFT\u3002\u4e0d\u904e\u7531\u65bc NFT \u7684\u7248\u7a05\u57f7\u884c\u6a5f\u5236\uff0c\u8f49\u79fb NFT \u6642\u9700\u8981\u652f\u4ed8\u7248\u7a05\uff0c\u9019\u6a23\u4e00\u4f86\u5c31\u6703\u9020\u6210\u4f7f\u7528\u8005\u5728\u8f49\u79fb NFT \u6642\u9700\u8981\u652f\u4ed8\u984d\u5916\u7684\u8cbb\u7528\uff0c\u9019\u6a23\u7684\u9ad4\u9a57\u5c0d\u65bc\u4f7f\u7528\u8005\u4f86\u8aaa\u662f\u4e0d\u53cb\u5584\u7684\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u5011\u60f3\u8981\u5728 TON \u4e0a\u5be6\u73fe\u4f7f\u7528\u8005\u53cb\u5584\u4e26\u4e14\u517c\u5bb9\u6027\u7684 NFT Enforced Royalty \u6a5f\u5236\uff0c\u4f7f\u5f97 NFT \u7684\u7248\u7a05\u57f7\u884c\u4e0d\u6703\u5c0d\u4f7f\u7528\u8005\u9020\u6210\u8ca0\u64d4\u3002\u6211\u5011\u63d0\u4f9b\u4e86\u591a\u7a2e\u9078\u9805\u7d66\u4f7f\u7528\u8005\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u7531\u9078\u64c7\u81ea\u5df1\u60f3\u8981\u7684\u7248\u7a05\u5f37\u5236\u57f7\u884c\u6a5f\u5236\u3002"),(0,o.kt)("h2",{id:"discussions"},"Discussions"),(0,o.kt)("p",null,"\u6211\u5011\u5728\u9019\u500b\u7ae0\u7bc0\u8a0e\u8ad6\u73fe\u6709 NFT Enforced Royalty \u7684\u9700\u6c42\uff0c\u4e26\u4e14\u6703\u5728\u4e0b\u4e00\u7ae0\u7bc0\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Core Concept")," \u4e2d\u63d0\u51fa\u89e3\u6c7a\u65b9\u6848\u3002"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"NFT Enforced Royalty \u5728\u6bcf\u6b21\u9032\u884c\u4ea4\u6613\u6642\uff0c\u90fd\u8981\u6839\u64da\u4ea4\u6613\u984d\u6536\u53d6\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002")),(0,o.kt)("p",null,"\u9019\u500b\u6bd4\u8f03\u6c92\u6709\u7570\u8b70\uff0c\u56e0\u70ba\u9019\u662f NFT Enforced Royalty \u7684\u57fa\u672c\u9700\u6c42\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"NFT \u5728\u6c92\u6709\u4ea4\u6613\u984d\u7684\u63db\u624b (Transfer) \u6642\uff0c\u9700\u8981\u5728\u4e0d\u5f71\u97ff\u4f7f\u7528\u8005\u9ad4\u9a57\u7684\u60c5\u6cc1\u4e0b (e.g. Transfer \u7684\u6642\u5019\u8981\u6536\u53d6)\uff0c\u6536\u53d6\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002")),(0,o.kt)("p",null,"\u9019\u500b\u9700\u6c42\u53ef\u80fd\u662f\u6bd4\u8f03\u6709\u722d\u8b70\u7684\uff0c\u56e0\u70ba\u9019\u6a23\u4e00\u4f86\uff0c\u4f7f\u7528\u8005\u5728\u8f49\u79fb NFT \u6642\u9700\u8981\u652f\u4ed8\u984d\u5916\u7684\u8cbb\u7528\uff0c\u9019\u6a23\u7684\u9ad4\u9a57\u5c0d\u65bc\u4f7f\u7528\u8005\u4f86\u8aaa\u662f\u4e0d\u53cb\u5584\u7684\u3002\u4e0d\u904e\u9019\u500b\u9700\u6c42\u4e5f\u662f\u6709\u5176\u5408\u7406\u6027\u7684\uff0c\u56e0\u70ba\u9019\u6a23\u4e00\u4f86\uff0c\u5275\u4f5c\u8005\u53ef\u4ee5\u5728 NFT \u6c92\u6709\u4ea4\u6613\u984d\u7684\u63db\u624b\u6642\uff0c\u4e5f\u80fd\u5920\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002"),(0,o.kt)("p",null,"\u4e00\u500b\u5f88\u76f4\u89ba\u7684\u89e3\u6c7a\u65b9\u5f0f\u662f\u8b93\u4f5c\u8005\u80fd\u5920\u5f37\u5236\u7981\u7528\u6c92\u6709\u7e73\u4ea4\u7248\u7a05\u7684 NFT\uff0c\u4e0d\u904e\u9019\u6a23\u4e00\u4f86\uff0c\u4f5c\u8005\u5c31\u53ef\u4ee5\u96a8\u610f\u5c01\u9396 NFT \u7684\u4ea4\u6613\uff0c\u53ef\u80fd\u9020\u6210\u5e02\u5834\u4e0a\u7684\u4e0d\u516c\u5e73\uff0c\u4e26\u5f71\u97ff\u5230 NFT \u7684\u6d41\u901a\u6027\u548c\u50f9\u503c\u3002\u6b64\u5916\uff0c\u9019\u4e5f\u53ef\u80fd\u6703\u4f7f\u5f97 NFT \u7684\u5e02\u5834\u8b8a\u5f97",(0,o.kt)("strong",{parentName:"p"},"\u904e\u65bc\u4e2d\u5fc3\u5316"),"\uff0c\u56e0\u70ba\u5275\u4f5c\u8005\u6216\u7248\u6b0a\u6301\u6709\u4eba\u6703\u6709\u904e\u5927\u7684\u63a7\u5236\u6b0a\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u9700\u8981\u5c0b\u627e\u4e00\u500b\u5e73\u8861\u9ede\uff0c\u4ee5\u78ba\u4fdd\u5275\u4f5c\u8005\u7684\u5229\u76ca\u548c\u4f7f\u7528\u8005\u7684\u6b0a\u5229\u4e4b\u9593\u7684\u5e73\u8861\u3002"),(0,o.kt)("h2",{id:"core-concepts---hybrid-royalty"},"Core Concepts - Hybrid Royalty"),(0,o.kt)("p",null,"\u70ba\u4e86\u627e\u5230\u5275\u4f5c\u8005\u548c\u4f7f\u7528\u8005\u4e4b\u9593\u7684\u5e73\u8861\u9ede\uff0c\u6211\u5011\u63d0\u51fa\u4e86\u4e09\u7a2e\u4e0d\u540c\u7684\u89e3\u6c7a\u65b9\u6848\u540c\u6642\u904b\u884c\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u7531\u9078\u64c7\u81ea\u5df1\u60f3\u8981\u7684\u7248\u7a05\u5f37\u5236\u57f7\u884c\u6a5f\u5236\uff0c\u4e26\u4e14\u5728\u4e0d\u72a7\u7272\u4f7f\u7528\u8005\u9ad4\u9a57\u7684\u60c5\u6cc1\u4e0b\uff0c\u8b93\u5275\u4f5c\u8005\u80fd\u5920\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u552f\u6709\u62cd\u8ce3 (Auction) \u80fd\u5920\u7522\u751f\u4ea4\u6613\u984d\u4e26\u8a08\u7b97\u7248\u7a05\uff0c\u90a3\u5728 Transfer \u5982\u4f55\u6536\u53d6\u8cbb\u7528\u5462\uff1f\u6211\u5011\u63d0\u51fa\u4e86\u4e00\u500b\u65b0\u7684\u6982\u5ff5 \u2014 Hybrid Royalty\uff0c\u8b93 NFT \u5728\u6c92\u6709\u4ea4\u6613\u984d\u7684\u63db\u624b\u6642\uff0c\u4e5f\u80fd\u5920\u7372\u5f97\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e5f\u5c31\u662f\u8aaa NFT \u6301\u6709\u8005\u4f9d\u7136\u9700\u8981\u652f\u4ed8\u7248\u7a05\uff0c\u4f46\u662f\u53ef\u4ee5\u9078\u64c7\u4e0d\u4f7f\u7528 TON / Jetton \u4f86\u652f\u4ed8\uff0c\u53ef\u4ee5\u5c07 NFT \u788e\u7247\u5316\u4e26\u62bd\u53d6\u5176\u4e2d\u4e00\u5b9a\u6bd4\u4f8b\u4f5c\u70ba\u7248\u7a05\u3002")),(0,o.kt)("h2",{id:"solutions"},"Solutions"),(0,o.kt)("p",null,"\u6211\u5011\u5728\u9019\u500b\u7ae0\u7bc0\u6703\u4ee5\u5716\u4f8b\u7684\u65b9\u5f0f\u5448\u73fe\uff0c\u8209\u4f8b\u8aaa\u660e\u6211\u5011\u7684 Hybrid Royalty \u6a5f\u5236\u662f\u5982\u4f55\u8b93\u5275\u4f5c\u8005\u548c NFT \u6301\u6709\u8005\u4e4b\u9593\u9054\u5230\u96d9\u8d0f\u7684\u3002"),(0,o.kt)("h3",{id:"-fractionalize"},"\ud83c\udfaf Fractionalize"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fractionalize",src:a(9399).Z,width:"1968",height:"1062"})),(0,o.kt)("p",null,"\u6211\u5011\u5148\u8b1b\u8ff0\u6211\u5011\u7684\u6838\u5fc3 - \u4f7f\u7528 NFT \u788e\u7247\u652f\u4ed8\u7248\u7a05"),(0,o.kt)("h4",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7576 ",(0,o.kt)("strong",{parentName:"li"},"Alan")," \u8f49\u79fb ",(0,o.kt)("strong",{parentName:"li"},"NFT Item")," \u6642\uff0c",(0,o.kt)("strong",{parentName:"li"},"NFT Item")," \u6703\u88ab\u9396\u5b9a"),(0,o.kt)("li",{parentName:"ol"},"\u9444\u9020 ",(0,o.kt)("strong",{parentName:"li"},"NFT Fraction (Jetton)")," \u7d66 ",(0,o.kt)("strong",{parentName:"li"},"Jacky")),(0,o.kt)("li",{parentName:"ol"},"\u53e6\u4e00\u90e8\u4efd\u6703\u9444\u9020\u7d66 ",(0,o.kt)("strong",{parentName:"li"},"Author")," \u4f5c\u70ba\u7248\u7a05\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9019\u4e9b ",(0,o.kt)("strong",{parentName:"li"},"NFT Fraction")," \u672a\u4f86\u518d\u8f49\u79fb\u7d66\u5176\u4ed6\u4eba\u6642\uff0c\u4e5f\u6703\u6263\u9664\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7248\u7a05\u3002")),(0,o.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u6211\u5011\u53ef\u4ee5\u5c07 NFT \u788e\u7247\u7576\u4f5c\u662f\u4e00\u7a2e\u80a1\u4efd\uff08Share\uff09\uff0c\u672a\u4f86\u7684\u984d\u5916\u6536\u76ca\u90fd\u6703\u4ea4\u7d66\u6301\u6709\u788e\u7247\u7684\u4eba\uff0c\u4f8b\u5982\u8aaa\u6709\u4eba\u8981\u8cb7\u65b7 NFT \uff08\u6536\u8cfc\u6240\u6709\u788e\u7247\uff09\uff0c\u90a3\u6536\u8cfc\u6240\u4ed8\u51fa\u7684\u91d1\u984d\u5c31\u6703\u4f9d\u7167\u788e\u7247\u7684\u6bd4\u4f8b\u5206\u914d\u7d66\u6bcf\u500b\u788e\u7247\u7684\u6301\u6709\u8005\u3002"),(0,o.kt)("p",null,"\u4e0d\u904e\u770b\u5230\u9019\u88e1\uff0c\u4f60\u53ef\u80fd\u6703\u60f3\uff1a"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u6211\u4e0d\u60f3\u8981\u6211\u7684 NFT \u8b8a\u6210\u788e\u7247\uff01\u6211\u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff01"))),(0,o.kt)("p",null,"\u6216\u662f"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u6211\u4e0d\u60f3\u8981\u6211\u6301\u6709\u7684 NFT \u788e\u7247\u96a8\u6642\u90fd\u80fd\u88ab\u6536\u8cfc\uff01"))),(0,o.kt)("p",null,"\u6c92\u95dc\u4fc2\uff01\u6211\u5011\u63d0\u4f9b\u4e86\u591a\u7a2e\u9078\u9805\u7d66\u4f7f\u7528\u8005\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u7531\u9078\u64c7\u81ea\u5df1\u60f3\u8981\u7684\u7248\u7a05\u5f37\u5236\u57f7\u884c\u6a5f\u5236\u3002\u63a5\u4e0b\u4f86\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Quota")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"Auction")," \u5c31\u662f\u4e0d\u6703\u788e\u7247\u5316\u7684\u89e3\u6c7a\u65b9\u6848\u3002"),(0,o.kt)("h3",{id:"-quota"},"\ud83c\udfaf Quota"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quota",src:a(6721).Z,width:"1968",height:"994"})),(0,o.kt)("p",null,"\u6709\u9451\u65bc\u6709\u4e9b\u4eba\u60f3\u8981\u5b8c\u6574\u7684\u8f49\u79fb NFT\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u8981\u85c9\u7531 ",(0,o.kt)("strong",{parentName:"p"},"Auction")," \u9019\u7a2e\u8017\u6642\u9593\u7684\u65b9\u5f0f\u4f86\u8f49\u79fb\uff0c\u6211\u5011\u63d0\u4f9b\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"Quota")," \u9019\u7a2e\u89e3\u6c7a\u65b9\u6848\u3002"),(0,o.kt)("h4",{id:"steps-1"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Author")," \u6703\u4f7f\u7528  ",(0,o.kt)("inlineCode",{parentName:"li"},"IssueQuota")," \u4f86\u63d0\u4f9b ",(0,o.kt)("strong",{parentName:"li"},"Quota")," \u8b93\u5927\u5bb6\u4f86\u8cfc\u8cb7\uff0c\u4e26\u4e14\u6703\u8a02\u5b9a ",(0,o.kt)("strong",{parentName:"li"},"Quota")," \u7684\u50f9\u683c\u8207\u6578\u91cf"),(0,o.kt)("li",{parentName:"ol"},"\u7531\u65bc ",(0,o.kt)("strong",{parentName:"li"},"Alan")," \u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff0c\u6240\u4ee5\u4ed6\u6703\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"BuyQuota")," \u4f86\u8cfc\u8cb7 ",(0,o.kt)("strong",{parentName:"li"},"Quota")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Alan")," \u6703\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," \uff0c\u6d88\u8017 ",(0,o.kt)("inlineCode",{parentName:"li"},"Quota")," \u4f86\u8f49\u79fb NFT \u7d66 ",(0,o.kt)("strong",{parentName:"li"},"Jacky"))),(0,o.kt)("p",null,"\u7528\u65bc\u652f\u4ed8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Quota")," \u7684 TON \u6703\u5b58\u5132\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"QuotaShop")," \u4e2d\uff0c",(0,o.kt)("strong",{parentName:"p"},"Author")," \u53ef\u4ee5\u96a8\u6642\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdraw")," \u5c07 TON \u63d0\u9818\u51fa\u4f86\u3002"),(0,o.kt)("h3",{id:"-auction"},"\ud83c\udfaf Auction"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Auction",src:a(8251).Z,width:"1968",height:"2062"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"\u4e0a\u9762\u4ecb\u7d39\u4e86\u6211\u5011\u4e0d\u540c\u7684\u7248\u7a05\u9078\u64c7\uff0c\u6211\u5011\u4f86\u7e3d\u7d50\u4e00\u4e0b\u4ed6\u5011\u7684\u7279\u6027"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"\u7248\u7a05\u652f\u4ed8"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8f49\u79fb\u6642\u9593"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u8005\u9078\u7528\u6642\u6a5f"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Fractionalize"),(0,o.kt)("td",{parentName:"tr",align:null},"NFT \u788e\u7247"),(0,o.kt)("td",{parentName:"tr",align:null},"\u77ed"),(0,o.kt)("td",{parentName:"tr",align:null},"\u60f3\u8981\u7acb\u5373\u8f49\u79fb\uff0c\u4e26\u4e14\u4e0d\u60f3\u4f7f\u7528 TON / Jetton \u4f86\u652f\u4ed8\u7248\u7a05")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Quota"),(0,o.kt)("td",{parentName:"tr",align:null},"TON / Jetton"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e2d\uff0c\u9700\u8981\u4e8b\u5148\u8cfc\u8cb7 Quota"),(0,o.kt)("td",{parentName:"tr",align:null},"\u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff0c\u4f46\u4e0d\u60f3\u7b49\u5f85 Auction \u7d50\u675f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Auction"),(0,o.kt)("td",{parentName:"tr",align:null},"TON"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9577\uff0c\u9700\u8981\u7b49\u5f85 Auction \u7d50\u675f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u60f3\u8981\u8f49\u79fb\u5b8c\u6574\u7684 NFT\uff0c\u4e26\u4e14\u60f3\u8981\u6700\u5927\u5316\u6536\u5165")))),(0,o.kt)("h2",{id:"message-flows"},"Message Flows"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overview",src:a(9958).Z,width:"3025",height:"1813"})),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"\u6211\u5011\u4f7f\u7528\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://tact-lang.org/"},"Tact")," \u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ton-blockchain/TEPs"},"TON Enhancement Proposals (TEP)")," \u64b0\u5beb\u4e86\u4e00\u7cfb\u5217\u7684\u6a19\u6e96\u3001\u53ef\u8907\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"traits"),"\uff0c\u4e26\u4e14\u4f7f\u7528\u9019\u4e9b ",(0,o.kt)("inlineCode",{parentName:"p"},"traits")," \u4f86\u5be6\u4f5c\u6211\u5011",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ton-Dynasty/tondynasty-contracts/blob/main/contracts/nft_enforce_royalty_example.tact"},"\u4e0a\u8ff0\u8aaa\u660e\u7684 NFT Enforced Royalty \u6a5f\u5236"),"\u3002\u4e26\u4e14\u91dd\u5c0d NFT Enfroced Royalty \u64b0\u5beb\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ton-Dynasty/tondynasty-contracts/tree/main/tests/NFTEnforceRoyalty"},"\u4e00\u7cfb\u5217\u7684 Test \u4f86\u9a57\u8b49\u6211\u5011\u7684\u5be6\u4f5c"),"\u3002"),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md"},"TEP-0062 NFT Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md"},"TEP-0064 Token Data Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0066-nft-royalty-standard.md"},"TEP-0066 NFT Royalty Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md"},"TEP-0074 Jetton Standard"))))}m.isMDXComponent=!0},8251:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/auction-480499f24be791454956299749e2a6f8.png"},9399:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fractionalize-a767f8d19c9d60390d68b9f094c68f32.png"},9958:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/overview-ff105f83567cfe948a20af9568719c6f.png"},6721:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/quota-ebb864a2bc2780a39453d2d464687cbd.png"}}]);