const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".side-bar");
menuBtn.onclick = function(){
    sideBar.classList.add("active");
}
closeBtn.onclick = function(){
    sideBar.classList.remove("active");
}





//<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
//<g fill="#fcc419" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path></g></g>
//</svg>