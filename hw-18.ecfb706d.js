let t=async()=>(await fetch("http://localhost:3000/students")).json(),e=async t=>{let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};return(await fetch("http://localhost:3000/students",e)).json()},n=t=>t.map(({surname:t,name:e,birthdate:n,skills:a,image:s,id:l},i)=>`<li class="item" id="${l}">
        <span class="item-span">${i+1}</span> <!-- \u{434}\u{43B}\u{44F} \u{432}\u{456}\u{437}\u{443}\u{430}\u{43B}\u{44C}\u{43D}\u{43E}\u{433}\u{43E} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{430} -->
        <img src="${s}" alt="${e}" class="image">
        <h2 class="title">${n}</h2>
        <p class="calories">${t}</p>
        <p class="description">${e}</p>
        <p class="price">${a}</p>
        <div class="btn_box">
          <button type="button" class="btn btn-delete" data-action="Delete">Delete It</button>
          <button type="button" class="btn btn-edit" data-action="Edit">Edit this card</button>
        </div>
      </li>`).join(""),a=async t=>(await fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"})).json(),s=async(t,e)=>{let n={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};return(await fetch(`http://localhost:3000/students/${t}`,n)).json()},l=document.querySelector(".js-list"),i=document.querySelector(".modal_form"),o=document.querySelector(".bakdrop"),u=document.querySelector(".open_modal"),r=null;function c(){o.style.opacity="1",o.style.pointerEvents="auto"}function d(){o.style.opacity="0",o.style.pointerEvents="none"}u.addEventListener("click",()=>{r=null,i.reset(),c()}),i.addEventListener("submit",a=>{a.preventDefault();let{surname:o,name:u,birthdate:c,skills:m,image:h}=a.target.elements,p={surname:o.value.trim(),name:u.value.trim(),birthdate:c.value.trim(),skills:m.value.trim(),image:h.value.trim()};null===r?e(p).then(t).then(t=>{l.innerHTML=n(t),i.reset(),d()}):s(r,p).then(()=>t()).then(t=>{l.innerHTML=n(t),i.reset(),d()})}),l.addEventListener("click",e=>{if("Delete"===e.target.dataset.action&&a(e.target.closest("li").id).then(t).then(t=>{l.innerHTML=n(t)}),"Edit"===e.target.dataset.action){let n=e.target.closest("li").id;t().then(t=>{let e=t.find(t=>t.id==n);e&&(i.elements.surname.value=e.surname||"",i.elements.name.value=e.name||"",i.elements.birthdate.value=e.birthdate||"",i.elements.skills.value=e.skills||"",i.elements.image.value=e.image||"",r=e.id,c())}).catch(t=>{console.error("Помилка при отриманні даних:",t)})}}),t().then(t=>{l.innerHTML=n(t)});
//# sourceMappingURL=hw-18.ecfb706d.js.map
