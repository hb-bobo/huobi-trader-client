(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"/Hdp":function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return E}));var n=r("ODXe"),a=r("cDcd"),c=r("sqIp"),o=r("wx14"),u=r("2mql"),l=r.n(u),i=()=>({});function s(e){var t=a["createContext"](e),r=e=>a["createElement"](t.Provider,{value:e.store},e.children);function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e||i;return function(e){var c=r=>a["createElement"](t.Consumer,null,(t=>a["createElement"](e,Object(o["a"])({},r,n(t,r)))));if(r.forwardRef){var u=a["forwardRef"](((e,t)=>a["createElement"](c,Object(o["a"])({},e,{forwardedRef:t}))));return l()(u,e)}return l()(c,e)}}return{context:t,Consumer:t.Consumer,Provider:r,connect:n}}var d=r("efbE"),f={user:""},m={updateUser(e,t){return{user:t}}},h=s({store:f,actions:{}}),p=(h.context,h.Provider),v=h.connect,E=function(e){var t=e.children,r=Object(c["a"])({state:f,reducers:m}),o=Object(n["a"])(r,2),u=o[0],l=o[1];return a["useEffect"]((()=>{d["d"].queryCurrent().then((e=>{l.updateUser(e)})).catch((e=>{console.log(e)}))}),[]),a["createElement"](p,{store:{store:u,actions:l}},t)}},ViPg:function(e,t,r){},wbZ2:function(e,t,r){"use strict";r.r(t);var n=r("ODXe"),a=r("Ff2n"),c=r("cDcd"),o=r.n(c),u=r("WHYC"),l=r("dxGJ"),i=r("wJku"),s=r("Hx5s"),d=r("FKOd"),f=r("/Hdp");r("ViPg");t["default"]=Object(u["n"])((e=>{var t=e.history,r=e.location,u=Object(a["a"])(e,["history","location"]),m=Object(c["useState"])(!0),h=Object(n["a"])(m,2),p=h[0],v=h[1];return o.a.createElement(f["a"],null,o.a.createElement(s["a"],{location:{pathname:r.pathname},route:{routes:u.route.routes},title:"",logo:null,collapsed:p,fixSiderbar:!0,menuItemRender:(e,r)=>o.a.createElement("a",{onClick:()=>{t.push(e.path||"/welcome")}},r),headerContentRender:()=>o.a.createElement("div",{onClick:()=>v(!p),style:{cursor:"pointer",fontSize:"16px"}},p?o.a.createElement(l["a"],null):o.a.createElement(i["a"],null))},o.a.createElement(d["a"],null,o.a.createElement("div",{style:{height:"120vh"}},u.children))))}))}}]);