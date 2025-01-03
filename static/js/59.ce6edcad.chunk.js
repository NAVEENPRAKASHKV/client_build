"use strict";(self.webpackChunkapplication=self.webpackChunkapplication||[]).push([[59],{5614:(e,l,s)=>{s.d(l,{e:()=>a});const a={display:"flex",margin:"0 auto",height:"24px",justifyContent:"center",alignItem:"center"}},6924:(e,l,s)=>{s.d(l,{Z:()=>a});const a=e=>{const{brand:l,name:s,price:a,description:t,discount:r,stock:o}=e,d={},n=e=>null===e||void 0===e||"string"===typeof e&&""===e.trim();return n(l)&&(d.brand="Brand is required"),n(s)&&(d.name="Name is required"),(n(a)||isNaN(a)||a<1)&&(d.price="Price should be a number greater than 0"),n(t)&&(d.description="Description is required"),(n(r)||isNaN(r)||r<0||r>100)&&(d.discount="Discount should be a number between 0 and 100"),(n(o)||isNaN(o)||o<0)&&(d.stock="Stock should be a number greater than or equal to 0"),d}},9618:(e,l,s)=>{s.r(l),s.d(l,{default:()=>b});var a=s(5043),t=s(5475),r=s(184),o=s(423),d=s(3003),n=s(3402),c=s(1481),i=s(3768),p=s(3689),u=s(5614),x=s(2485),m=(s(9686),s(6924)),h=s(579);const b=()=>{const[e,l]=(0,a.useState)({name:"",description:"",discount:"",price:"",brand:"",stock:""}),[s,b]=(0,a.useState)(!1),[f,g]=(0,a.useState)(""),[j,N]=(0,a.useState)([]),[v,w]=(0,a.useState)(""),y=(0,d.wA)(),{categories:k}=(0,d.d4)((e=>e.category)),{successMessage:C,errorMessage:S,loader:R}=(0,d.d4)((e=>e.product)),[F,P]=(0,a.useState)(null),[D,L]=(0,a.useState)(null),[O,I]=(0,a.useState)(!1),[U,A]=(0,a.useState)([]),[B,q]=(0,a.useState)([]);(0,a.useEffect)((()=>{y((0,n.uc)({perPage:"",page:"",searchValue:""}))}),[]),(0,a.useEffect)((()=>{N(k)}),[k]),(0,a.useEffect)((()=>{C&&(i.oR.success(C),y((0,c.Tn)()),l({name:"",description:"",discount:"",price:"",brand:"",stock:""}),q([]),A([]),g("")),S&&(i.oR.error(S),y((0,c.Tn)()))}),[S,C]);const z=s=>{l({...e,[s.target.name]:s.target.value})};return(0,h.jsxs)("div",{className:"px-2 lg:pr-7 ",children:[(0,h.jsx)("div",{className:"my-5",children:(0,h.jsx)("h1",{className:"text-xl font-bold",children:"Add Product"})}),(0,h.jsxs)("div",{className:"w-full p-4 bg-slate-600 rounded-md",children:[(0,h.jsxs)("div",{className:"flex justify-between items-center pb-4",children:[(0,h.jsx)("h1",{className:"text-white text-xl font-semibold",children:"Product Details"}),(0,h.jsx)(t.N_,{to:"/seller/dashboard/all-product",className:"bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2",children:"All Products"})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("form",{onSubmit:l=>{l.preventDefault();const s=(0,m.Z)(e);if(Object.keys(s).length>0){for(let e of Object.values(s))i.oR.error(e);return}if(!U||0===U.length)return void i.oR.error("Image of the product is mandatory");const a=new FormData;a.append("brand",e.brand),a.append("description",e.description),a.append("discount",e.discount),a.append("name",e.name),a.append("price",e.price),a.append("stock",e.stock),a.append("category",f),a.append("shopName","EasyShop");for(let e=0;e<U.length;e++)a.append("images",U[e]);y((0,c.ye)(a))},children:[(0,h.jsxs)("div",{className:"flex flex-col mb-3 md:flex-row gap-4 w-full text-white",children:[(0,h.jsxs)("div",{className:"flex flex-col w-full gap-1",children:[(0,h.jsx)("label",{htmlFor:"name",children:"Product Name"}),(0,h.jsx)("input",{className:"px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black ",onChange:z,value:e.name,type:"text",name:"name",id:"name",placeholder:"Product Name"})]}),(0,h.jsxs)("div",{className:"flex flex-col w-full gap-1",children:[(0,h.jsx)("label",{htmlFor:"brand",children:"Product Brand"}),(0,h.jsx)("input",{className:"px-4 py-2 focus:border-indigo-500 outline-none text-black border border-slate-700 rounded-md ",onChange:z,value:e.brand,type:"text",name:"brand",id:"brand",placeholder:"Brand Name"})]})]}),(0,h.jsxs)("div",{className:"flex flex-col mb-3 md:flex-row gap-4 w-full text-white",children:[(0,h.jsxs)("div",{className:"flex flex-col w-full gap-1 relative",children:[(0,h.jsx)("label",{htmlFor:"category",children:"Category"}),(0,h.jsx)("input",{readOnly:!0,onClick:()=>b(!s),className:"px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black",onChange:z,value:f,type:"text",id:"category",placeholder:"--select category--"}),(0,h.jsxs)("div",{className:`absolute top-[100%] bg-lime-900 w-full transition-all ${s?"scale-100":"scale-0"} `,children:[(0,h.jsx)("div",{className:"w-full px-4 py-2 fixed",children:(0,h.jsx)("input",{value:v,onChange:e=>{const l=e.target.value;if(w(l),l){let e=j.filter((e=>e.categoryName.toLowerCase().includes(l.toLowerCase())));N(e)}else N(k)},className:"px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-100 rounded-md text-[#d0d2d6] overflow-hidden",type:"text",placeholder:"search"})}),(0,h.jsx)("div",{className:"pt-14"}),(0,h.jsx)("div",{className:"flex justify-start items-start flex-col h-[200px] overflow-x-scrool",children:j.map(((e,l)=>(0,h.jsx)("span",{className:`px-4 py-2 hover:bg-black hover:text-white hover:shadow-lg w-full cursor-pointer ${f===e.categoryName&&"bg-indigo-700"}`,onClick:()=>{b(!1),g(e.categoryName),w(""),N(k)},children:e.categoryName},e._id)))})]})]}),(0,h.jsxs)("div",{className:"flex flex-col w-full gap-1",children:[(0,h.jsx)("label",{htmlFor:"stock",children:"Product Stock"}),(0,h.jsx)("input",{className:"px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black",onChange:z,value:e.stock,type:"number",name:"stock",id:"stock",placeholder:"Stock"})]})]}),(0,h.jsxs)("div",{className:"flex flex-col mb-3 md:flex-row gap-4 w-full text-white",children:[(0,h.jsxs)("div",{className:"flex flex-col w-full gap-1",children:[(0,h.jsx)("label",{htmlFor:"price",children:"Price"}),(0,h.jsx)("input",{className:"px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black",onChange:z,value:e.price,type:"number",name:"price",id:"price",placeholder:"price"})]}),(0,h.jsxs)("div",{className:"flex flex-col w-full gap-1",children:[(0,h.jsx)("label",{htmlFor:"discount",children:"Discount"}),(0,h.jsx)("input",{className:"px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black",onChange:z,value:e.discount,type:"number",name:"discount",id:"discount",placeholder:"discount by %"})]})]}),(0,h.jsxs)("div",{className:"flex flex-col w-full gap-1 mb-5",children:[(0,h.jsx)("label",{htmlFor:"description",className:"text-[#d0d2d6]",children:"Description"}),(0,h.jsx)("textarea",{className:"px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black",onChange:z,value:e.description,name:"description",id:"description",placeholder:"Description",cols:"10",rows:"4"})]}),(0,h.jsxs)("div",{className:"grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  gap-2 mb-5",children:[B.map(((e,l)=>(0,h.jsxs)("div",{className:"h-[180px] w-[180px] relative",children:[(0,h.jsx)("label",{htmlFor:l,className:"cursor-pointer",children:(0,h.jsx)("img",{className:"w-full h-full rounded-sm",src:e.url,alt:""})}),(0,h.jsx)("input",{onChange:e=>((e,l)=>{if(e){let s=B,a=U;a[l]=e,s[l]={url:URL.createObjectURL(e)},A([...a]),q([...B])}})(e.target.files[0],l),type:"file",id:l,className:"hidden"}),(0,h.jsx)("span",{onClick:()=>(e=>{const l=U.filter(((l,s)=>s!==e)),s=B.filter(((l,s)=>s!==e));A(l),q(s)})(l),className:"absolute right-4  top-2 z-50 w-[20px] h-[20px] rounded-full bg-white hover:bg-red-500 flex justify-center items-center cursor-pointer",children:(0,h.jsx)(o.W0M,{})})]}))),(0,h.jsxs)("label",{htmlFor:"image",className:"flex flex-col justify-center items-center h-[180px] w-[180px] bg-white cursor-pointer",children:[(0,h.jsx)("span",{children:(0,h.jsx)(r.eWf,{})}),(0,h.jsx)("span",{children:"Select Image"})]}),(0,h.jsx)("input",{type:"file",id:"image",className:"hidden",accept:"image/*",onChange:e=>{const l=e.target.files;l.length>0&&(L(URL.createObjectURL(l[0])),I(!0))}})]}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("button",{disabled:R,className:"bg-red-600 py-2 px-3 rounded-lg text-white font-bold",children:R?(0,h.jsx)(p.A,{color:"#fff",cssOverride:u.e}):"Add Category"})}),(0,h.jsx)("div",{children:O&&(0,h.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:(0,h.jsxs)("div",{className:"bg-white rounded-lg p-6 w-full max-w-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Crop Image"}),(0,h.jsx)(x.I,{className:"w-full h-64",src:D,aspectRatio:1,viewMode:1,guides:!0,scalable:!0,cropBoxResizable:!0,onInitialized:e=>P(e)}),(0,h.jsxs)("div",{className:"mt-4 flex justify-end space-x-3",children:[(0,h.jsx)("button",{className:"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600",onClick:e=>{if(e.preventDefault(),F){F.getCroppedCanvas().toBlob((e=>{if(e){const l=new File([e],"cropped-image.jpg",{type:"image/jpeg"});A([...U,l]);const s=URL.createObjectURL(l);q([...B,{url:s}]),I(!1)}}))}},children:"Crop"}),(0,h.jsx)("button",{className:"px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600",onClick:()=>I(!1),children:"Cancel"})]})]})})})]})})]})]})}}}]);
//# sourceMappingURL=59.ce6edcad.chunk.js.map