(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{HpMS:function(e,a,s){"use strict";s.r(a);s("g9YV");var t=s("wCAj"),n=s("o0o1"),r=s.n(n),j=s("HaE+"),c=(s("+L6B"),s("2/Rp")),l=(s("BoS7"),s("Sdc0")),i=(s("miYZ"),s("tsqr")),o=s("VTBJ"),d=s("ODXe"),u=s("hGi/"),m=s("cDcd"),k=s.n(m),h=s("TSYQ"),b=s.n(h),y=s("rmhi"),p=s("Qurx"),g=s("F/zT"),v=s("xvlK"),x=s("efbE"),f="trade-account",w=e=>{Object(u["a"])(e);var a=k.a.useState([]),s=Object(d["a"])(a,2),n=s[0],h=s[1];function w(){x["c"].queryTradeAccount().then((e=>{console.log(e),h(e)}))}function z(e){x["c"].postTradeAccount(e).then((a=>{var s=[...n],t=e.id?"\u66f4\u65b0\u6210\u529f":"\u63d0\u4ea4\u6210\u529f";if(e.id){var r=s.findIndex((a=>a.id===e.id));r>-1&&(s[r]=Object(o["a"])(Object(o["a"])({},s[r]),e))}else s.push(a);h(s),i["b"].success(t)}))}Object(m["useEffect"])((()=>{w()}),[]);var E=[{title:"\u81ea\u52a8\u4ea4\u6613",key:"auto_trade",dataIndex:"auto_trade",render:(e,a,s)=>k.a.createElement(l["a"],{checked:a.auto_trade})},{title:"\u4ea4\u6613\u6240",key:"exchange",dataIndex:"exchange"},{title:"access_key",key:"access_key",dataIndex:"access_key"},{title:"secret_key",key:"secret_key",dataIndex:"secret_key"},{title:"uid",key:"uid",dataIndex:"uid"},{title:"\u4ea4\u6613\u5bc6\u7801",key:"trade_password",dataIndex:"trade_password"},{title:"\u64cd\u4f5c",key:"action",render:(e,a,s)=>k.a.createElement("div",{key:s},k.a.createElement(y["a"],{title:"\u7f16\u8f91",trigger:k.a.createElement(c["a"],{type:"primary"},k.a.createElement(v["a"],null),"\u7f16\u8f91"),modalProps:{onCancel:()=>console.log("run")},onFinish:function(){var e=Object(j["a"])(r.a.mark((function e(s){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return z(Object(o["a"])(Object(o["a"])({},s),{},{id:a.id})),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),initialValues:a},k.a.createElement(p["a"],{width:"s",name:"exchange",label:"exchange"}),k.a.createElement(p["a"],{width:"s",name:"access_key",label:"access_key"}),k.a.createElement(p["a"],{width:"s",name:"secret_key",label:"secret_key"}),k.a.createElement(p["a"],{width:"s",name:"uid",label:"uid"}),k.a.createElement(p["a"],{width:"s",name:"trade_password",label:"\u4ea4\u6613\u5bc6\u7801"}),k.a.createElement(g["a"],{name:"auto_trade",label:"auto_trade"})),"|",k.a.createElement(c["a"],{danger:!0,type:"text",onClick:()=>{x["c"].removeTradeAccount(a.id).then((e=>{i["b"].success("\u5220\u9664\u6210\u529f"),w()}))}},"\u5220\u9664"))}];return k.a.createElement("div",{className:b()(f)},k.a.createElement(y["a"],{title:"\u65b0\u5efa\u8868\u5355",trigger:k.a.createElement(c["a"],{type:"primary"},k.a.createElement(v["a"],null),"\u65b0\u5efa\u8868\u5355"),modalProps:{onCancel:()=>console.log("run")},onFinish:function(){var e=Object(j["a"])(r.a.mark((function e(a){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return z(a),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),initialValues:{exchange:"huobi",auto_trade:!0}},k.a.createElement(p["a"],{width:"s",name:"exchange",label:"exchange"}),k.a.createElement(p["a"],{width:"s",name:"access_key",label:"access_key"}),k.a.createElement(p["a"],{width:"s",name:"secret_key",label:"secret_key"}),k.a.createElement(p["a"],{width:"s",name:"uid",label:"uid"}),k.a.createElement(p["a"],{width:"s",name:"trade_password",label:"\u4ea4\u6613\u5bc6\u7801"}),k.a.createElement(g["a"],{name:"auto_trade",label:"auto_trade"})),k.a.createElement(t["a"],{columns:E,dataSource:n}))};a["default"]=w},RnhZ:function(e,a,s){var t={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function n(e){var a=r(e);return s(a)}function r(e){if(!s.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=r,e.exports=n,n.id="RnhZ"}}]);