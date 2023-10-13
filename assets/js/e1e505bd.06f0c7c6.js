"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[747],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[m]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3384:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Jetton Master",l={unversionedId:"jetton/JettonMaster",id:"jetton/JettonMaster",title:"Jetton Master",description:"The jetton master smart contract stores general information about the jetton (including the total supply, a metadata link, or the metadata itself).",source:"@site/docs/jetton/JettonMaster.md",sourceDirName:"jetton",slug:"/jetton/JettonMaster",permalink:"/docs.contracts/docs/jetton/JettonMaster",draft:!1,editUrl:"https://github.com/Ton-Dynasty/tondynasty-contracts/pulls/docs/jetton/JettonMaster.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Jetton",permalink:"/docs.contracts/docs/category/tutorial---jetton"},next:{title:"Jetton Wallet",permalink:"/docs.contracts/docs/jetton/JettonWallet"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Our Trait",id:"our-trait",level:2},{value:"Message Types",id:"message-types",level:3},{value:"Must Override Functions",id:"must-override-functions",level:3},{value:"<code>calculate_jetton_wallet_init(owner_address: Address)</code>:",id:"calculate_jetton_wallet_initowner_address-address",level:4},{value:"Optional Override Functions",id:"optional-override-functions",level:3},{value:"<code>_mint_validate(ctx: Context, msg: JettonMint)</code>:",id:"_mint_validatectx-context-msg-jettonmint",level:4},{value:"<code>_mint(ctx: Context, msg: JettonMint)</code>:",id:"_mintctx-context-msg-jettonmint",level:4},{value:"<code>_burn_notification_validate(ctx: Context, msg: JettonBurnNotification)</code>:",id:"_burn_notification_validatectx-context-msg-jettonburnnotification",level:4},{value:"How to use",id:"how-to-use",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Advanced Usage",id:"advanced-usage",level:3}],c={toc:s},m="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jetton-master"},"Jetton Master"),(0,r.kt)("p",null,"The jetton master smart contract stores general information about the jetton (including the total supply, a metadata link, or the metadata itself)."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"\u5728 TEP-0074 \u4e2d\u5b9a\u7fa9\u4e86 Jetton \u7684\u6a19\u6e96\uff0c\u5176\u4e2d\u6bcf\u7a2e Jetton \u90fd\u6709\u5c0d\u61c9\u7684 Jetton Master \u5408\u7d04\uff0cJetton Master \u6703\u5132\u5b58 Jetton \u7684\u57fa\u672c\u8cc7\u8a0a\uff0c\u5305\u542b\u7e3d\u4f9b\u7d66\u91cf\u3001metadata \u7684\u9023\u7d50\u3001metadata \u672c\u8eab\u7b49\u7b49\uff0c\u4e26\u4e14\u7528\u65bc\u9444\u9020 Jetton\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u62ff\u5230\u6574\u500b Jetton \u7684\u8cc7\u8a0a\uff0c\u53ef\u4ee5\u900f\u904e Jetton Master \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"get_jetton_data()")," \u4f86\u53d6\u5f97\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"get_jetton_data()")," \u6703\u56de\u50b3\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"JettonData"),"\uff0c\u88e1\u9762\u5305\u542b\u4e86 Jetton \u7684\u57fa\u672c\u8cc7\u8a0a\uff0c\u5927\u81f4\u4e0a\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"struct JettonData {\n    total_supply: Int as coins; // the total number of issues jettons\n    mintable: Bool;             // flag which indicates whether number of jettons can increase admin_address\n    admin_address: Address;     // address of smart-contrac which control Jetton\n    jetton_content: Cell;       // data in accordance to Token Data Standard #64\n    jetton_wallet_code: Cell;   // code of wallet for that jetton\n}\n\n// @dev get_jetton_data retrieve information of this jetton\nget fun get_jetton_data(): JettonData {\n    return JettonData{\n        total_supply: self.total_supply,\n        mintable: self.mintable,\n        admin_address: self.owner,\n        jetton_content: self.jetton_content,\n        jetton_wallet_code: self.calculate_jetton_wallet_init(myAddress()).code\n    };\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"total_supply")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"the total number of issued jettons measured in indivisible units.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mintable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"details whether new jettons can be minted or not. This value is either -1 (can be minted) or 0 (cannot be minted).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"admin_address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slice")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jetton_content")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cell")),(0,r.kt)("td",{parentName:"tr",align:null},"data in accordance with ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md"},"TEP-64"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jetton_wallet_code")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cell")),(0,r.kt)("td",{parentName:"tr",align:null},"code of wallet for that jetton")))),(0,r.kt)("h2",{id:"our-trait"},"Our Trait"),(0,r.kt)("h3",{id:"message-types"},"Message Types"),(0,r.kt)("p",null,"\u91dd\u5c0d Jetton Master\uff0c\u6211\u5011\u5b9a\u7fa9\u4e86 JettonMint \u9019\u500b Message Type\uff0c\u7528\u65bc\u9444\u9020 Jetton\u3002\n\u5176\u5167\u5bb9\u5927\u81f4\u4e0a\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"message JettonMint {\n    origin: Address;        // address of origin mint request (may be wallet v4)\n    receiver: Address;      // address of receiver\n    amount: Int;            // amount of jettons to mint\n    custom_payload: Cell?;  // optional custom data\n    forward_ton_amount: Int as coins;\n    forward_payload: Slice as remaining;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"origin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slice")),(0,r.kt)("td",{parentName:"tr",align:null},"address of origin mint request (may be wallet v4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"receiver")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slice")),(0,r.kt)("td",{parentName:"tr",align:null},"address of receiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"amount of jettons to mint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_payload")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cell")),(0,r.kt)("td",{parentName:"tr",align:null},"optional custom data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forward_ton_amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forward_payload")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slice")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"must-override-functions"},"Must Override Functions"),(0,r.kt)("p",null,"Jetton Master \u5b9a\u7fa9\u4e86\u4e00\u500b\u5fc5\u9808\u5728\u5b50\u5408\u7d04\u4e2d\u5be6\u4f5c\u7684 function\uff1a"),(0,r.kt)("h4",{id:"calculate_jetton_wallet_initowner_address-address"},(0,r.kt)("inlineCode",{parentName:"h4"},"calculate_jetton_wallet_init(owner_address: Address)"),":"),(0,r.kt)("p",null,"\u5229\u7528 Jetton Wallet \u7684 ",(0,r.kt)("strong",{parentName:"p"},"owner address")," \u8a08\u7b97 Jetton Wallet \u7684 StateInit\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// @dev  calculate_jetton_wallet_init retrieve init code of a jetton wallet\n// @note one MUST override this function in inherited contract\nabstract inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit;\n")),(0,r.kt)("h3",{id:"optional-override-functions"},"Optional Override Functions"),(0,r.kt)("p",null,"Jetton Master \u5b9a\u7fa9\u4e86\u4ee5\u4e0b\u5e7e\u500b Optional Override Functions\uff1a"),(0,r.kt)("h4",{id:"_mint_validatectx-context-msg-jettonmint"},(0,r.kt)("inlineCode",{parentName:"h4"},"_mint_validate(ctx: Context, msg: JettonMint)"),":"),(0,r.kt)("p",null,"\u7528\u65bc\u6aa2\u67e5 mint request \u662f\u5426\u5408\u6cd5\uff0c\u4f8b\u5982\u6aa2\u67e5 mint request \u7684\u767c\u9001\u8005\u662f\u5426\u70ba Jetton Master \u7684\u64c1\u6709\u8005\u3001Jetton \u662f\u5426\u53ef\u4ee5\u88ab mint \u7b49\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// @dev  _mint_validate conduct some custom validating before mint\nvirtual inline fun _mint_validate(ctx: Context, msg: JettonMint) {\n    require(ctx.sender == self.owner, "JettonMaster: Sender is not a Jetton owner");\n    require(self.mintable, "JettonMaster: Jetton is not mintable");\n}\n')),(0,r.kt)("h4",{id:"_mintctx-context-msg-jettonmint"},(0,r.kt)("inlineCode",{parentName:"h4"},"_mint(ctx: Context, msg: JettonMint)"),":"),(0,r.kt)("p",null,"\u7528\u65bc mint jettons\uff0c\u6703\u50b3\u9001 ",(0,r.kt)("a",{parentName:"p",href:"JettonWallet"},"Jetton Wallet")," \u7684 init code\u3001init data \u4ee5\u53ca mint \u7684\u8cc7\u8a0a\u7d66 Jetton Wallet\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// @dev  _mint mint jettons\nvirtual inline fun _mint(ctx: Context, msg: JettonMint) {\n    let initCode: StateInit = self.calculate_jetton_wallet_init(msg.receiver);\n    self.total_supply = self.total_supply + msg.amount;\n    send(SendParameters{\n        to: contractAddress(initCode),\n        value: 0,\n        bounce: true,\n        mode: SendRemainingValue,\n        body: JettonInternalTransfer{\n            query_id: 0,\n            amount: msg.amount,\n            response_address: msg.origin,\n            from: myAddress(),\n            forward_ton_amount: msg.forward_ton_amount,\n            forward_payload: msg.forward_payload\n        }.toCell(),\n        code: initCode.code,\n        data: initCode.data\n    });\n}\n")),(0,r.kt)("h4",{id:"_burn_notification_validatectx-context-msg-jettonburnnotification"},(0,r.kt)("inlineCode",{parentName:"h4"},"_burn_notification_validate(ctx: Context, msg: JettonBurnNotification)"),":"),(0,r.kt)("p",null,"\u7528\u65bc\u6aa2\u67e5 burn request \u662f\u5426\u5408\u6cd5\uff0c\u4f8b\u5982\u6aa2\u67e5 burn request \u7684\u767c\u9001\u8005\u662f\u5426\u70ba Jetton Wallet \u7b49\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// @dev  _burn_notification_validate perform some custom validation after receiving JettonBurnNotification sent from Jetton wallet\nvirtual inline fun _burn_notification_validate(ctx: Context, msg: JettonBurnNotification) {\n    let initCode: StateInit = self.calculate_jetton_wallet_init(msg.sender);\n    require(ctx.sender == contractAddress(initCode), "Sender is not a Jetton wallet");\n}\n')),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u6211\u5011\u7684 Jetton Master Trait\uff0c\u9996\u5148\u9700\u8981\u5148\u5be6\u4f5c\u4e00\u500b Jetton Master \u5408\u7d04\u4ee5\u53ca\u4e00\u500b ",(0,r.kt)("a",{parentName:"p",href:"JettonWallet"},"Jetton Wallet \u5408\u7d04"),"\uff0c\u4e26\u4e14\u5be6\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"calculate_jetton_wallet_init(owner_address: Address)")," \u7b49\u7b49 must override function \u4ee5\u53ca init function\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import "@stdlib/deploy";\nimport "./packages/token/jetton/JettonMaster";\nimport "./packages/token/jetton/JettonWallet";\n\ncontract ExampleJettonWallet with JettonWallet {\n    balance: Int as coins = 0;\n    owner: Address;\n    jetton_master: Address;\n\n    init(owner: Address, jetton_master: Address) {\n        self.owner = owner;\n        self.jetton_master = jetton_master;\n    }\n\n    override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {\n        return initOf ExampleJettonWallet(owner_address, self.jetton_master);\n    }\n}\n\ncontract ExampleJettonMaster with JettonMaster, Deployable {\n    total_supply: Int as coins = 0;\n    mintable: Bool = true;\n    owner: Address;\n    jetton_content: Cell;\n\n    init(owner: Address, jetton_content: Cell){\n        self.owner = owner;\n        self.jetton_content = jetton_content;\n    }\n    override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {\n        return initOf ExampleJettonWallet(owner_address, myAddress());\n    }\n}\n')),(0,r.kt)("h3",{id:"advanced-usage"},"Advanced Usage"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u8a02 Jetton Master \u7684\u884c\u70ba\uff0c\u53ef\u4ee5 override Jetton Master \u7684 optional override function \u4ee5\u53ca\u65b0\u589e\u5404\u7a2e function\uff0c\u4f8b\u5982\u6211\u5011\u60f3\u8981\u5728 mint Jetton \u6642\u6aa2\u67e5 Jetton \u662f\u5426\u53ef\u4ee5\u88ab mint\uff0c\u53ef\u4ee5 override ",(0,r.kt)("inlineCode",{parentName:"p"},"_mint_validate(ctx: Context, msg: JettonMint)"),'\uff0c\u6216\u662f\u6211\u5011\u60f3\u8981\u8b93 User \u53ef\u4ee5\u76f4\u63a5\u50b3\u9001 "Mint:1" \u7d66 Jetton Master \u4f86 mint Jetton\uff0c\u53ef\u4ee5\u65b0\u589e\u4e00\u500b ',(0,r.kt)("inlineCode",{parentName:"p"},'receive("Mint:1")')," \u7684 function\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'receive("Mint:1") {\n    let ctx: Context = context();\n    let msg: JettonMint = JettonMint{\n        origin: ctx.sender,\n        receiver: ctx.sender,\n        amount: ton("1"),\n        custom_payload: emptyCell(),\n        forward_ton_amount: 0,\n        forward_payload: emptySlice()\n    };\n    self._mint_validate(ctx, msg);\n    self._mint(ctx, msg);\n}\n\noverride inline fun _mint_validate(ctx: Context, msg: JettonMint) {\n    require(self.mintable, "JettonMaster: Jetton is not mintable");\n}\n')))}p.isMDXComponent=!0}}]);