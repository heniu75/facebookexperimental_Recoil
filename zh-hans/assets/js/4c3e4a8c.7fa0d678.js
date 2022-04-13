"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[383],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6818:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Recoil 0.7"},s=void 0,c={permalink:"/zh-hans/blog/2022/03/25/0.7.0-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2022-03-25-0.7.0-release.md",source:"@site/blog/2022-03-25-0.7.0-release.md",title:"Recoil 0.7",description:"Recoil 0.7 offers some minor API improvements, selector optimizations, and other fixes.",date:"2022-03-25T00:00:00.000Z",formattedDate:"2022\u5e743\u670825\u65e5",tags:[],readingTime:2.56,truncated:!1,authors:[],prevItem:{title:"Recoil 0.7.1",permalink:"/zh-hans/blog/2022/04/12/0.7.1-release"},nextItem:{title:"Recoil 0.6",permalink:"/zh-hans/blog/2022/01/28/0.6.0-release"}},p={authorsImageUrls:[]},u=[{value:"New Features",id:"new-features",children:[{value:"Atom Defaults are Optional",id:"atom-defaults-are-optional",children:[],level:3},{value:"Other New Features",id:"other-new-features",children:[],level:3}],level:2},{value:"Improvements / Optimizations",id:"improvements--optimizations",children:[{value:"Automatically retain snapshots for the duration of async callbacks.",id:"automatically-retain-snapshots-for-the-duration-of-async-callbacks",children:[],level:3},{value:"Other Improvements / Optimizations",id:"other-improvements--optimizations",children:[],level:3}],level:2},{value:"Breaking Changes",id:"breaking-changes",children:[{value:"Selector evaluation or atom defaults can use a Loadable object",id:"selector-evaluation-or-atom-defaults-can-use-a-loadable-object",children:[],level:3},{value:"Other Breaking Changes",id:"other-breaking-changes",children:[],level:3}],level:2},{value:"Fixes",id:"fixes",children:[],level:2}],m={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recoil 0.7 offers some minor API improvements, selector optimizations, and other fixes."),(0,o.kt)("h2",{id:"new-features"},"New Features"),(0,o.kt)("h3",{id:"atom-defaults-are-optional"},"Atom Defaults are Optional"),(0,o.kt)("p",null,'It is now optional to provide a default value for an atom.  If no default is provided the atom will be kept in a "pending" state (e.g. triggering React Suspense) until it is set. (',(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1639"},"#1639"),")"),(0,o.kt)("p",null,"This can help avoid awkward typing (such as unecessarily making the type nullable) or awkward placeholder values for the default.  An example minimal string atom might be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"atom<string>({key: 'MyString'});\n")),(0,o.kt)("p",null,"This is also useful when atoms are initialized with atom effects and a default may not be necessary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"atom({\n  key: 'MyQuery',\n  effects: [\n    dbSyncEffect({query, variables}),\n  ],\n});\n")),(0,o.kt)("h3",{id:"other-new-features"},"Other New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},".getStoreID()")," method to ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"Snapshot"))," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1612"},"#1612"),")"),(0,o.kt)("li",{parentName:"ul"},"Publish ",(0,o.kt)("inlineCode",{parentName:"li"},"RecoilLoadable.loading()")," factory for making an async ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," which never resolves. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1641"},"#1641"),")")),(0,o.kt)("h2",{id:"improvements--optimizations"},"Improvements / Optimizations"),(0,o.kt)("h3",{id:"automatically-retain-snapshots-for-the-duration-of-async-callbacks"},"Automatically retain snapshots for the duration of async callbacks."),(0,o.kt)("p",null,"You now no longer need to manually retain snapshots for async callbacks from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()")),".  (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1632"},"#1632"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  const myCallback = useRecoilCallback(({snapshot}) => async () => {\n    // No longer necessary to retain() here\n    await something;\n    ... use snapshot ...\n  });\n")),(0,o.kt)("p",null,"If you want to save a Snapshot or reference it from closure state from some other scheduled handler, then you still need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#asynchronous-use-of-snapshots"},"manually retain it"),"."),(0,o.kt)("h3",{id:"other-improvements--optimizations"},"Other Improvements / Optimizations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optimizations for scaling with more selector dependencies.  2x improvement with 100 dependencies, 4x with 1,000, and now able to support 10,000+ dependencies. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1651"},"#1651"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1515"},"#1515"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/914"},"#914"),")"),(0,o.kt)("li",{parentName:"ul"},"Better error reporting when user selector implementations provide inconsistent results (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1696"},"#1696"),")")),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("h3",{id:"selector-evaluation-or-atom-defaults-can-use-a-loadable-object"},"Selector evaluation or atom defaults can use a Loadable object"),(0,o.kt)("p",null,"Now the selector ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," evaluation callback or atom ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," property can use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," object. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1640"},"#1640"),") This can allow them to more cleanly accept synchronous error states:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"atom({\n  key: 'Key',\n  default: RecoilLoadable.error(new Error('ERROR')),\n});\n")),(0,o.kt)("p",null,"or mapped Loadables or placeholders:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"selector({\n  key: 'Key',\n  get: ({get}) => {\n    const queryLoadable = get(noWait(myQuerySelector));\n    if (queryLoadable.state === 'loading') {\n      return PLACEHOLDER;\n    }\n    return queryLoadable; // Pass on the query results or error state.\n  }\n})\n")),(0,o.kt)("p",null,"If you wish to explicitly evaluate a selector value to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Loadable"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"RecoilState")," type object then you can now wrap them with ",(0,o.kt)("inlineCode",{parentName:"p"},"selector.value()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"atom.value()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"selector({\n  key: 'Key',\n  get: ({get}) => {\n    // Returns an immediate synchronous value\n    return selector.value(Promise.resolve('Promise as a value'));\n  },\n});\n")),(0,o.kt)("p",null,"This is only a minor change.  It helps make the API more consisent for handling wrappers such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Loadable"),", though is not yet available across the entire API.  But, it helps set the stage for future potential ability to explicitly set atoms and selectors to asynchronous values or error states."),(0,o.kt)("h3",{id:"other-breaking-changes"},"Other Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilCallback"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()"))," now provides a snapshot for the latest state instead of the latest rendered state, which had bugs (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1610"},"#1610"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1604"},"#1604"),")")),(0,o.kt)("h2",{id:"fixes"},"Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Freezing user values in dev mode now works in JS environments without the ",(0,o.kt)("inlineCode",{parentName:"li"},"Window")," interface. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1571"},"#1571"),")"),(0,o.kt)("li",{parentName:"ul"},"Avoid spurious console errors from atom effects when calling ",(0,o.kt)("inlineCode",{parentName:"li"},"setSelf()")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"onSet()")," handlers. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1589"},"#1589"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1582"},"#1582"),")")))}h.isMDXComponent=!0}}]);