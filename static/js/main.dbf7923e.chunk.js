(this.webpackJsonptabs=this.webpackJsonptabs||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),r=s(5),l=s.n(r),i=s(4),x=s.n(i),m=s(6),j=s(2),o=function(e){var t=e.dates,s=e.title,n=e.duties,r=e.company;return Object(c.jsx)(a.a.Fragment,{children:Object(c.jsxs)("div",{className:"mt-12 lg:mt-0",children:[Object(c.jsx)("h1",{className:"text-sm sm:text-xl text-gray-600",children:s}),Object(c.jsx)("h3",{className:"text-xs sm:text-lg py-1 px-1 sm:px-4 bg-gray-300 rounded w-20 sm:w-32 text-center font-semibold text-gray-600 mt-3",children:r}),Object(c.jsx)("h5",{className:"text-gray-500 mt-3 text-xs sm:text-sm",children:t}),Object(c.jsx)("div",{className:"mt-6",children:n.map((function(e,t){return Object(c.jsxs)("div",{className:"flex mt-4",children:[Object(c.jsx)("h1",{className:"font-extrabold text-clr1 mt-4 text-xs sm:text-base",children:">>"}),Object(c.jsx)("p",{className:"text-xs sm:text-sm lg:text-base text-gray-500 font-medium ml-8",children:e})]},t)}))})]})})},d=function(){return Object(c.jsx)(a.a.Fragment,{children:Object(c.jsx)("h1",{className:"text-center mt-28 text-5xl font-bold",children:"Loading..."})})},b=function(e){var t=e.companies,s=e.value,n=e.setValue;return console.log(t),Object(c.jsx)(a.a.Fragment,{children:Object(c.jsx)("div",{className:"flex justify-evenly w-full max-w-xs mx-auto lg:flex-col",children:t.map((function(e,t){return Object(c.jsx)("button",{type:"button",onClick:function(){return n(t)},className:"tab ".concat(t===s&&"tab-active"),children:e.company},e.id)}))})})};s(13);var u=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),s=t[0],r=t[1],l=Object(n.useState)([]),i=Object(j.a)(l,2),u=i[0],h=i[1],O=Object(n.useState)(0),f=Object(j.a)(O,2),p=f[0],g=f[1],v=function(){var e=Object(m.a)(x.a.mark((function e(){var t,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,console.log(s),h(s),r(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){v()}),[]),s)return Object(c.jsx)(d,{});var y=u[p],N=y.company,w=y.dates,k=y.duties,F=y.title;return Object(c.jsx)(a.a.Fragment,{children:Object(c.jsxs)("div",{className:"mx-auto w-11/12 max-w-5xl my-14",children:[Object(c.jsx)("h2",{className:"text-2xl sm:text-4xl text-center tracking-wider font-bold text-gray-800",children:"Experience"}),Object(c.jsx)("div",{className:"flex justify-center",children:Object(c.jsx)("div",{className:"h-1 w-16 sm:w-20 bg-clr1 my-3"})}),Object(c.jsxs)("div",{className:"mt-8 lg:flex lg:justify-between",children:[Object(c.jsx)("div",{children:Object(c.jsx)(b,{companies:u,value:p,setValue:g})}),Object(c.jsx)("div",{className:"px-6 lg:ml-4 lg:mt-6",children:Object(c.jsx)(o,{company:N,dates:w,duties:k,title:F})})]}),Object(c.jsx)("div",{className:"flex justify-center items-center mt-8",children:Object(c.jsx)("div",{className:"bg-clr1 text-white py-1 text-xs sm:text-base px-6 sm:px-10 rounded font-semibold hover:bg-blue-300 hover:text-gray-500 shadow-md transition ease-in-out duration-500 cursor-pointer",children:"MORE INFO"})})]})})};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dbf7923e.chunk.js.map