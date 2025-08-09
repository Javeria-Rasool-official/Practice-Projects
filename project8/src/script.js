let tab=document.querySelector(".info");
let share=document.querySelector(".share");
let arrow=document.querySelector(".arrow");
let first=document.querySelector(".first");
let figure=document.querySelector(".aunty");
let content=document.querySelector(".content");
let images=document.querySelector(".img");
let isopen=false;

share.addEventListener("click", () => {
  isopen=!isopen;
  if(isopen){
  console.log('true')
  tab.classList.add("bg-blue-dark-gray","w-full", "pt-4", "rounded-b-xl");
  first.classList.remove('hidden')
  images.forEach(img => {
    img.classList.remove("hidden")
  });
  figure.classList.add('hidden')
  content.classList.add('hidden')
  }else{
    console.log('false')
    tab.classList.remove("bg-blue-dark-gray","w-full", "pt-4", "rounded-b-xl");
    first.classList.add('hidden')
    images.classList.add('hidden')
    figure.classList.remove('hidden')
    content.classList.remove('hidden')
    
  }
});