let input=document.querySelector(".input-text")
let submit=document.querySelector("button")
let req=document.querySelector("form p");
let main=document.querySelector("main");
let box=document.querySelector(".box");
let dismiss=document.querySelector(".box button");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input.value=='' && !input.value.includes('@gmail.com')){
        console.log('empty')
        input.classList.add('error')
        req.classList.add('para')
    }else{
        console.log('ok')
        main.style.display='none'
        box.style.display='block'
    }
})
dismiss.addEventListener('click',()=>{
   
        box.style.display='none'
})
