const addNote=document.querySelector(".add-note")
const section=document.querySelector("section")
addNote.addEventListener("click",()=>{
//     section.innerHTML+=`
//     <div class="note">
//     <div class="note-header">
//         <i class="fa-solid fa-floppy-disk " id="save"></i>
//         <i class="fa-solid fa-trash-can" id="delete"></i>
//     </div>
//     <textarea name="" id="" placeholder="Write note here"></textarea>
// </div>`
section.insertAdjacentHTML("beforeend",`
<div class="note">
<div class="note-header">
    <i class="fa-solid fa-floppy-disk " id="save"></i>
    <i class="fa-solid fa-spinner" id="load"></i>

    <i class="fa-solid fa-trash-can" id="delete"></i>
</div>
<textarea name="" id="" placeholder="Write note here"></textarea>
</div>`)
    

    
})
let storeTracking=0;

if(localStorage.length>0){
    storeTracking=Number(localStorage.getItem("trackingValue"))
}


section.addEventListener("click",(e)=>{ 
    
    if(e.target.id==="delete"){
      
        for(let i=0;i<localStorage.length;i++){
            if ( localStorage.getItem(localStorage.key(i))===e.target.parentElement.nextElementSibling.value){
                localStorage.removeItem(localStorage.key(i))
            }
        }
         e.target.parentElement.parentElement.
         innerHTML="" 

         
    }
    if(e.target.id==="save"){
        // const saveButton=document.querySelector(".note-header #save")
        // saveButton.style.display="none" 
        if(e.target.parentElement.nextElementSibling.value!==""){
             e.target.nextElementSibling.style.display="inline-block"
        e.target.style.display="none"
        setTimeout(()=>{
            e.target.nextElementSibling.style.display="none"
        e.target.style.display="inline-block"
        },500)
        localStorage.setItem(storeTracking,e.target.parentElement.nextElementSibling.value);
        storeTracking+=1;
        localStorage.setItem("trackingValue",storeTracking)
        }
       
    }
  
   
})
// console.log(localStorage.getItem(1))
for(let i=0;i<localStorage.length;i++){
    // console.log(localStorage.key(i))
    // console.log(localStorage.getItem(localStorage.key(i)))
    if(localStorage.key(i)!=="trackingValue"){
            section.innerHTML+=`
    <div class="note">
    <div class="note-header">
        <i class="fa-solid fa-floppy-disk " id="save"></i>
        <i class="fa-solid fa-spinner" id="load"></i>

        <i class="fa-solid fa-trash-can" id="delete"></i>
    </div>
    <textarea name="" id="" placeholder="Write note here">${localStorage.getItem(localStorage.key(i))}</textarea>
</div>`
    }

}

