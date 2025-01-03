"use strict";(self.webpackChunkapplication=self.webpackChunkapplication||[]).push([[196],{7812:(e,s,r)=>{r.d(s,{A:()=>l});r(5043);var a=r(579);const l=e=>{let{message:s,SetModalClose:r,confimFunction:l}=e;return(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Confirmation"}),(0,a.jsx)("p",{className:"text-sm text-gray-600 mb-6",children:s}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)("button",{onClick:()=>{r(!0)},className:"px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300",children:"Cancel"}),(0,a.jsx)("button",{onClick:()=>{l(),r(!0)},className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",children:"Confirm"})]})]})})}},2419:(e,s,r)=>{r.d(s,{A:()=>t});r(5043);var a=r(6720),l=r(579);const t=e=>{let{pageNumber:s,setPageNumber:r,totalItem:t,perPage:d,showItem:c}=e;const n=Math.ceil(t/d);let o=s;n-s<=c&&(o=n-c+1);let i=o<1?c:c+o;o<=0&&(o=1),i>n+1&&(i=n+1);return(0,l.jsxs)("ul",{className:"flex gap-3 items-center",children:[s>1&&(0,l.jsx)("li",{onClick:()=>r(s-1),className:"w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-400 text-black cursor-pointer hover:bg-indigo-400",children:(0,l.jsx)(a.U6K,{})}),(()=>{const e=[];for(let a=o;a<i;a++)e.push((0,l.jsx)("li",{onClick:()=>r(a),className:(s===a?"bg-green-600 text-white":"bg-slate-600 hover:bg-green-900 text-[#d0d2d6]")+" w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer",children:a},a));return e})(),s<n&&(0,l.jsx)("li",{onClick:()=>r(s+1),className:"w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-400 text-black cursor-pointer hover:bg-indigo-400",children:(0,l.jsx)(a.b0J,{})})]})}},8196:(e,s,r)=>{r.r(s),r.d(s,{default:()=>x});var a=r(5043),l=r(2419),t=r(397),d=r(3003),c=r(1365),n=r(3768),o=r(7812),i=r(579);const x=()=>{const[e,s]=(0,a.useState)(""),[r,x]=(0,a.useState)(1),[h,m]=(0,a.useState)(5),[u,p]=(0,a.useState)(!0),[g,b]=(0,a.useState)(""),j=(0,d.wA)(),{successMessage:y,errorMessage:f,loader:N,customers:v,totalCustomers:w}=(0,d.d4)((e=>e.customer));(0,a.useEffect)((()=>{const s={perPage:parseInt(h),page:parseInt(r),searchValue:e};j((0,c.ol)(s))}),[h,r,e,j]);return(0,a.useEffect)((()=>{y&&(n.oR.success(y),j((0,c.Tn)())),f&&(n.oR.success(f),j((0,c.Tn)()))}),[y,f,j]),(0,i.jsx)("div",{className:"px-2 lg:pr-7 my-6",children:(0,i.jsxs)("div",{className:"w-full  bg-white shadow-md rounded-md",children:[(0,i.jsxs)("div",{className:"h-14 bg-slate-600 rounded-t-md flex justify-between items-center px-4",children:[(0,i.jsxs)("select",{onChange:e=>m(parseInt(e.target.value)),className:"px-3 py-2 rounded font-semibold",children:[(0,i.jsx)("option",{value:"5",children:"5"}),(0,i.jsx)("option",{value:"10",children:"10"}),(0,i.jsx)("option",{value:"15",children:"15"})]}),(0,i.jsx)("input",{value:e,onChange:e=>s(e.target.value),className:"hidden md:block bg-white border border-gray-300 h-10 px-3 py-1 rounded focus:outline-none focus:border-blue-500",type:"text",placeholder:"Search"})]}),(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsxs)("table",{className:"table-auto w-full text-center border-collapse border border-gray-300",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"bg-gray-200",children:[(0,i.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"No"}),(0,i.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Image"}),(0,i.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Name"}),(0,i.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Email Id"}),(0,i.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Method"}),(0,i.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Block/UnBlock"})]})}),(0,i.jsx)("tbody",{children:v.map(((e,s)=>(0,i.jsxs)("tr",{className:"hover:bg-gray-100 h-[60px] border-t text-sm",children:[(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:s+1}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,i.jsx)("img",{src:(null===e||void 0===e?void 0:e.image)||"https://client.naveenprakash.in/images/user.png",alt:e.name,className:"w-12 h-12 rounded-full mx-auto"})}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.name}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.email}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.method}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,i.jsx)("div",{className:"flex justify-center gap-3",children:(0,i.jsx)("div",{onClick:()=>{b(e),p(!1)},className:"px-3 py-2 rounded-full hover:bg-blue-200 text-lg",children:e.isBlocked?(0,i.jsx)(t.k$A,{}):(0,i.jsx)(t.kwl,{})})})})]},e._id)))})]}),!u&&(0,i.jsx)("div",{children:(0,i.jsx)(o.A,{message:"Are you sure want block user",SetModalClose:p,confimFunction:()=>{const e=g._id;j((0,c.aj)(e))}})}),(0,i.jsx)("div",{className:"w-full flex justify-end mt-4 bottom-4 right-4",children:(0,i.jsx)(l.A,{pageNumber:r,setPageNumber:x,totalItem:w,perPage:h,showItem:3})})]})]})})}}}]);
//# sourceMappingURL=196.93c049c2.chunk.js.map