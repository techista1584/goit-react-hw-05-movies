"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[106],{713:function(t,e,r){r.d(e,{Hx:function(){return p},Y5:function(){return o},mv:function(){return u},uV:function(){return f},wr:function(){return i}});var n=r(861),a=r(757),s=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"93c5c174fe2da474d1c166441f51e711"};var i=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},106:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(689),o=r(713),f={castList:"CastListItem_castList__z8-GV"},p=r(184),l=function(t){var e=t.profilePath,r=t.originalName,n=t.name;return(0,p.jsx)("div",{className:f.castListContainer,children:(0,p.jsxs)("li",{className:f.castList,children:[(0,p.jsx)("img",{className:f.castListImage,width:"200",height:"300",src:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:r}),(0,p.jsx)("p",{className:f.castListName,children:n})]})})},v="CastList_castListContainer__n+x8D",h=function(){var t=(0,u.UO)().movieId,e=(0,i.useState)([]),r=(0,a.Z)(e,2),s=r[0],f=r[1],h=(0,i.useCallback)((0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.uV)(t);case 3:r=e.sent,f(Array.isArray(r)?r:[]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return(0,i.useEffect)((function(){h()}),[h]),(0,p.jsx)(p.Fragment,{children:0!==s.length?(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Movie Cast"}),(0,p.jsx)("ul",{className:v,children:s.map((function(t){var e=t.id,r=t.profile_path,n=t.original_name,a=t.name;return(0,p.jsx)(l,{id:e,profilePath:r,originalName:n,name:a},e)}))})]}):(0,p.jsx)("div",{children:"We don't have any cast for this movie."})})}}}]);
//# sourceMappingURL=106.e7693652.chunk.js.map