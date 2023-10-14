"use strict";(self.webpackChunkdocs_contracts=self.webpackChunkdocs_contracts||[]).push([[80],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),l=n(6010),r=n(1944),o=n(5281),c=n(9460),i=n(9058),s=n(390),m=n(7462),d=n(5999),u=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,c.C)(),{title:n,description:l,date:o,tags:i,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&a.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var p=n(9407);function h(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,c.C)(),{nextItem:o,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:h}=d;return a.createElement(i.Z,{sidebar:t,toc:!u&&r.length>0?a.createElement(p.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return a.createElement(c.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(c.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:i,linkActiveClassName:s})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>i(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),i=s(c,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const p=(0,r.L)(),h=m??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return d((0,l.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:v}}),[i,s,h,v])),l.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:i},f))}},4971:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),l=n(9297),r=n(9603),o=n(9417),c=n(3024),i=n(9669),s=n.n(i),m=n(2949);const d={...l.Z,GithubBookmark:function(e){let{repoName:t,owner:n}=e;const[l,i]=(0,a.useState)(0),{isDarkTheme:d}=(0,m.I)();return(0,a.useEffect)((()=>{console.log(l);(async()=>{try{const e=await s().get(`https://api.github.com/repos/${n}/${t}`);i(e.data.stargazers_count),console.log(e)}catch(e){console.error("Error fetching star count:",e)}})()}),[t,n]),a.createElement("a",{style:{display:"flex",alignItems:"center",padding:"0.8rem",border:"1px solid #e1e4e8",borderRadius:"5px",textDecoration:"none"},target:"_blank",href:"https://github.com/Ton-Dynasty/tondynasty-contracts"},a.createElement(r.G,{icon:c.zhw,style:{marginRight:"5%"},color:d?"white":"black",size:"3x"}),a.createElement("div",{style:{flex:1}},a.createElement("a",{href:`https://github.com/${n}/${t}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:d?"white":"black"},className:"bookmark-text"},a.createElement("strong",null,t||"tondynasty-contracts"),a.createElement("br",null),a.createElement("small",null,n||"ton-Dynasty"))),a.createElement("div",{style:{display:"flex",alignItems:"center",color:d?"white":"black"}},null!==l&&a.createElement(a.Fragment,null,a.createElement("span",{style:{marginRight:"0.5rem"}},l),a.createElement(r.G,{icon:o.Tab,color:"yellow"}))))}}}}]);