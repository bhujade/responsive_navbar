let close = document.querySelector(".close-button");
let open = document.querySelector(".menu-button");
let first = document.querySelector(".first");



close.addEventListener("click",()=>{
    console.log("clicked")
    first.style.display = "none";
})

open.addEventListener("click",()=>{
    console.log("clicked")
    first.style.display = "flex";
})

