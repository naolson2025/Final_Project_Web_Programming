(function(n){function e(e){for(var a,o,c=e[0],i=e[1],u=e[2],f=0,l=[];f<c.length;f++)o=c[f],s[o]&&l.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a]);d&&d(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],a=!0,c=1;c<t.length;c++){var i=t[c];0!==s[i]&&(a=!1)}a&&(r.splice(e--,1),n=o(o.s=t[0]))}return n}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=a,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)o.d(t,a,function(e){return n[e]}.bind(null,a));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=i;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var a=t("64a9"),s=t.n(a);s.a},4678:function(n,e,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(n){var e=r(n);return t(e)}function r(n){var e=a[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}s.keys=function(){return Object.keys(a)},s.resolve=r,n.exports=s,s.id="4678"},"520f":function(n,e,t){"use strict";var a=t("a848"),s=t.n(a);s.a},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var a,s,r,o,c=t("2b0e"),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header"),t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("h2",[n._v("Income")]),n.dataLoaded?t("IncomeGraph",{attrs:{chartData:n.incomeChartData,options:n.options}}):n._e(),t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.newIncomeTransactionDescription,expression:"newIncomeTransactionDescription",modifiers:{trim:!0}}],attrs:{placeholder:"Description"},domProps:{value:n.newIncomeTransactionDescription},on:{input:function(e){e.target.composing||(n.newIncomeTransactionDescription=e.target.value.trim())},blur:function(e){return n.$forceUpdate()}}}),t("input",{directives:[{name:"model",rawName:"v-model.number",value:n.newIncomeTransactionAmount,expression:"newIncomeTransactionAmount",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"Amount"},domProps:{value:n.newIncomeTransactionAmount},on:{input:function(e){e.target.composing||(n.newIncomeTransactionAmount=n._n(e.target.value))},blur:function(e){return n.$forceUpdate()}}}),t("button",{on:{click:n.addIncomeTransaction}},[n._v("Add Transaction")])])],1),t("div",{staticClass:"col-md-6"},[t("h2",[n._v("Expenses")]),n.dataLoaded?t("ExpenseGraph",{attrs:{chartData:n.expenseChartData,options:n.options}}):n._e(),t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.newExpenseTransactionDescription,expression:"newExpenseTransactionDescription",modifiers:{trim:!0}}],attrs:{placeholder:"Description"},domProps:{value:n.newExpenseTransactionDescription},on:{input:function(e){e.target.composing||(n.newExpenseTransactionDescription=e.target.value.trim())},blur:function(e){return n.$forceUpdate()}}}),t("input",{directives:[{name:"model",rawName:"v-model.number",value:n.newExpenseTransactionAmount,expression:"newExpenseTransactionAmount",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"Amount"},domProps:{value:n.newExpenseTransactionAmount},on:{input:function(e){e.target.composing||(n.newExpenseTransactionAmount=n._n(e.target.value))},blur:function(e){return n.$forceUpdate()}}}),t("button",{on:{click:n.addExpenseTransaction}},[n._v("Add Transaction")])])],1)])])],1)},u=[],d=(t("ac6a"),function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)}),f=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"header"},[t("div",{staticClass:"jumbotron"},[t("h1",{staticClass:"display-4",attrs:{id:"title"}},[n._v("Instructions")]),t("p",{staticClass:"lead"},[n._v("This app helps users organize their finances.")]),t("ul",[t("li")])])])}],l={name:"Header"},p=l,m=(t("520f"),t("2877")),b=Object(m["a"])(p,d,f,!1,null,"2dc5873a",null),j=b.exports,h=t("1fca"),v=h["b"].reactiveProp,g={extends:h["a"],mixins:[v],props:{options:Object},mounted:function(){this.renderChart(this.chartData,this.options)}},w=g,x=Object(m["a"])(w,a,s,!1,null,null,null),T=x.exports,D=h["b"].reactiveProp,y={extends:h["a"],mixins:[D],props:{options:Object},mounted:function(){this.renderChart(this.chartData,this.options)}},k=y,C=Object(m["a"])(k,r,o,!1,null,null,null),E=C.exports,A={name:"app",components:{ExpenseGraph:E,IncomeGraph:T,Header:j},data:function(){return{incomeData:[],incomeChartData:{},options:{},dataLoaded:!1,newIncomeTransactionDescription:"",newIncomeTransactionAmount:"",expenseData:[],expenseChartData:{},newExpenseTransactionDescription:"",newExpenseTransactionAmount:""}},mounted:function(){this.options={},this.loadChartData()},methods:{loadChartData:function(){var n=this;this.$transactionService.getAll().then(function(e){var t=[],a=[];e.forEach(function(n){"Income"===n.type?t.push(n):a.push(n)}),n.incomeData=t,n.expenseData=a;var s=n.incomeData.map(function(n){return n.description}),r=n.incomeData.map(function(n){return n.amount}),o=n.backgroundColor(s.length);n.incomeChartData={labels:s,datasets:[{label:"Income Transactions",data:r,backgroundColor:o}]};var c=n.expenseData.map(function(n){return n.description}),i=n.expenseData.map(function(n){return n.amount}),u=n.backgroundColor(c.length);n.expenseChartData={labels:c,datasets:[{label:"Expense Transactions",data:i,backgroundColor:u}]},n.dataLoaded=!0})},addIncomeTransaction:function(){var n=this;this.newIncomeTransactionDescription&&this.newIncomeTransactionAmount?this.$transactionService.addTransaction({type:"Income",description:this.newIncomeTransactionDescription,amount:this.newIncomeTransactionAmount}).then(function(e){n.newIncomeTransactionDescription="",n.newIncomeTransactionAmount="",n.loadChartData()}).catch(function(n){return console.error(n)}):alert("Enter description and amount")},addExpenseTransaction:function(){var n=this;this.newExpenseTransactionDescription&&this.newExpenseTransactionAmount?this.$transactionService.addTransaction({type:"Expense",description:this.newExpenseTransactionDescription,amount:this.newExpenseTransactionAmount}).then(function(e){n.newExpenseTransactionDescription="",n.newExpenseTransactionAmount="",n.loadChartData()}).catch(function(n){return console.error(n)}):alert("Enter description and amount")},backgroundColor:function(n){for(var e=["#C0392B","#E74C3C","#9B59B6","#8E44AD","#2980B9","#3498DB","#1ABC9C","#16A085","#27AE60","#2ECC71","#F1C40F","#F39C12","#E67E2","#D35400"],t=[],a=0,s=0;s<n;s++){var r=e[a];t.push(r),a=(a+1)%e.length}return t}}},I=A,_=(t("034f"),Object(m["a"])(I,i,u,!1,null,null,null)),z=_.exports,O=t("bc3a"),P=t.n(O),$={getAll:function(){return P.a.get("/api/transactions/").then(function(n){return n.data})},addTransaction:function(n){return P.a.post("/api/transaction/",n).then(function(n){return n.data})}},S=t("8c4f"),B=t("9f7b"),G=t.n(B);t("f9e3"),t("2dd8");c["default"].prototype.$transactionService=$,c["default"].use(S["a"]),c["default"].use(G.a),c["default"].config.productionTip=!1,new c["default"]({render:function(n){return n(z)}}).$mount("#app")},"64a9":function(n,e,t){},a848:function(n,e,t){}});
//# sourceMappingURL=app.c70d9f29.js.map