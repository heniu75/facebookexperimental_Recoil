"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6088],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,h=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2546:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Recoil 0.7.1"},c=void 0,p={permalink:"/ko/blog/2022/04/12/0.7.1-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2022-04-12-0.7.1-release.md",source:"@site/blog/2022-04-12-0.7.1-release.md",title:"Recoil 0.7.1",description:"Typing",date:"2022-04-12T00:00:00.000Z",formattedDate:"2022\ub144 4\uc6d4 12\uc77c",tags:[],readingTime:.495,truncated:!1,authors:[],nextItem:{title:"Recoil 0.7",permalink:"/ko/blog/2022/03/25/0.7.0-release"}},u={authorsImageUrls:[]},s=[{value:"Typing",id:"typing",children:[],level:3},{value:"Fixes",id:"fixes",children:[],level:3}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"typing"},"Typing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add explicit and required ",(0,i.kt)("inlineCode",{parentName:"li"},"children")," prop to ",(0,i.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"useRecoilBridgeAcrossReactRoots_UNSTABLE()")," for TypeScript to support the ",(0,i.kt)("a",{parentName:"li",href:"https://solverfox.dev/writing/no-implicit-children/"},"removal of implicit children")," with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210"},"`@types/react@^18.0.0")," for React 18. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1718"},"#1718"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1717"},"#1717"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1726"},"#1726"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1731"},"#1731"),")"),(0,i.kt)("li",{parentName:"ul"},"Update typing for ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/utils/atomFamily#parameter-type"},"family parameters")," to better support Map, Set, and classes with ",(0,i.kt)("inlineCode",{parentName:"li"},"toJSON()"),". (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1709"},"#1709"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1703"},"#1703"),")")),(0,i.kt)("h3",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avoid dev-mode console error with React 18 when using shared async selectors across multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>"),"'s. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1712"},"#1712"),")"),(0,i.kt)("li",{parentName:"ul"},"Cleanup potential memory leak when using async selectors. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1714"},"#1714"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix potentially hung async selectors when shared across multiple roots that depend on atoms initialized with promises that don't resolve. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1714"},"#1714"),")")))}f.isMDXComponent=!0}}]);