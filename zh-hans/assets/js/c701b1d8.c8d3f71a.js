"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7139],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),s=o,d=m["".concat(c,".").concat(s)]||m[s]||f[s]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6256:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return f},default:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Refine 0.1.1"},c=void 0,p={permalink:"/zh-hans/blog/2022/08/18/refine-0.1.1-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2022-08-18-refine-0.1.1-release.md",source:"@site/blog/2022-08-18-refine-0.1.1-release.md",title:"Refine 0.1.1",description:"- Rename boolean() export to bool() since boolean is a reserved word (#1922, #1962, #1971)",date:"2022-08-18T00:00:00.000Z",formattedDate:"2022\u5e748\u670818\u65e5",tags:[],readingTime:.255,truncated:!1,authors:[],nextItem:{title:"Recoil 0.7.5",permalink:"/zh-hans/blog/2022/08/11/recoil-0.7.5-release"}},u={authorsImageUrls:[]},f=[],m={toc:f};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rename ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean()")," export to ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Primitive_Checkers#boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"bool()"))," since ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," is a reserved word (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1922"},"#1922"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1962"},"#1962"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1971"},"#1971"),")"),(0,a.kt)("li",{parentName:"ul"},"Remove reference to ",(0,a.kt)("inlineCode",{parentName:"li"},"native")," directory in ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," to cleanup errors for ",(0,a.kt)("inlineCode",{parentName:"li"},"react-native"),". (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1931"},"#1931"),")"),(0,a.kt)("li",{parentName:"ul"},"Export ",(0,a.kt)("inlineCode",{parentName:"li"},"Path")," class for custom checkers. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1950"},"#1950"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1956"},"#1956"),")"),(0,a.kt)("li",{parentName:"ul"},"Extend the failure message of ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Advanced_Checkers#union"},(0,a.kt)("inlineCode",{parentName:"a"},"union()"))," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Advanced_Checkers#or"},(0,a.kt)("inlineCode",{parentName:"a"},"or()"))," with each type. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1961"},"#1961"),")")))}s.isMDXComponent=!0}}]);