"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{477:function(t,n,e){e.d(n,{Jh:function(){return l},M1:function(){return f},TP:function(){return s},wr:function(){return p},z1:function(){return o}});var r=e(861),a=e(687),c=e.n(a),u=e(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="0d289c08cd20965dbf909e0560865242",o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"$?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits$?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews$?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},266:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(861),a=e(439),c=e(687),u=e.n(c),i=e(791),o=e(689),s=e(87),p=e(477),f=e(184);function l(){var t=(0,o.TH)(),n=(0,i.useState)([]),e=(0,a.Z)(n,2),c=e[0],l=e[1],v=function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.wr)().then((function(t){return l(t)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){v()}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:c.map((function(n){return(0,f.jsxs)(s.rU,{to:"/movies/".concat(n.id),state:{location:t},children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path," "),alt:n.title}),(0,f.jsx)("p",{children:n.title?n.title:" No information"})]},n.id)}))})})})}}}]);
//# sourceMappingURL=266.1d3afeda.chunk.js.map