"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[291],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},y="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),y=s(n),f=o,m=y["".concat(i,".").concat(f)]||y[f]||p[f]||a;return n?r.createElement(m,c(c({ref:e},u),{},{components:n})):r.createElement(m,c({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[y]="string"==typeof t?t:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8001:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"nft-enforced-royalty",title:"NFT Enforced Royalty",authors:["alan","maxey","jacky","maroon"],tags:["nft","royalty","fractionalize","jetton"]},c=void 0,l={permalink:"/docs.contracts/zh-tw/blog/nft-enforced-royalty",editUrl:"https://github.com/Ton-Dynasty/tondynasty-contracts/pulls/blog/2023-10-13-NFT Royalty Enforcement/index.mdx",source:"@site/i18n/zh-tw/docusaurus-plugin-content-blog/2023-10-13-NFT Royalty Enforcement/index.mdx",title:"NFT Enforced Royalty",description:"Introduction",date:"2023-10-13T00:00:00.000Z",formattedDate:"2023\u5e7410\u670813\u65e5",tags:[{label:"nft",permalink:"/docs.contracts/zh-tw/blog/tags/nft"},{label:"royalty",permalink:"/docs.contracts/zh-tw/blog/tags/royalty"},{label:"fractionalize",permalink:"/docs.contracts/zh-tw/blog/tags/fractionalize"},{label:"jetton",permalink:"/docs.contracts/zh-tw/blog/tags/jetton"}],readingTime:12.64,hasTruncateMarker:!0,authors:[{name:"Yu Lun Hsu (Alan)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/alan890104",imageURL:"https://github.com/alan890104.png",key:"alan"},{name:"Li Xun Liu (Maxey)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/ipromise2324",imageURL:"https://github.com/ipromise2324.png",key:"maxey"},{name:"Yu Cheng Tsai (Jacky)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/WaterSo0910",imageURL:"https://github.com/WaterSo0910.png",key:"jacky"},{name:"Wei Cheng Wang (Xander)",title:"Co-Founder of Ton-Dynasty",url:"https://github.com/skyline9981",imageURL:"https://github.com/skyline9981.png",key:"maroon"}],frontMatter:{slug:"nft-enforced-royalty",title:"NFT Enforced Royalty",authors:["alan","maxey","jacky","maroon"],tags:["nft","royalty","fractionalize","jetton"]}},i={authorsImageUrls:[void 0,void 0,void 0,void 0]},s=[{value:"Introduction",id:"introduction",level:2}],u={toc:s},y="wrapper";function p(t){let{components:e,...n}=t;return(0,o.kt)(y,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"\u6578\u4f4d\u85dd\u8853\u5de5\u4f5c\u8005\u5011\u8acb\u76e1\u60c5\u6fc0\u767c\u4f60\u5011\u7684\u5275\u610f\u5427\uff01\u904e\u53bb\uff0c\u7531\u65bc NFT \u5f37\u5236\u7248\u7a05\u57f7\u884c\u5e36\u4f86\u7684\u8ca0\u9762\u5f71\u97ff\uff0c\u5c0e\u81f4\u85dd\u8853\u5bb6\u4ee4\u4eba\u9a5a\u8a6b\u7684\u5275\u9020\u529b\u5f80\u5f80\u672a\u80fd\u63db\u5f97\u61c9\u5f97\u7684\u56de\u5831\u3002\u800c\u73fe\u5728\uff0cTonDynasty \u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u63a8\u51fa\u4e86\u4e00\u500b\u5168\u65b0\u7684\u89e3\u6c7a\u65b9\u6848\u2014\u2014 Hybrid NFT Enforced Royalty\uff0c\u4e26\u5728 TON \u4e0a\u6210\u529f\u5be6\u73fe\u4e86\u9019\u4e00\u6a5f\u5236\u3002\u6211\u5011\u4e5f\u95dc\u6ce8\u4f7f\u7528\u8005\u9ad4\u9a57\uff0c\u8b93\u5404\u4f4d NFT Holders \u80fd\u5920\u81ea\u7531\u5f9c\u5f89\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"TON")," \u7684\u4e16\u754c\u88e1\uff01"),(0,o.kt)("p",null,"\u9ede\u64ca ",(0,o.kt)("strong",{parentName:"p"},"\u95b1\u8b80\u66f4\u591a")," \u4f86\u6df1\u5165\u4e86\u89e3\u6211\u5011\u7684 NFT Enforced Royalty \u8a2d\u8a08\u6587\u6a94\u3002"))}p.isMDXComponent=!0}}]);