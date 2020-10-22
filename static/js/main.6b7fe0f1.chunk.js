(this.webpackJsonppagination_using_react=this.webpackJsonppagination_using_react||[]).push([[0],{17:function(e,t,a){},20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(3),i=a.n(o),s=a(5),u=a(1),m=function(e){var t=e.posts;return e.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("ul",{className:"list-group mb-4"},t.map((function(e,t){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.title)})))},f=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=e.currentPage,l=e.setCurrentPage,o=[],i=1;i<=Math.ceil(a/t);i++)o.push(i);return r.a.createElement("nav",{className:"d-flex justify-content-center"},r.a.createElement("ul",{className:"pagination"},1===c?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{onClick:function(){return l(1)},className:"page-link"},r.a.createElement("i",{class:"fas fa-angle-double-left"})),r.a.createElement("li",{onClick:function(){return l(c-1)},className:"page-link disabled"},r.a.createElement("i",{class:"fas fa-chevron-left"}))),o.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"/#",className:"page-link"},e))})),Math.floor(a/t)===c?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{onClick:function(){return l(c+1)},className:"page-link"},r.a.createElement("i",{class:"fas fa-chevron-right"})),r.a.createElement("li",{onClick:function(){return l(Math.floor(a/t))},className:"page-link"},r.a.createElement("i",{class:"fas fa-angle-double-right"})))))},d=a(7),p=a.n(d),h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),d=o[0],h=o[1],g=Object(n.useState)(1),b=Object(u.a)(g,2),E=b[0],v=b[1],y=Object(n.useState)(10),k=Object(u.a)(y,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,p.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,c(t.data),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=E*k,w=j-k,O=a.slice(w,j);return r.a.createElement("div",{className:"container mt-5 "},r.a.createElement("h1",{className:"text-primary mb-3 d-flex justify-content-center"},"My Blog"),r.a.createElement(m,{posts:O,loading:d}),r.a.createElement(f,{postsPerPage:k,totalPosts:a.length,paginate:function(e){return v(e)},currentPage:E,setCurrentPage:v}))},g=a(19);function b(e){var t=e.data,a=t[0]&&Object.keys(t[0]);return r.a.createElement("table",{cellPadding:0,cellSpacing:0},r.a.createElement("thead",null,r.a.createElement("tr",null,t[0]&&a.map((function(e){return r.a.createElement("th",null,e)})))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",null,a.map((function(t){return r.a.createElement("td",null,e[t])})))}))))}var E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],f=o[1],d=Object(n.useState)(["state"]),h=Object(u.a)(d,2),E=h[0],v=h[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://devmentor.live/api/examples/contacts?api_key=b7c58b");case 2:t=e.sent,c(t.data.slice(0,15));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y,k=a[0]&&Object.keys(a[0]);return console.log(k),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:m,onChange:function(e){return f(e.target.value)}}),k&&k.map((function(e){return r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:E.includes(e),onChange:function(t){var a=E.includes(e);v((function(t){return a?t.filter((function(t){return t!==e})):[].concat(Object(g.a)(t),[e])}))}}),e)}))),r.a.createElement("div",null,r.a.createElement(b,{data:(y=a,y.filter((function(e){return E.some((function(t){return e[t].toString().toLowerCase().indexOf(m.toLowerCase())>-1}))})))})))},v=(a(43),function(e){var t=e.label,a=e.content,n=e.active,c=e.handle;return r.a.createElement("div",{className:"fold"},r.a.createElement("button",{className:"fold_trigger ".concat(n?"open":""),onClick:c},t),r.a.createElement("div",{key:"content",className:"fold_content ".concat(n?"open":"")},n?a:null))}),y=[{label:"Seriously, Don't Use Icon Fonts",content:'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.'},{label:"Screen Readers Actually Read That Stuff",content:'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.'},{label:"They Fail Poorly and Often",content:'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.'},{label:"They're a Nightmare if You're Dyslexic",content:"Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience."},{label:"There's Already a Better Way",content:"SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing."}],k=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"accordion"},y.map((function(e,t){return r.a.createElement(v,Object.assign({key:"".concat(t,"-").concat(e.title)},e,{handle:function(){return function(e){var t=a===e?-1:e;c((function(){return t}))}(t)},active:t===a}))})))},j=function(e){var t=e.bgcolor,a=e.completed,n={height:"100%",width:"".concat(a,"%"),backgroundColor:t,transition:"width 1s ease-in-out",borderRadius:"inherit",textAlign:"right"},c={display:"flex",justifyContent:"space-between",color:t};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:c},r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"75%")),r.a.createElement("div",{style:{height:20,width:"100%",backgroundColor:"#e0e0de",borderRadius:50}},r.a.createElement("div",{style:n},r.a.createElement("span",{style:{padding:5,color:"white",fontWeight:"bold"}},"".concat(a,"%")))))},w=function(){return r.a.createElement("div",null,[{bgcolor:"#6a1b9a",completed:60},{bgcolor:"#6a1b9a",completed:80}].map((function(e,t){return r.a.createElement(j,{key:t,bgcolor:e.bgcolor,completed:e.completed})})))},O=(a(17),function(e){var t=e.starId,a=e.rating,n=e.onMouseEnter,c=e.onMouseLeave,l=e.onClick,o="star-rating-blank";return a&&a>=t&&(o="star-rating-filled"),console.warn(n,c),r.a.createElement("div",{className:"star",onMouseEnter:n,onMouseLeave:c,onClick:l},r.a.createElement("svg",{height:"55px",width:"53px",class:o,viewBox:"0 0 25 23","data-rating":"1"},r.a.createElement("polygon",{"stroke-width":"0",points:"9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"})))}),x=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(u.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){}),[a,i]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"flex-container"},[1,2,3,4,5].map((function(e,t){return r.a.createElement(O,{key:t,starId:t,rating:i||a,onMouseEnter:function(){return s(t)},onMouseLeave:function(){return s(0)},onClick:function(){return c(t)}})}))))},S=(a(44),function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement(h,null),r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(w,null),r.a.createElement(x,null))});l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6b7fe0f1.chunk.js.map