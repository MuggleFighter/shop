webpackJsonp([9],{"035s":function(t,e){},Hwmd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("035s"),o=(a.n(r),a("igmb")),s=(a.n(o),a("n/bw")),i=a("U/rD"),c=a("OMJi");a.n(c);new n.default({el:"#app",data:{topCategory:[],categoryIndex:0,rankData:null,subCategory:{}},methods:{getTopCategory:function(){var t=this;s.a.ajax(s.a.url.topCategory).then(function(e){t.topCategory=e.list})},changeCategory:function(t,e){this.categoryIndex=t,0===t?this.getRankData():this.getSubCategory(e.id)},getRankData:function(){var t=this;s.a.ajax(s.a.url.rank).then(function(e){return t.rankData=e.data})},getSubCategory:function(t){var e=this;s.a.ajax(s.a.url.subCategory,{id:t}).then(function(t){return e.subCategory=t.data})},search:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},created:function(){this.getTopCategory(),this.getRankData()},mixins:[i.a]})},"U/rD":function(t,e,a){"use strict";var n=a("d7EF"),r=a.n(n),o=a("UZ5h").parse(location.href,!0).query.index,s=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],i={data:function(){return{navConfig:s,navIndex:parseInt(o)||0}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{key:e.href,class:{active:n===t.navIndex}},[a("a",{attrs:{href:e.href+"?index="+n}},[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var d={components:{BottomNav:a("VU/8")(i,c,!1,function(t){a("dEmg")},"data-v-6ff6423b",null).exports},filters:{currency:function(t){if(!t)return"0.00";if((t=String(t)).indexOf(".")>-1){var e=t.split("."),a=r()(e,2);return a[0]+"."+(a[1]+"00").substr(0,2)}return t+".00"}}};e.a=d},dEmg:function(t,e){},igmb:function(t,e){},"n/bw":function(t,e,a){"use strict";var n=a("mtWM"),r=a.n(n),o={url:{hotList:"index/hotList",banners:"index/banner",topCategory:"category/topCategory",rank:"category/rank",subCategory:"category/subCategory",searchList:"search/list",goodDetail:"goods/details",salesList:"goods/sales",cartList:"/cart/list",cartAdd:"cart/add",cartRemove:"cart/remove",cartReduce:"cart/reduce",cartUpdate:"cart/update",addressList:"address/list",addressAdd:"address/add",addressRemove:"address/remove",addressUpdate:"address/update",addressSetDefault:"address/setDefault"},scrollToTop:function(t){var e=window.scrollY/2,a=0,n=performance.now();window.requestAnimationFrame(function r(o){(a+=Math.PI/(t/(o-n)))>=Math.PI&&window.scrollTo(0,0),0!==window.scrollY&&(window.scrollTo(0,Math.round(e+e*Math.cos(a))),n=o,window.requestAnimationFrame(r))})}};o.ajax=r.a.create({baseURL:"https://easy-mock.com/mock/5b14e7fd647ea43344eeccef/",method:"POST"}),o.ajax.interceptors.response.use(function(t){return t.data}),e.a=o}},["Hwmd"]);
//# sourceMappingURL=category.ffca5da7c1d1cb5f2c1a.js.map