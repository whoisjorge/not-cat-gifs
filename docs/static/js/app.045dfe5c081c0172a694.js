webpackJsonp([1],{"7uFO":function(t,a,n){"use strict";function e(t){n("DXAE")}var i=n("jdWM"),r=n("LDZA"),o=n("VU/8"),s=e,c=o(i.a,r.a,s,null,null);a.a=c.exports},DXAE:function(t,a){},LDZA:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"container"},[n("header",[n("h1",[t._v("You will not see any cat but... "),n("a",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.reFetch()}}},[t._v(t._s(this.animal)+"s!?")])])]),t._v(" "),t.loading?n("p",{staticStyle:{margin:"50px 0"}},[t._v("Loading...")]):n("main",[n("a",{attrs:{href:t.gif.image_original_url}},[n("img",{attrs:{src:t.gif.image_url}})]),t._v(" "),n("pre",[n("code",[t._v("Random GIF fetched through the "),n("a",{attrs:{href:t.gif.url,target:"_blank"}},[t._v("Giphy API!")])])])]),t._v(" "),n("footer",[n("gh-btns-star",{attrs:{slug:"whoisjorge/not-cat-gifs","show-count":""}}),t._v(" "),n("gh-btns-fork",{attrs:{slug:"whoisjorge/not-cat-gifs","show-count":""}}),t._v(" "),n("gh-btns-follow",{attrs:{user:"whoisjorge","show-count":""}})],1)])},i=[],r={render:e,staticRenderFns:i};a.a=r},M93x:function(t,a,n){"use strict";function e(t){n("Pc85")}var i=n("xJD8"),r=n("XL8n"),o=n("VU/8"),s=e,c=o(i.a,r.a,s,null,null);a.a=c.exports},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i=n("M93x"),r=n("YaEn");e.a.config.productionTip=!1,new e.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},Pc85:function(t,a){},X0g1:function(t,a,n){"use strict";var e=["hamster","dog","zebra","bird","lion","shark","pig","cow","cow","chicken","horse","sheep","duck","snake","tiger","frog","bear","elephant"];a.a=e},XL8n:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r={render:e,staticRenderFns:i};a.a=r},YaEn:function(t,a,n){"use strict";var e=n("7+uW"),i=n("/ocq"),r=n("7uFO");e.a.use(i.a),a.a=new i.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"Index",component:r.a}]})},jdWM:function(t,a,n){"use strict";var e=n("mtWM"),i=n.n(e),r=n("X0g1");a.a={data:function(){return{loading:!0,url:"//api.giphy.com/v1/gifs/random",gif:[],animal:"",animals:r.a}},created:function(){this.random(),this.fetchData()},methods:{random:function(){var t=this.animals[Math.floor(Math.random()*this.animals.length)];this.animal=t},fetchData:function(){var t=this;i.a.get(this.url,{params:{api_key:"zhMMpHG5V5O47xEUk3Yk6JHyExjeEAjY",rating:"g",tag:"animal-"+this.animal}}).then(function(a){t.gif=a.data.data,t.loading=!1}).catch(function(t){console.log(t)})},reFetch:function(){this.random(),this.loading=!0,this.fetchData()}}}},xJD8:function(t,a,n){"use strict";var e=n("7+uW"),i=n("2NXs"),r=n.n(i);e.a.use(r.a,{useCache:!0}),a.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.045dfe5c081c0172a694.js.map