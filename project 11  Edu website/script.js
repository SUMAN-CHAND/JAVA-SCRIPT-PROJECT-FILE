console.log("Welcome to Js")
let humbhar=document.querySelector('.humbhar');
let navbar=document.querySelector('.navbar');
let navList=document.querySelector('.nav-list');
let search=document.querySelector('.search');

humbhar.addEventListener("click",()=>{
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
    search.classList.toggle('v-class-resp');
})