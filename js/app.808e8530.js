(function(t){function e(e){for(var n,i,l=e[0],c=e[1],o=e[2],u=0,h=[];u<l.length;u++)i=l[u],s[i]&&h.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"35a1":function(t,e,a){},3772:function(t,e,a){},"3e5e":function(t,e,a){"use strict";var n=a("8907"),s=a.n(n);s.a},4645:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("today-news"),a("Bazaar"),a("Exchange"),a("Position"),a("Increase"),a("Capital"),a("Ahoverflow"),a("stockTabs"),a("report"),a("info"),a("Guild"),a("footer",[a("div",{staticClass:"widthCenter"},[a("font",[t._v("免责声明：")]),t._v("本报告中的信息均来源于公开可获得资料，部分内容参考网络发布的个股评析，点击“阅读"),a("strong",[t._v("本报告中的信息均来源于公开可获得资料，部分内容参考网络发布的个股评析，点击“阅读本报告中的信息均来源于公开可获得资料，部分内容参考网络发布的个股评析，点击“阅读本报告中的信息均来源于公开可获得资料，部分内容参考网络发布的个股评析，点击“阅读")])],1)])],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[a("div",{staticClass:"widthCenter"},[t._m(0),a("ul",{staticClass:"news"},t._l(t.content,function(e){return a("li",[a("i"),a("span",[t._v(t._s(e))])])}),0)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("当日资讯")])])}],c=(a("28a5"),a("bc3a")),o=a.n(c);function d(t,e){return new Promise(function(a,n){o.a.get(t,{params:e}).then(function(t){a(t)},function(t){n(t)}).catch(function(t){n(t)})})}o.a.defaults.baseURL="https://data.alldobetter.com/dataserver/mobile";var u=new Date,h=u.getFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate(),_=new Date;_.setMonth(_.getMonth()-3);var v=_.getFullYear()+"-"+(_.getMonth()+1)+"-"+_.getDate();_.setMonth(_.getMonth()-9);var f=_.getFullYear()+"-"+(_.getMonth()+1)+"-"+_.getDate(),p="426877d29bce4b8da7e6c120101121c9",m={getNewsByReportDate:{url:"https://data.alldobetter.com:8084/ggt-web/scyw/getNewsByReportDate",params:{classId:1,belongDate:h}},bazaar:{url:"GGT_ZBC_SCSD.json",params:{secret:p}},bazaarChart:{url:"GGT_ZBC_ZSQS.json",params:{secret:p,BeginDate:v,EndDate:h}},exchange:{url:"GGT_ZBC_ZYZSJYGK",params:{filter:[{secret:p,SecuCode:"USD/CNY",SecuAbbr:"美元/人民币中间价"},{secret:p,SecuCode:"HKD/CNY",SecuAbbr:"港币/人民币中间价"},{secret:p,SecuCode:"HKDBUY",SecuAbbr:"港股通买入结算汇兑比率"},{secret:p,SecuCode:"HKDSELL",SecuAbbr:"港股通卖出结算汇兑比率"}]}},exchangeChart:{url:"GGT_ZBC_HLZJJQS.json",params:{secret:p,BeginDate:v,EndDate:h,FilterCode:1}},position:{url:"GGT_ZBC_SDHYCJ.json",params:{filter:[{secret:p,EndDate:h,FilterCode:2},{secret:p,EndDate:h,FilterCode:4}]}},positionNew:{url:"GGT_ZBC_GGTZJCCPM.json",params:{secret:p,EndDate:h,FilterCode:2}},increase:{url:"GGT_ZBC_ZDPM.json",params:{secret:p,BeginDate:v,EndDate:h}},capital:{url:"GGT_ZBC_ZJLX.json",params:{secret:p,EndDate:h}},capitalCharts:{url:"GGT_ZBC_ZJLXQS.json",params:{secret:p,BeginDate:v,EndDate:h}},AH:{url:"GGT_ZBC_ZYZSQS.json",params:{secret:p,SecuCode:"AHP",BeginDate:f,EndDate:h}},transaction:{url:"https://data.alldobetter.com:8084/ggt-web/scyw/getNewsByReportDate",params:{filter:[{classId:5,belongDate:h},{classId:10,belongDate:h},{classId:6,belongDate:h},{classId:3,belongDate:h},{classId:4,belongDate:h}]}},buyBack:{url:"GGT_ZBC_HGSD",params:{secret:p,EndDate:h}}},b=m,C={data:function(){return{content:[]}},created:function(){var t=this;d(b.getNewsByReportDate.url,b.getNewsByReportDate.params).then(function(e){e=e.data;"000000"==e.code&&(t.content=e.responseEntity[0].content.split("\n"))})}},g=C,y=a("2877"),x=Object(y["a"])(g,i,l,!1,null,null,null);x.options.__file="todayNews.vue";var w=x.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[t._m(0),a("Table"),a("Chart")],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widthCenter"},[a("h2",[a("span",{staticClass:"title"},[t._v("市场概况")])]),a("p",{staticClass:"remark"},[t._v("截至上一交易日收盘，恒指跌0.7%，报27005点；国企指数跌0.93%，报106 13点；红筹指数跌0.72%，报4290点；大市成交841.87亿港元。 ")])])}],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table table1"},[a("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(0),t._l(t.table,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.IndexName))]),a("td",[t._v(t._s(e.ClosePrice))]),a("td",[t._v(t._s(e.ChangePCT))]),a("td",[t._v(t._s(e.TurnoverValue))])])})],2)])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{width:"30%"}},[t._v("指数")]),a("th",[t._v("收盘价")]),a("th",[t._v("涨跌幅")]),a("th",[t._v("成交额")])])}],T={data:function(){return{table:[]}},created:function(){var t=this;d(b.bazaar.url,b.bazaar.params).then(function(e){e=e.data;"000000"==e.code&&(t.table=e.data)})}},P=T,$=(a("c842"),Object(y["a"])(P,E,A,!1,null,null,null));$.options.__file="table.vue";var k=$.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts_box",attrs:{id:"myChart"}})},B=[],O=a("313e"),G=a.n(O),H={data:function(){return{charts:[],date:[],title:[],series:[{data:[]},{data:[]},{data:[]}]}},created:function(){var t=this;d(b.bazaarChart.url,b.bazaarChart.params).then(function(e){e=e.data;if("000000"==e.code){for(var a=0;a<e.data.length;a++)t.date.push(e.data[a].TradingDay),0==a&&t.title.push(e.data[a].IndexNameHS,e.data[a].IndexNameSZZ,e.data[a].IndexNameHSZS),t.series[0].data.push(parseFloat(e.data[a].ChangePCTRBHS)),t.series[1].data.push(parseFloat(e.data[a].ChangePCTRBSZZ)),t.series[2].data.push(parseFloat(e.data[a].ChangePCTRBHSZS)),t.charts.push(e.data[a]);t.getCharts()}})},methods:{getCharts:function(){var t=this.$echarts.init(document.getElementById("myChart")),e={title:{text:"主要指数走势对比图",left:"center"},tooltip:{trigger:"axis",show:!1},legend:{data:this.title,top:"30px"},grid:{top:"80px",left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.date},yAxis:{type:"value",axisLabel:{formatter:"{value} %"}},series:[{name:"恒生综合指数",type:"line",stack:"总量",data:this.series[0].data},{name:"上证指数",type:"line",stack:"总量",data:this.series[1].data},{name:"恒生指数",type:"line",stack:"总量",data:this.series[2].data}]};t.setOption(e)}}},I=H,Z=(a("3e5e"),Object(y["a"])(I,j,B,!1,null,"1fa46097",null));Z.options.__file="chart.vue";var N=Z.exports,L={name:"bazaar",components:{Table:k,Chart:N}},M=L,K=Object(y["a"])(M,D,S,!1,null,null,null);K.options.__file="bazaar.vue";var R=K.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[t._m(0),t._m(1),a("Table"),a("Chart")],1)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("汇率走势 ")]),a("span",{staticClass:"time"},[t._v("2019-01-22")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"sayText"},[a("span",[t._v("人民币汇率中间价")]),a("span",[t._v("港股通结算汇兑比率（HKD）")])])}],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(0),a("tr",[a("td",[t._v(t._s(t.ClosePrice)+" "),a("span",{staticClass:"red"},[t._v(t._s(t.ChangePCT))])]),a("td",[t._v(t._s(t.ChangePCT2)+" "),a("span",{staticClass:"red"},[t._v(t._s(t.ChangePCT2))])]),a("td",[t._v(t._s(t.ClosePrice3))]),a("td",[t._v(t._s(t.ClosePrice4))])])])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{width:"30%"}},[t._v("美元/人民币-涨跌(BP)")]),a("th",{attrs:{width:"30%"}},[t._v("港币/人民币-涨跌(BP)")]),a("th",[t._v("买入价(HKD)")]),a("th",[t._v("卖出价(HKD)")])])}],U={data:function(){return{ClosePrice:"",ClosePrice2:"",ChangePCT:"",ChangePCT2:"",ClosePrice3:"",ClosePrice4:""}},created:function(){var t=this;d(b.exchange.url,b.exchange.params.filter[0]).then(function(e){e=e.data;if("000000"==e.code)for(var a=0;a<e.data.length;a++)"USD/CNY"==e.data[a].IndexCode&&(t.ClosePrice=e.data[a].ClosePrice,t.ChangePCT=e.data[a].ChangePCT),"HKD/CNY"==e.data[a].IndexCode&&(t.ClosePrice2=e.data[a].ClosePrice,t.ChangePCT2=e.data[a].ChangePCT),"HKDBUY"==e.data[a].IndexCode&&(t.ClosePrice3=e.data[a].ClosePrice),"HKDSELL"==e.data[a].IndexCode&&(t.ClosePrice4=e.data[a].ClosePrice)})}},Q=U,W=Object(y["a"])(Q,z,J,!1,null,null,null);W.options.__file="table.vue";var V=W.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts_box",attrs:{id:"myChart1"}})},q=[],tt={data:function(){return{data:[],date:[],Min:"",Max:""}},created:function(){var t=this;d(b.exchangeChart.url,b.exchangeChart.params).then(function(e){e=e.data;if("000000"==e.code){for(var a=0;a<e.data.length;a++)t.data.push(e.data[a].ExchangeRate),t.date.push(e.data[a].TradingDay),t.Min=Math.min(t.data)-10,t.Max=Math.max(t.data)+10;t.getCharts()}})},methods:{getCharts:function(){var t=this.$echarts.init(document.getElementById("myChart1")),e={title:{text:"100港元兑人民币汇率走势",left:"center"},tooltip:{trigger:"axis",show:!1},legend:{data:["100港元兑人民币汇率走势"],top:"30px"},grid:{top:"80px",left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.date},yAxis:{type:"value",min:80},series:[{name:"100港元兑人民币汇率走势",type:"line",showSymbol:!1,stack:"总量",data:this.data}]};t.setOption(e)}}},et=tt,at=(a("b893"),Object(y["a"])(et,X,q,!1,null,"5db1a559",null));at.options.__file="chart.vue";var nt=at.exports,st={name:"exchange",components:{Table:V,Chart:nt}},rt=st,it=(a("9aed"),Object(y["a"])(rt,Y,F,!1,null,null,null));it.options.__file="exchangeRate.vue";var lt=it.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[t._m(0),a("Table"),t._m(1),a("new-table")],1)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("成交持仓榜 ")]),a("span",{staticClass:"time"},[t._v("2019-01-22")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Tenth_top widthCenter"},[a("span",{staticClass:"text"},[t._v("港股通十大成交股")])])}],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"Tenth_top widthCenter"},[a("span",{staticClass:"text"},[t._v("港股通十大成交股")]),a("ul",[a("li",{class:{active:0==t.isActive},on:{click:function(e){t.changeData(t.isActive=0)}}},[t._v("沪市")]),a("li",{class:{active:1==t.isActive},on:{click:function(e){t.changeData(t.isActive=1)}}},[t._v("深市")])])]),a("div",{staticClass:"table table2"},[a("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(0),t._l(t.table,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(e.SecuCode))]),a("td",[t._v(t._s(e.SecuAbbr))]),a("td",[t._v(t._s(e.NetAmount))]),a("td",[t._v(t._s(e.BuyAmount))]),a("td",[t._v(t._s(e.SellAmount))])])})],2)])])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("排名")]),a("th",[t._v("代码")]),a("th",[t._v("股票名称")]),a("th",[t._v("\n\t\t\t\t\t净买入额\n\t\t\t\t\t"),a("span",[t._v("(亿)")])]),a("th",[t._v("\n\t\t\t\t\t买入金额\n\t\t\t\t\t"),a("span",[t._v("(亿)")])]),a("th",[t._v("\n\t\t\t\t\t卖出金额\n\t\t\t\t\t"),a("span",[t._v("(亿)")])])])}],ht=window.localStorage;ht.id=void 0;var _t={data:function(){return{table:[],isActive:0}},created:function(){this.changeData(0)},methods:{changeData:function(t){var e=this;if(t==ht.id)return!1;ht.id=t,d(b.position.url,b.position.params.filter[t]).then(function(t){t=t.data;"000000"==t.code&&(e.table=t.data)})}}},vt=_t,ft=Object(y["a"])(vt,dt,ut,!1,null,null,null);ft.options.__file="table.vue";var pt=ft.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table table3"},[a("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(0),t._l(t.table,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(e.SecuAbbr))]),a("td",[t._v(t._s(e.SecuCode))]),a("td",[t._v(t._s(e.HoldingPSI)+"%")])])})],2)])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("排名")]),a("th",[t._v("代码")]),a("th",[t._v("股票名称")]),a("th",[t._v("持仓比例")])])}],Ct=window.localStorage;Ct.id=void 0;var gt={data:function(){return{table:[]}},created:function(){this.changeData()},methods:{changeData:function(){var t=this;d(b.positionNew.url,b.positionNew.params).then(function(e){e=e.data;if("000000"==e.code)for(var a=0;a<e.data.length;a++)a<10&&t.table.push(e.data[a])})}}},yt=gt,xt=Object(y["a"])(yt,mt,bt,!1,null,null,null);xt.options.__file="newTable.vue";var wt=xt.exports,Dt={name:"position",components:{Table:pt,newTable:wt}},St=Dt,Et=Object(y["a"])(St,ct,ot,!1,null,null,null);Et.options.__file="position.vue";var At=Et.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[t._m(0),a("div",{staticClass:"table"},[a("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(1),t._l(t.table,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(e.SecuCode))]),a("td",[t._v(t._s(e.SecuAbbr))]),a("td",[t._v(t._s(e.ChangePCT)+"%")]),a("td",[t._v(t._s(e.ClosePrice))]),a("td",[t._v(t._s(e.TurnValue))])])})],2)])])},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("港股通涨幅排行榜")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{width:"10%"}},[t._v("排名")]),a("th",[t._v("代码")]),a("th",[t._v("股票名称")]),a("th",[t._v("涨幅"),a("span",[t._v("%")])]),a("th",[t._v("现价")]),a("th",{attrs:{width:"25%"}},[t._v("成交金额"),a("span",[t._v("(亿)")])])])}],$t=window.localStorage;$t.id=void 0;var kt={data:function(){return{table:[]}},created:function(){this.changeData()},methods:{changeData:function(){var t=this;d(b.increase.url,b.increase.params).then(function(e){e=e.data;if("000000"==e.code)for(var a=0;a<e.data.length;a++)a<10&&t.table.push(e.data[a])})}}},jt=kt,Bt=Object(y["a"])(jt,Tt,Pt,!1,null,null,null);Bt.options.__file="increase.vue";var Ot=Bt.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[t._m(0),t._m(1),a("Table"),a("chart-contrast"),a("br"),a("nearly")],1)},Ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("南北向资金流向")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widthCenter"},[a("div",{staticClass:"remark"},[t._v("截至上一交易日收盘，沪港通下的港股通净流入4.74亿元，当日余额415.26亿 元；深港通下的港股通净流入-1.17亿元，当日余额421.17亿元；沪股通净流 入-6.52亿元，当日余额526.52亿元；深股通净流入-4.59亿元，当日余额524 .59亿元。")])])}],It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(0),t._l(t.table,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.Flow_Dire))]),a("td",[t._v(t._s(e.Plate_Type))]),a("td",[t._v(t._s(e.Total_Amount))]),a("td",[t._v(t._s(e.Buy_Amount))]),a("td",[t._v(t._s(e.Sell_Amount))]),a("td",[t._v(t._s(e.Net_Amount))]),a("td",[t._v(t._s(e.Remain_Amount))])])})],2)])},Zt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("方向")]),a("th",[t._v("类型")]),a("th",[t._v("总成交")]),a("th",[t._v("买入成交")]),a("th",[t._v("卖出成交")]),a("th",[t._v("净流入")]),a("th",[t._v("日余额")])])}],Nt=window.localStorage;Nt.id=void 0;var Lt={data:function(){return{table:[]}},created:function(){this.changeData()},methods:{changeData:function(){var t=this;d(b.capital.url,b.capital.params).then(function(e){e=e.data;if("000000"==e.code)for(var a=0;a<e.data.length;a++)a<10&&t.table.push(e.data[a])})}}},Mt=Lt,Kt=Object(y["a"])(Mt,It,Zt,!1,null,null,null);Kt.options.__file="table.vue";var Rt=Kt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts_box",attrs:{id:"myChart3"}})},Ft=[],zt={data:function(){return{data:[],date:[],series:[{data:[]},{data:[]},{data:[]}]}},created:function(){var t=this;d(b.capitalCharts.url,b.capitalCharts.params).then(function(e){e=e.data;if("000000"==e.code){for(var a=0;a<e.data.length;a++)t.date.unshift(e.data[a].TradingDay),t.series[0].data.unshift(e.data[a].HSSENet),t.series[1].data.unshift(e.data[a].SHHKNet);t.getCharts()}})},methods:{getCharts:function(){var t=this.$echarts.init(document.getElementById("myChart3")),e={title:{text:"近三月南北向资金趋势图",left:"center"},tooltip:{trigger:"axis",show:!1},legend:{data:["北向资金趋势（亿元）","南向资金趋势（亿港元）"],top:"30px"},grid:{top:"80px",left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.date},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},series:[{name:"北向资金趋势（亿元）",type:"line",barGap:"100%",barWidth:"2px",showSymbol:!1,stack:"总量",data:this.series[0].data},{name:"南向资金趋势（亿港元）",type:"line",showSymbol:!1,stack:"总量",data:this.series[1].data}]};t.setOption(e)}}},Jt=zt,Ut=Object(y["a"])(Jt,Yt,Ft,!1,null,null,null);Ut.options.__file="nearly.vue";var Qt=Ut.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts_box",attrs:{id:"myChart2"}})},Vt=[],Xt={data:function(){return{date:[],series:[{data:[]},{data:[]},{data:[]}]}},created:function(){var t=this;d(b.capitalCharts.url,b.capitalCharts.params).then(function(e){e=e.data;if("000000"==e.code){for(var a=0;a<e.data.length;a++)t.date.unshift(e.data[a].TradingDay),t.series[0].data.unshift(e.data[a].SHHKSCNet),t.series[1].data.unshift(e.data[a].HSICPrice),t.series[2].data.unshift(e.data[a].SHHKSZNet);t.getCharts()}})},methods:{getCharts:function(){var t=this.$echarts.init(document.getElementById("myChart2")),e={title:{text:"港股通资金流入及恒生指数走势图\t",left:"center"},tooltip:{trigger:"axis",show:!1},legend:{data:["港股通（沪）当日资金净流入（亿）","恒生指数","港股通（深）当日资金净流入（亿）"],top:"30px"},grid:{top:"80px",left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1},yAxis:[{name:"",type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},{name:"",type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}}],series:[{name:"港股通（沪）当日资金净流入（亿）",type:"bar",barGap:"100%",barWidth:"2px",showSymbol:!1,stack:"总量",yAxisIndex:0,data:this.series[0].data},{name:"恒生指数",type:"line",yAxisIndex:1,showSymbol:!1,stack:"总量",data:this.series[1].data},{name:"港股通（深）当日资金净流入（亿）",type:"bar",yAxisIndex:0,barWidth:"2px",showSymbol:!1,stack:"总量",data:this.series[2].data}]};t.setOption(e)}}},qt=Xt,te=Object(y["a"])(qt,Wt,Vt,!1,null,null,null);te.options.__file="chartContrast.vue";var ee=te.exports,ae={name:"capital",components:{Table:Rt,nearly:Qt,chartContrast:ee}},ne=ae,se=(a("7d1a"),Object(y["a"])(ne,Gt,Ht,!1,null,null,null));se.options.__file="capital.vue";var re=se.exports,ie=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},le=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[a("h2",[a("span",{staticClass:"title"},[t._v("AH股折溢价")])]),a("div",{staticClass:"widthCenter"},[a("div",{staticClass:"remark"},[t._v("截至上一交易日收盘，AH股折溢价指数为116.78，AH折溢价指数略下降，H 股相对A股仍有一定折价空间。")]),a("div",{staticClass:"charts_box",attrs:{id:"myChart4"}})])])}],ce={data:function(){return{data:[],date:[]}},created:function(){var t=this;d(b.AH.url,b.AH.params).then(function(e){e=e.data;if("000000"==e.code){for(var a=0;a<e.data.length;a++)t.data.push(e.data[a].ClosePrice),t.date.push(e.data[a].TradingDay);t.getCharts()}})},methods:{getCharts:function(){var t=this.$echarts.init(document.getElementById("myChart4")),e={title:{text:"AH股溢价指数",left:"center"},tooltip:{trigger:"axis",show:!1},color:["#4d88ec"],legend:{data:["收盘价"],top:"30px"},grid:{top:"80px",left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.date},yAxis:{type:"value"},series:[{name:"收盘价",type:"line",showSymbol:!1,stack:"总量",lineStyle:{normal:{color:"#4d88ec"}},data:this.data}]};t.setOption(e)}}},oe=ce,de=Object(y["a"])(oe,ie,le,!1,null,null,null);de.options.__file="AHoverflow.vue";var ue=de.exports,he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[a("div",{staticClass:"widthCenter"},[a("ul",{staticClass:"m_tabs"},[a("li",{class:{active:0==t.isActive},on:{click:function(e){t.changeData(t.isActive=0)}}},[t._v("快速游览")]),a("li",{class:{active:1==t.isActive},on:{click:function(e){t.changeData(t.isActive=1)}}},[t._v("股价异动")]),a("li",{class:{active:2==t.isActive},on:{click:function(e){t.changeData(t.isActive=2)}}},[t._v("回购速递")])]),a("ul",{staticClass:"news"},t._l(t.table,function(e,n){return a("li",{key:n},[a("i"),a("span",[t._v(t._s(e))])])}),0)])])},_e=[],ve=window.localStorage;ve.id=void 0;var fe={data:function(){return{table:[],isActive:0}},created:function(){this.changeData(0)},methods:{changeData:function(t){var e=this;if(t==ve.id)return!1;ve.id=t,2!=t?d(b.transaction.url,b.transaction.params.filter[t]).then(function(t){t=t.data;"000000"==t.code&&(e.table=t.responseEntity[0].content.split("\n"))}):d(b.buyBack.url,b.buyBack.params).then(function(t){t=t.data;if("000000"==t.code){for(var a=[],n=0;n<t.data.length;n++)a.push(t.data[n].RepNote);e.table=a}})}}},pe=fe,me=Object(y["a"])(pe,he,_e,!1,null,null,null);me.options.__file="stockTabs.vue";var be=me.exports,Ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[a("div",{staticClass:"widthCenter"},[t._m(0),a("ul",{staticClass:"news "},t._l(t.table,function(e,n){return a("li",{key:n},[a("i"),a("span",[t._v(t._s(e))])])}),0)])])},ge=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("研报观点 ")])])}],ye=window.localStorage;ye.id=void 0;var xe={data:function(){return{table:[]}},created:function(){this.changeData()},methods:{changeData:function(){var t=this;d(b.transaction.url,b.transaction.params.filter[2]).then(function(e){e=e.data;"000000"==e.code&&(t.table=e.responseEntity[0].content.split("\n"))})}}},we=xe,De=Object(y["a"])(we,Ce,ge,!1,null,null,null);De.options.__file="report.vue";var Se=De.exports,Ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[a("div",{staticClass:"widthCenter"},[t._m(0),a("ul",{staticClass:"news "},t._l(t.table,function(e,n){return a("li",{key:n},[a("i"),a("span",{staticClass:"black"},[t._v(t._s(e.title))]),a("div",{staticClass:"news_info"},[t._v(t._s(e.content)),a("p")]),a("div",{staticClass:"read"},[a("font",[t._v("解读：")]),t._v(t._s(e.answer)+"\n\t\t\t\t")],1)])}),0)])])},Ae=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("宏观/政策信息 ")])])}],Te=a("2909"),Pe=window.localStorage;Pe.id=void 0;var $e={data:function(){return{table:[]}},created:function(){this.changeData()},methods:{changeData:function(){var t=this;d(b.transaction.url,b.transaction.params.filter[3]).then(function(e){e=e.data;console.log(e),"000000"==e.code&&(t.table=Object(Te["a"])(e.responseEntity))})}}},ke=$e,je=Object(y["a"])(ke,Ee,Ae,!1,null,null,null);je.options.__file="info.vue";var Be=je.exports,Oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moudle"},[a("div",{staticClass:"widthCenter"},[t._m(0),a("ul",{staticClass:"news "},t._l(t.table,function(e,n){return a("li",{key:n},[a("i"),a("span",{staticClass:"black"},[t._v(t._s(e.title))]),a("div",{staticClass:"news_info"},[t._v(t._s(e.content)),a("p")]),""!=e.answer?a("div",{staticClass:"read"},[a("font",[t._v("解读：")]),t._v(t._s(e.answer)+"\n\t\t\t\t")],1):t._e()])}),0)])])},Ge=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("span",{staticClass:"title"},[t._v("行业/公司信息")])])}],He=window.localStorage;He.id=void 0;var Ie={data:function(){return{table:[]}},created:function(){this.changeData()},methods:{changeData:function(){var t=this;d(b.transaction.url,b.transaction.params.filter[4]).then(function(e){e=e.data;console.log(e),"000000"==e.code&&(t.table=Object(Te["a"])(e.responseEntity))})}}},Ze=Ie,Ne=Object(y["a"])(Ze,Oe,Ge,!1,null,null,null);Ne.options.__file="guild.vue";var Le=Ne.exports,Me={name:"app",components:{todayNews:w,Bazaar:R,Exchange:lt,Position:At,Increase:Ot,Capital:re,Ahoverflow:ue,stockTabs:be,report:Se,info:Be,Guild:Le}},Ke=Me,Re=(a("034f"),Object(y["a"])(Ke,s,r,!1,null,null,null));Re.options.__file="App.vue";var Ye=Re.exports;a("35a1");n["a"].prototype.$echarts=G.a,n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Ye)}}).$mount("#app")},"64a9":function(t,e,a){},"7d1a":function(t,e,a){"use strict";var n=a("4645"),s=a.n(n);s.a},8907:function(t,e,a){},"9aed":function(t,e,a){"use strict";var n=a("afb2"),s=a.n(n);s.a},afb2:function(t,e,a){},b893:function(t,e,a){"use strict";var n=a("dbfe"),s=a.n(n);s.a},c842:function(t,e,a){"use strict";var n=a("3772"),s=a.n(n);s.a},dbfe:function(t,e,a){}});
//# sourceMappingURL=app.808e8530.js.map