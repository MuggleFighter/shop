webpackJsonp([5],{"035s":function(t,e){},"0dUj":function(t,e){},AeEs:function(t,e){},AnIW:function(t,e){},C76S:function(t,e){},"Do/K":function(t,e){},HFfA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("035s"),s=(n.n(a),n("JWK+")),i=(n.n(s),n("pI1A")),r=(n.n(i),n("AeEs")),o=(n.n(r),n("AnIW")),d=(n.n(o),n("d7BR")),c=(n.n(d),n("Do/K")),u=(n.n(c),n("7+uW")),l=n("n/bw"),h=n("U/rD"),f=n("yytp"),m=n("UZ5h"),p=n.n(m).a.parse(location.href,!0).query.id;new u.default({el:"#app",data:{id:p,banners:[],detail:null,tabConfig:["商品详情","本店成交"],tabIndex:0,salesList:null,isLoading:!1,isFinished:!1,pageNum:0,pageSize:5,skuType:null,showModal:!1,skuNum:1,showAddMsg:!1,isAddedCart:!1},components:{Carousel:f.a},methods:{getDetail:function(){var t=this;l.a.ajax(l.a.url.goodDetail,{id:p}).then(function(e){var n=e.data;t.detail=n,t.banners=n.imgs.map(function(t){return{clickUrl:"",image:t}})})},changeTab:function(t){this.tabIndex=t,1!==t||this.salesList||this.getSalesList()},getSalesList:function(){var t=this;this.isLoading||this.isFinished||(this.isLoading=!0,l.a.ajax(l.a.url.salesList,{id:p,pageNum:this.pageNum}).then(function(e){var n=e.list.sort(function(t,e){return t.time<e.time});t.salesList?t.salesList=t.salesList.concat(n):t.salesList=n,t.pageNum++,n.length<t.pageSize&&(t.isFinished=!0),t.isLoading=!1}))},chooseSku:function(t){this.skuType=t,this.showModal=!0},changeSku:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;l.a.ajax(l.a.url.cartAdd,{id:p,skuNum:this.skuNum}).then(function(e){200===e.status&&(t.showModal=!1,t.showAddMsg=!0,t.isAddedCart=!0,setTimeout(function(){return t.showAddMsg=!1},1200))})}},computed:{post:function(){if(this.detail)return 0===this.detail.postage?"免运费":this.detail.postage}},mixins:[h.a],created:function(){this.getDetail()}})},"JWK+":function(t,e){},"U/rD":function(t,e,n){"use strict";var a=n("d7EF"),s=n.n(a),i=n("UZ5h").parse(location.href,!0).query.index,r=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],o={data:function(){return{navConfig:r,navIndex:parseInt(i)||0}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,a){return n("li",{key:e.href,class:{active:a===t.navIndex}},[n("a",{attrs:{href:e.href+"?index="+a}},[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var c={components:{BottomNav:n("VU/8")(o,d,!1,function(t){n("dEmg")},"data-v-6ff6423b",null).exports},filters:{currency:function(t){if(!t)return"0.00";if((t=String(t)).indexOf(".")>-1){var e=t.split("."),n=s()(e,2);return n[0]+"."+(n[1]+"00").substr(0,2)}return t+".00"}}};e.a=c},d7BR:function(t,e){},dEmg:function(t,e){},"n/bw":function(t,e,n){"use strict";var a=n("mtWM"),s=n.n(a),i={url:{hotList:"index/hotList",banners:"index/banner",topCategory:"category/topCategory",rank:"category/rank",subCategory:"category/subCategory",searchList:"search/list",goodDetail:"goods/details",salesList:"goods/sales",cartList:"/cart/list",cartAdd:"cart/add",cartRemove:"cart/remove",cartReduce:"cart/reduce",cartUpdate:"cart/update",addressList:"address/list",addressAdd:"address/add",addressRemove:"address/remove",addressUpdate:"address/update",addressSetDefault:"address/setDefault"},scrollToTop:function(t){var e=window.scrollY/2,n=0,a=performance.now();window.requestAnimationFrame(function s(i){(n+=Math.PI/(t/(i-a)))>=Math.PI&&window.scrollTo(0,0),0!==window.scrollY&&(window.scrollTo(0,Math.round(e+e*Math.cos(n))),a=i,window.requestAnimationFrame(s))})}};i.ajax=s.a.create({baseURL:"https://easy-mock.com/mock/5b14e7fd647ea43344eeccef/",method:"POST"}),i.ajax.interceptors.response.use(function(t){return t.data}),e.a=i},pI1A:function(t,e){},swY8:function(t,e){},yytp:function(t,e,n){"use strict";n("0dUj");var a=n("IqSH"),s=n.n(a),i=(n("swY8"),n("gAYL")),r={props:{banners:{type:Array,required:!0},width:{type:[String,Number],default:100},height:{type:[String,Number],default:100}},components:{"mt-swipe":n.n(i).a,"mt-swipe-item":s.a},computed:{scale:function(){return{"padding-top":this.height/this.width*100+"%"}}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap",style:this.scale},[e("mt-swipe",{staticClass:"container",attrs:{auto:4e3}},this._l(this.banners,function(t,n){return e("mt-swipe-item",{key:n},[e("a",{attrs:{href:t.clickUrl}},[e("img",{attrs:{src:t.image,alt:""}})])])}))],1)},staticRenderFns:[]};var d=n("VU/8")(r,o,!1,function(t){n("C76S")},"data-v-544470eb",null);e.a=d.exports}},["HFfA"]);
//# sourceMappingURL=goods.33a156fb9ad39b4c4fa3.js.map