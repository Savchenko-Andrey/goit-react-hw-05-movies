"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[87],{9438:function(n,e,t){t.d(e,{H4:function(){return m},Ke:function(){return h},MB:function(){return d},fW:function(){return g}});var r=t(5861),c=t(7757),a=t.n(c),u=t(4569),i=t.n(u),o=t(2007),s=t.n(o),p=t(7596),f="59f693d244f239e6432663a796bc4a2e",l="https://api.themoviedb.org/3/",d=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(l,"trending/movie/week?api_key=").concat(f)).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(l,"movie/").concat(e,"?api_key=").concat(f)).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(a().mark((function n(e,t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(l,"movie/").concat(t,"/").concat(e,"?api_key=").concat(f,"&language=en-US&page=1")).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(l,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();h.propTypes={id:s().string.isRequired},m.propTypes={page:s().string.isRequired,id:s().string.isRequired},g.propTypes={query:s().string.isRequired}},3087:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,c,a,u,i=t(885),o=t(2791),s=t(6731),p=t(7689),f=t(9661),l=t(168),d=t(6444),h=d.ZP.ul(r||(r=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n"]))),m=d.ZP.li(c||(c=(0,l.Z)(["\n  :hover {\n    scale: 1.05;\n  }\n"]))),g=((0,d.ZP)(s.rU)(a||(a=(0,l.Z)([""]))),d.ZP.ul(u||(u=(0,l.Z)(["\n  display: flex;\n  grid-gap: 20px;\n"])))),x=t(9438),v=t(184);function y(){var n=(0,p.TH)(),e=(0,o.useState)([]),t=(0,i.Z)(e,2),r=t[0],c=t[1];return(0,o.useEffect)((function(){return(0,x.MB)().then((function(n){var e=n.data.results;c(e)})),function(){c([])}}),[]),(0,v.jsxs)(f.xu,{as:"main",display:"flex",flexDirection:"column",gridGap:"20px",children:[(0,v.jsx)(f.xu,{ml:"auto",children:(0,v.jsxs)(g,{children:[(0,v.jsx)(f.Gm,{to:"/",children:"Home"}),(0,v.jsx)(f.Gm,{to:"/movies",children:"Movies"})]})}),(0,v.jsx)(f.xu,{children:(0,v.jsx)(h,{children:r.map((function(e){var t=e.id,r=e.original_title,c=e.poster_path;return(0,v.jsx)(m,{children:(0,v.jsxs)(s.rU,{to:"movies/".concat(t),state:{from:n},children:[(0,v.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w400".concat(c):"https://dummyimage.com/400x600/000/0011ff&text=Not+find+photo",alt:r}),(0,v.jsx)("p",{children:r})]})},t)}))})})]})}}}]);
//# sourceMappingURL=87.96f264a9.chunk.js.map