(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{HpMS:function(e,t,a){"use strict";a.r(t);a("g9YV");var s=a("wCAj"),r=a("o0o1"),n=a.n(r),c=a("HaE+"),j=(a("+L6B"),a("2/Rp")),l=(a("BoS7"),a("Sdc0")),i=(a("miYZ"),a("tsqr")),o=a("VTBJ"),d=a("ODXe"),u=a("hGi/"),m=a("cDcd"),b=a.n(m),h=a("TSYQ"),p=a.n(h),y=a("rmhi"),k=a("Qurx"),f=a("/s86"),v=a("WFLz");function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},g.apply(this,arguments)}function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){x(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E=b.a.forwardRef((function(e,t){var a=e.fieldProps,s=e.unCheckedChildren,r=e.checkedChildren,n=e.proFieldProps;return b.a.createElement(f["a"],g({valueType:"switch",mode:"edit",fieldProps:w(w({},a),{},{unCheckedChildren:s,checkedChildren:r}),text:null===a||void 0===a?void 0:a.checked,ref:t},n))})),z=Object(v["a"])(E,{valuePropName:"checked"}),D=a("xvlK"),C=a("efbE"),P="trade-account",_=e=>{Object(u["a"])(e);var t=b.a.useState([]),a=Object(d["a"])(t,2),r=a[0],h=a[1];function f(){C["c"].queryTradeAccount().then((e=>{console.log(e),h(e)}))}function v(e){C["c"].postTradeAccount(e).then((t=>{var a=[...r],s=e.id?"\u66f4\u65b0\u6210\u529f":"\u63d0\u4ea4\u6210\u529f";if(e.id){var n=a.findIndex((t=>t.id===e.id));n>-1&&(a[n]=Object(o["a"])(Object(o["a"])({},a[n]),e))}else a.push(t);h(a),i["b"].success(s)}))}Object(m["useEffect"])((()=>{f()}),[]);var g=[{title:"\u81ea\u52a8\u4ea4\u6613",key:"auto_trade",dataIndex:"auto_trade",render:(e,t,a)=>b.a.createElement(l["a"],{checked:t.auto_trade})},{title:"\u4ea4\u6613\u6240",key:"exchange",dataIndex:"exchange"},{title:"access_key",key:"access_key",dataIndex:"access_key"},{title:"secret_key",key:"secret_key",dataIndex:"secret_key"},{title:"uid",key:"uid",dataIndex:"uid"},{title:"\u4ea4\u6613\u5bc6\u7801",key:"trade_password",dataIndex:"trade_password"},{title:"\u64cd\u4f5c",key:"action",render:(e,t,a)=>b.a.createElement("div",{key:a},b.a.createElement(y["a"],{title:"\u7f16\u8f91",trigger:b.a.createElement(j["a"],{type:"primary"},b.a.createElement(D["a"],null),"\u7f16\u8f91"),modalProps:{onCancel:()=>console.log("run")},onFinish:function(){var e=Object(c["a"])(n.a.mark((function e(a){return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v(Object(o["a"])(Object(o["a"])({},a),{},{id:t.id})),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),initialValues:t},b.a.createElement(k["a"],{width:"s",name:"exchange",label:"exchange"}),b.a.createElement(k["a"],{width:"s",name:"access_key",label:"access_key"}),b.a.createElement(k["a"],{width:"s",name:"secret_key",label:"secret_key"}),b.a.createElement(k["a"],{width:"s",name:"uid",label:"uid"}),b.a.createElement(k["a"],{width:"s",name:"trade_password",label:"\u4ea4\u6613\u5bc6\u7801"}),b.a.createElement(z,{name:"auto_trade",label:"auto_trade"})),"|",b.a.createElement(j["a"],{danger:!0,type:"text",onClick:()=>{C["c"].removeTradeAccount(t.id).then((e=>{i["b"].success("\u5220\u9664\u6210\u529f"),f()}))}},"\u5220\u9664"))}];return b.a.createElement("div",{className:p()(P)},b.a.createElement(y["a"],{title:"\u65b0\u5efa\u8868\u5355",trigger:b.a.createElement(j["a"],{type:"primary"},b.a.createElement(D["a"],null),"\u65b0\u5efa\u8868\u5355"),modalProps:{onCancel:()=>console.log("run")},onFinish:function(){var e=Object(c["a"])(n.a.mark((function e(t){return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v(t),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),initialValues:{exchange:"huobi",auto_trade:!0}},b.a.createElement(k["a"],{width:"s",name:"exchange",label:"exchange"}),b.a.createElement(k["a"],{width:"s",name:"access_key",label:"access_key"}),b.a.createElement(k["a"],{width:"s",name:"secret_key",label:"secret_key"}),b.a.createElement(k["a"],{width:"s",name:"uid",label:"uid"}),b.a.createElement(k["a"],{width:"s",name:"trade_password",label:"\u4ea4\u6613\u5bc6\u7801"}),b.a.createElement(z,{name:"auto_trade",label:"auto_trade"})),b.a.createElement(s["a"],{columns:g,dataSource:r}))};t["default"]=_},RnhZ:function(e,t,a){var s={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="RnhZ"}}]);