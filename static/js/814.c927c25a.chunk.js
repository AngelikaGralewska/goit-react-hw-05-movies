"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[814],{713:function(e,t,n){n.d(t,{Jh:function(){return v},M1:function(){return f},TP:function(){return o},wr:function(){return p},z1:function(){return s}});var r=n(861),a=n(687),c=n.n(a),u=n(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="0d289c08cd20965dbf909e0560865242",s=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"$?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},163:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(687),u=n.n(c),i=n(791),s=n(713),o=n(689),p=n(555),f=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,o.UO)().movieId,d=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Jh)(t).then((function(e){return c(e)}));case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){d(v)}),[v]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:p.Z.reviewsContainer,children:n.length?n.map((function(e){return(0,f.jsxs)("div",{children:[(0,f.jsx)("h5",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)})):(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})})})})})}},555:function(e,t){t.Z={reviewsContainer:"MovieDetailsPages_reviewsContainer__1lce3",castContainer:"MovieDetailsPages_castContainer__W7x11",actorImage:"MovieDetailsPages_actorImage__uU3zV",actotCard:"MovieDetailsPages_actotCard__0ZKEZ"}}}]);
//# sourceMappingURL=814.c927c25a.chunk.js.map