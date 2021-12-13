import{e as o,f as d,r as i,c as p,u as l,o as v}from"./vendor.90b54a04.js";const C=o({setup(m){let u=d([{title:"\u8D2D\u7269",start:"2021-11-11 10:00:00",end:"2021-11-11 12:00:00",editable:!0},{title:"\u5B66\u4E60",start:"2021-11-15 08:00:00",end:"2021-11-15 16:00:00"}]),r=e=>{let t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"\u5403\u996D"};u.value.push(t),console.log(e)},a=e=>{let t=document.createElement("div"),n=e.timeText.split(" - "),c=n[0].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6",""),s=n[1].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6","");return t.innerHTML=`
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>\u5F00\u59CB\u65F6\u95F4: ${c}</div>
         <div>\u7ED3\u675F\u65F6\u95F4: ${s}</div>
         <div>\u6807\u9898: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=i("cc-calendar");return v(),p(n,{events:l(u),eventContent:l(a),onDateClick:l(r)},null,8,["events","eventContent","onDateClick"])}}});export{C as default};
