(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[813],{713:function(e,t,r){"use strict";r.d(t,{Y5:function(){return o},mv:function(){return c},uV:function(){return p},wr:function(){return u}});var n=r(861),a=r(757),i=r.n(a),s=r(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"93c5c174fe2da474d1c166441f51e711"};var u=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},645:function(e,t,r){"use strict";r.d(t,{e:function(){return v}});var n="MovieList_movieList__uFrOZ",a=r(7),i=r.n(a),s="MovieListItem_movieItem__mZL09",u="MovieListItem_movieLink__QdmjJ",c=r(689),o=r(87),p=r(184),f=function(e){var t=e.id,r=e.title,n=(0,c.TH)();return(0,p.jsx)("li",{className:s,children:(0,p.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:n},className:u,children:(0,p.jsx)("h3",{children:r})})},t)};f.propTypesropTypes={id:i().number.isRequired,title:i().string.isRequired};var v=function(e){var t=e.movies;return(0,p.jsx)("ul",{className:n,children:t.map((function(e){var t=e.id,r=e.title;return(0,p.jsx)(f,{id:t,title:r},t)}))})}},836:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),i=r(757),s=r.n(i),u=r(791),c="Movies_inputWrapper__hwTjJ",o="Movies_input__aaq4I",p=r(713),f=r(645),v=r(87),l=r(184),m=function(){var e,t=(0,u.useState)([]),r=(0,a.Z)(t,2),i=r[0],m=r[1],d=(0,v.lr)(),h=(0,a.Z)(d,2),_=h[0],y=h[1],x=null!==(e=_.get("query"))&&void 0!==e?e:"Friends",b=(0,u.useCallback)((0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.trim()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,p.mv)(x);case 5:t=e.sent,m(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),[x]);return(0,u.useEffect)((function(){b()}),[b]),(0,l.jsxs)("div",{children:[(0,l.jsx)("form",{className:c,children:(0,l.jsx)("input",{type:"text",name:"movie",className:o,placeholder:"Search movies...",onChange:function(e){return t=e.target.value,void y(""!==t?{query:t}:{});var t}})}),(0,l.jsx)(f.e,{movies:i})]})}},888:function(e,t,r){"use strict";var n=r(47);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,s){if(s!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=813.ac86f725.chunk.js.map