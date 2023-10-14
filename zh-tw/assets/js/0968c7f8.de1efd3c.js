"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},_="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),_=d(n),p=l,f=_["".concat(c,".").concat(p)]||_[p]||u[p]||o;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[_]="string"==typeof e?e:l,a[1]=r;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(7462),l=(n(7294),n(3905));const o={sidebar_position:1},a=void 0,r={unversionedId:"nft/NFTCollection",id:"nft/NFTCollection",title:"NFTCollection",description:"This NFT Collection smart contract provides a framework for NFT collections that comply with the TEP-0062 standard.",source:"@site/i18n/zh-tw/docusaurus-plugin-content-docs/current/nft/NFTCollection.mdx",sourceDirName:"nft",slug:"/nft/NFTCollection",permalink:"/docs.contracts/zh-tw/docs/nft/NFTCollection",draft:!1,editUrl:"https://github.com/Ton-Dynasty/tondynasty-contracts/pulls/docs/nft/NFTCollection.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - NFT",permalink:"/docs.contracts/zh-tw/docs/category/tutorial---nft"},next:{title:"NFT Item Standard",permalink:"/docs.contracts/zh-tw/docs/nft/NFTItem"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"CollectionData Structure",id:"collectiondata-structure",level:3},{value:"NFTCollectionStandard Trait",id:"nftcollectionstandard-trait",level:3},{value:"Internal Functions and Get Methods",id:"internal-functions-and-get-methods",level:2},{value:"Internal Functions",id:"internal-functions",level:3},{value:"<code>_get_nft_item_state_init(index: Int): StateInit</code>",id:"_get_nft_item_state_initindex-int-stateinit",level:4},{value:"<code>_get_nft_content(index: Int, individual_content: Cell): Cell</code>",id:"_get_nft_contentindex-int-individual_content-cell-cell",level:4},{value:"<code>_get_collection_data(): CollectionData</code>",id:"_get_collection_data-collectiondata",level:4},{value:"Get Methods",id:"get-methods",level:3},{value:"<code>get_collection_data(): CollectionData</code>",id:"get_collection_data-collectiondata",level:4},{value:"<code>get_nft_address_by_index(index: Int): Address</code>",id:"get_nft_address_by_indexindex-int-address",level:4},{value:"<code>get_nft_content(index: Int, individual_content: Cell): Cell</code>",id:"get_nft_contentindex-int-individual_content-cell-cell",level:4},{value:"Usage",id:"usage",level:2},{value:"Basic Usage",id:"basic-usage",level:3}],s={toc:d},_="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(_,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This NFT Collection smart contract provides a framework for NFT collections that comply with the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md"},"TEP-0062 standard"),"."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"\u5728 TEP-0062 \u6a19\u6e96\u4e2d\uff0c\u6bcf\u500b NFT collection \u90fd\u6703\u95dc\u806f\u4e00\u500b NFT Collection smart contract\uff0c\u8a72\u5408\u7d04\u6703\u5132\u5b58\u95dc\u65bc\u8a72 collection \u7684\u57fa\u672c\u8cc7\u8a0a\uff0c\u5305\u62ec\u4e0b\u4e00\u500b item \u7684 index\u3001collection content\u3001owner address\u3002"),(0,l.kt)("h3",{id:"collectiondata-structure"},"CollectionData Structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"struct CollectionData {\n    next_item_index: Int;     // collection should issue NFT with sequential indexes starting from 1. -1 value implies non-sequential collections.\n    collection_content: Cell; // collection content format should comply with TEP64\n    owner_address: Address;   // collection owner address, zero address if no owner\n}\n")),(0,l.kt)("h3",{id:"nftcollectionstandard-trait"},"NFTCollectionStandard Trait"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'contract ExampleNFTCollection with NFTCollectionStandard, NFTRoyaltyStandard, Estimatable, Deployable {\n    next_item_index: Int as uint32 = 0; // if next_item_index is not -1, means sequential minting is enabled. We want a sequential minting in this example so we set it to uint32.\n    collection_content: Cell;           // collection_content may be the prefix of individual_content\n    owner_address: Address;             // owner_address is the address of the owner of the collection\n    royalty_params: RoyaltyParams;      // royalty_params is the params of royalty\n\n    init(owner_address: Address, collection_content: Cell, royalty_params: RoyaltyParams) {\n        self.owner_address = owner_address;\n        self.collection_content = collection_content;\n        self.royalty_params = royalty_params;\n    }\n\n    // @dev Mint is not the standard function of NFTCollection, so we need to define it by ourselves\n    receive("Mint") {\n        let ctx: Context = context();\n        let nftItemInit: StateInit = self._get_nft_item_state_init(self.next_item_index);\n        send(SendParameters{\n                to: contractAddress(nftItemInit),\n                value: self.estimate_rest_value(ctx),\n                bounce: false,\n                mode: SendIgnoreErrors,\n                body: Transfer {\n                    query_id: 0,\n                    new_owner: ctx.sender,\n                    response_destination: ctx.sender,\n                    custom_payload: emptyCell(),\n                    forward_amount: 0,\n                    forward_payload: emptySlice()\n                }.toCell(),\n                code: nftItemInit.code,\n                data: nftItemInit.data\n            });\n        self.next_item_index = self.next_item_index + 1;\n    }\n\n    // @dev _get_nft_item_state_init returns the initCode of NFTItem\n    override inline fun _get_nft_item_state_init(index: Int): StateInit {\n        return initOf ExampleNFTItem(myAddress(), index, self.owner_address, self.collection_content);\n    }\n}\n')),(0,l.kt)("h2",{id:"internal-functions-and-get-methods"},"Internal Functions and Get Methods"),(0,l.kt)("h3",{id:"internal-functions"},"Internal Functions"),(0,l.kt)("h4",{id:"_get_nft_item_state_initindex-int-stateinit"},(0,l.kt)("inlineCode",{parentName:"h4"},"_get_nft_item_state_init(index: Int): StateInit")),(0,l.kt)("p",null,"\u900f\u904e NFT Item Index \u8a08\u7b97 NFT item contract \u7684 init code\uff0c\u9019\u500b function ",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u9808\u8981\u88ab override"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract inline fun _get_nft_item_state_init(index: Int): StateInit;\n")),(0,l.kt)("h4",{id:"_get_nft_contentindex-int-individual_content-cell-cell"},(0,l.kt)("inlineCode",{parentName:"h4"},"_get_nft_content(index: Int, individual_content: Cell): Cell")),(0,l.kt)("p",null,"\u900f\u904e NFT item \u7684 index \u62ff\u5230 NFT item \u7684 content\uff0c\u56de\u50b3\u7b26\u5408 TEP-64 \u7684 NFT item content\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// @dev _get_nft_content gets the serial number of the NFT item of this collection and the individual content of this NFT item.\n//      returns the full content of the NFT item in format that complies with standard TEP-64.\n// @note one MUST override this function to provide full NFT item content\nvirtual inline fun _get_nft_content(index: Int, individual_content: Cell): Cell {\n    let builder: StringBuilder = beginString();\n    let idvStr: String = individual_content.asSlice().asString();\n    builder.append(idvStr);\n    return builder.toCell();\n}\n")),(0,l.kt)("h4",{id:"_get_collection_data-collectiondata"},(0,l.kt)("inlineCode",{parentName:"h4"},"_get_collection_data(): CollectionData")),(0,l.kt)("p",null,"\u56de\u50b3 NFT collection \u7684\u8cc7\u8a0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// @dev get_collection_data returns nft collection data\nvirtual inline fun _get_collection_data(): CollectionData {\n    let builder: StringBuilder = beginString();\n    let urlPrefix: String = self.collection_content.asSlice().asString();\n    builder.append(urlPrefix);\n    builder.append(self.NFT_COLLECTION_STANDARD_METADATA);\n    return CollectionData {\n        next_item_index: self.next_item_index,\n        collection_content: builder.toCell(),\n        owner_address: self.owner_address\n    };\n}\n")),(0,l.kt)("h3",{id:"get-methods"},"Get Methods"),(0,l.kt)("h4",{id:"get_collection_data-collectiondata"},(0,l.kt)("inlineCode",{parentName:"h4"},"get_collection_data(): CollectionData")),(0,l.kt)("p",null,"\u56de\u50b3 NFT collection \u7684\u8cc7\u8a0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"get fun get_collection_data(): CollectionData {\n    return self._get_collection_data();\n}\n")),(0,l.kt)("h4",{id:"get_nft_address_by_indexindex-int-address"},(0,l.kt)("inlineCode",{parentName:"h4"},"get_nft_address_by_index(index: Int): Address")),(0,l.kt)("p",null,"\u900f\u904e NFT item \u7684 index \u62ff\u5230 NFT item \u7684 address\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// @dev get_nft_address_by_index gets the serial number of NFT item of this collection and returns its address\nget fun get_nft_address_by_index(index: Int): Address {\n    let initCode: StateInit = self._get_nft_item_state_init(index);\n    return contractAddress(initCode);\n}\n")),(0,l.kt)("h4",{id:"get_nft_contentindex-int-individual_content-cell-cell"},(0,l.kt)("inlineCode",{parentName:"h4"},"get_nft_content(index: Int, individual_content: Cell): Cell")),(0,l.kt)("p",null,"\u547c\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"_get_nft_content")," \u4e26\u56de\u50b3\u7b26\u5408 TEP-64 \u7684 NFT item content\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// @dev get_nft_content calls _get_nft_content and returns the full content of the NFT item in format that complies with standard TEP-64.\nget fun get_nft_content(index: Int, individual_content: Cell): Cell {\n    return self._get_nft_content(index, individual_content);\n}\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("p",null,"\u60f3\u8981\u4f7f\u7528\u9019\u500b NFT Collection Standard\uff0c\u4f60\u9700\u8981\u5be6\u4f5c\u4e00\u500b NFT Collection \u5408\u7d04\uff0c\u4e26\u4e14 override ",(0,l.kt)("inlineCode",{parentName:"p"},"_get_nft_item_state_init")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"_get_nft_content"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Your contract should look something like this\ncontract YourNFTCollection with NFTCollectionStandard {\n    // ... your custom properties and methods ...\n\n    override inline fun _get_nft_item_state_init(index: Int): StateInit {\n        // ... your implementation ...\n    }\n\n    override inline fun _get_nft_content(index: Int, individual_content: Cell): Cell {\n        // ... your implementation ...\n    }\n}\n")))}u.isMDXComponent=!0}}]);