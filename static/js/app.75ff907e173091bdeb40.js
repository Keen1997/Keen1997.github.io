webpackJsonp([1],{Bhqd:function(t,e){},FTYy:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("7+uW"),a=r("wmKo"),n=r.n(a),o=r("/ocq"),i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var u=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(t){r("FTYy")},"data-v-80edd7ac",null).exports;s.a.use(o.a);var l=new o.a({routes:[{path:"/hello",name:"HelloWorld",component:u}]}),v=r("yviF"),c=r.n(v);r("881v");c.a.initializeApp({apiKey:"AIzaSyBYgvHfz9whVPzKE45k9Fzo7O-82rKgIlo",authDomain:"quest-k1728m.firebaseapp.com",databaseURL:"https://quest-k1728m.firebaseio.com",projectId:"quest-k1728m",storageBucket:"quest-k1728m.appspot.com",messagingSenderId:"896206788270"}),c.a.firestore().settings({timestampsInSnapshots:!0});var _=c.a.firestore(),h={name:"App",components:{},firestore:function(){return{users:_.collection("users"),xx:_.collection("users").doc("user1")}},methods:{add:function(){_.collection("users").doc("user1").set({name:"AAA"},{merge:!0})}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"header"}},[r("nav",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/hello"}},[t._v("about")])],1)]),t._v(" "),r("router-view"),t._v(" "),r("p",[t._v(t._s(t.users))]),t._v(" "),r("ul",t._l(t.users,function(e){return r("li",[t._v(t._s(e.name))])})),t._v(" "),r("p",[t._v(t._s(t.xx))]),t._v(" "),r("button",{on:{click:function(e){t.add()}}},[t._v("click")])],1)},staticRenderFns:[]};var m=r("VU/8")(h,p,!1,function(t){r("Bhqd")},null,null).exports;s.a.config.productionTip=!1,s.a.use(n.a),new s.a({el:"#app",router:l,components:{App:m},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.75ff907e173091bdeb40.js.map