"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[203],{713:function(t,e,r){r.d(e,{Hx:function(){return p},Y5:function(){return o},mv:function(){return u},uV:function(){return f},wr:function(){return i}});var n=r(861),a=r(757),s=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"93c5c174fe2da474d1c166441f51e711"};var i=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},510:function(t,e,r){r.d(e,{e:function(){return v}});var n=r(689),a=r(87),s=r(206),c="MovieList_list__yjDCC",i="MovieList_li__kXkJl",u="MovieList_links__joP2W",o="MovieList_card__j2UPv",f="MovieList_img__Tmz2C",p=r(184),v=function(t){var e=t.movies,r=(0,n.TH)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("ul",{className:c,children:e.map((function(t){var e=t.id,n=t.title,c=t.poster_path;return(0,p.jsx)("li",{className:i,children:(0,p.jsx)(a.rU,{className:u,to:"/movies/".concat(e),state:{from:r},children:(0,p.jsxs)("div",{className:o,children:[c?(0,p.jsx)("img",{className:f,src:"https://image.tmdb.org/t/p/w200".concat(c),alt:n}):(0,p.jsx)(s.ofX,{size:200}),n]})})},e)}))}),(0,p.jsx)(n.j3,{})]})}},203:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(510),o=r(713),f=r(154),p=r(184),v=function(t){var e=t.isLoading;return(0,p.jsx)(f.Jv,{visible:e,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{display:"block",marginTop:"5px",marginLeft:"auto",marginRight:"auto"}})},l=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],s=e[1],f=(0,i.useState)(!1),l=(0,a.Z)(f,2),d=l[0],h=l[1],m=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,(0,o.wr)();case 4:e=t.sent,console.log(e),s(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:h(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){m()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{style:{textAlign:"center"},children:"Trending Now"}),d?(0,p.jsx)(v,{}):(0,p.jsx)(u.e,{movies:r})]})}}}]);
//# sourceMappingURL=203.46478e17.chunk.js.map