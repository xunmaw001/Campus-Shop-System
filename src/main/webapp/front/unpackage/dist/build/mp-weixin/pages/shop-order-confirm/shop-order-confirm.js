(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"13b9":function(e,r,t){"use strict";(function(e){t("91e7");a(t("66fd"));var r=a(t("4884"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t("543d")["createPage"])},"2f3c":function(e,r,t){"use strict";var a=t("a793"),o=t.n(a);o.a},4884:function(e,r,t){"use strict";t.r(r);var a=t("9dca"),o=t("ab33");for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);t("2f3c");var s,d=t("f0c5"),u=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);r["default"]=u.exports},"9dca":function(e,r,t){"use strict";var a;t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return a}));var o=function(){var e=this,r=e.$createElement;e._self._c},n=[]},a793:function(e,r,t){},ab33:function(e,r,t){"use strict";t.r(r);var a=t("fdc7"),o=t.n(a);for(var n in a)"default"!==n&&function(e){t.d(r,e,(function(){return a[e]}))}(n);r["default"]=o.a},fdc7:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,a,o,n,s){try{var d=e[n](s),u=d.value}catch(i){return void t(i)}d.done?r(u):Promise.resolve(u).then(a,o)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(a,o){var s=e.apply(r,t);function d(e){n(s,a,o,d,u,"next",e)}function u(e){n(s,a,o,d,u,"throw",e)}d(void 0)}))}}var d={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(r){var t=this;return s(a.default.mark((function o(){var n;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.type=r.type,t.seat=r.seat,t.orderGoods=e.getStorageSync("orderGoods"),1!=t.seat)for(n=0;n<t.orderGoods.length;n++)0==t.total?t.total=parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber:t.total=parseFloat(t.total)+parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber;else t.total=parseFloat(t.orderGoods[0].total),t.address=t.orderGoods[0].address;t.total=t.total.toFixed(2);case 5:case"end":return a.stop()}}),o)})))()},onShow:function(){var r=this;return s(a.default.mark((function t(){var o,n,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.getStorageSync("nowTable"),t.next=3,r.$api.session(o);case 3:if(n=t.sent,r.user=n.data,1==r.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||r.user.id!=s.userid){t.next=11;break}r.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,r.$api.defaultAddress(r.user.id);case 13:n=t.sent,r.address=n.data;case 15:case"end":return t.stop()}}),t)})))()},methods:{onSubmitTap:function(){var r=this;return s(a.default.mark((function t(){var o,n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=r,1==o.seat||o.address){t.next=4;break}return o.$utils.msg("请选择地址"),t.abrupt("return");case 4:n=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var r=s(a.default.mark((function r(t){var s,d,u,i,c,l,f;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.confirm){r.next=58;break}if(s=o.type,d=!0,u="已支付",1!=s){r.next=8;break}o.user.money-o.total<0&&(o.$utils.msg("余额不足，请先充值"),d=!1,u="未支付"),r.next=13;break;case 8:if(2!=s){r.next=13;break}if(!(o.user.jf-o.total<0)){r.next=13;break}return o.$utils.msg("积分不足，兑换商品失败"),d=!1,r.abrupt("return");case 13:i=0;case 14:if(!(i<o.orderGoods.length)){r.next=44;break}if("shangpinxinxi"!=o.orderGoods[i].tablename){r.next=33;break}return r.next=18,o.$api.info("shangpinxinxi",o.orderGoods[i].goodid);case 18:if(c=r.sent,!(c.data.onelimittimes>0)){r.next=24;break}if(!(o.orderGoods[i].buynumber>c.data.onelimittimes)){r.next=24;break}return o.$utils.msg("".concat(o.orderGoods[i].goodname,"超过可购买数量")),d=!1,r.abrupt("break",44);case 24:if(!(c.data.alllimittimes<o.orderGoods[i].buynumber)){r.next=30;break}return o.$utils.msg("".concat(o.orderGoods[i].goodname,"已售罄")),d=!1,r.abrupt("break",44);case 30:return 1!=o.seat?c.data.alllimittimes=c.data.alllimittimes-o.orderGoods[i].buynumber:c.data.selected=c.data.selected+","+o.orderGoods[i].activeSeat,r.next=33,o.$api.update("shangpinxinxi",c.data);case 33:return l={orderid:o.$utils.genTradeNo(),tablename:o.orderGoods[i].tablename,userid:o.user.id,goodid:o.orderGoods[i].goodid,goodname:o.orderGoods[i].goodname,picture:o.orderGoods[i].picture,buynumber:o.orderGoods[i].buynumber,discountprice:o.orderGoods[i].price,price:o.orderGoods[i].price,total:o.orderGoods[i].price*o.orderGoods[i].buynumber,discounttotal:o.orderGoods[i].price*o.orderGoods[i].buynumber,type:s,address:o.address.address,tel:o.address.phone,consignee:o.address.name,zhanghao:o.orderGoods[i].zhanghao,status:u},1==o.seat&&(l["address"]=o.address,f=o.address.split(",").length,l["buynumber"]=f,l["total"]=o.orderGoods[i].price*f,l["discounttotal"]=o.orderGoods[i].price*f),r.next=37,o.$api.add("orders",l);case 37:if(!o.orderGoods[i].id){r.next=41;break}return r.next=40,o.$api.del("cart",JSON.stringify([o.orderGoods[i].id]));case 40:e.removeStorageSync("cart".concat(o.orderGoods[i].goodid).concat(o.user.id));case 41:i++,r.next=14;break;case 44:if(!d){r.next=58;break}if(1!=s){r.next=53;break}return o.$utils.msgBack("支付成功"),o.user.money=o.user.money-o.total,(o.user.jf||0==o.user.jf)&&(o.user.jf=parseFloat(o.user.jf)+parseFloat(o.total)),r.next=51,o.$api.update(n,o.user);case 51:r.next=58;break;case 53:if(2!=s){r.next=58;break}return o.$utils.msgBack("兑换成功"),o.user.jf=o.user.jf-o.total,r.next=58,o.$api.update(n,o.user);case 58:case"end":return r.stop()}}),r)})));function t(e){return r.apply(this,arguments)}return t}()});case 6:case"end":return t.stop()}}),t)})))()},onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};r.default=d}).call(this,t("543d")["default"])}},[["13b9","common/runtime","common/vendor"]]]);