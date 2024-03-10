const menuBar = document.querySelector(".menu-button");
const links = document.querySelectorAll(".website-navigation-section nav a")
const body = document.querySelector("body");
const guage =  document.querySelector(".guage");



menuBar.addEventListener("click", openMenuBar);

function openMenuBar(){
    
}


// For showing the scroll length of the page when the user scrolls
window.addEventListener("scroll", ()=>{
    let grossWindowHeight = Number(body.scrollHeight); // 6405  8386 //This is the gross height of the body element in the page in pixels.
    let currentScrollHeight = Number(window.scrollY); // 5764  7745 //This is the current scroll height as we keep scrolling, it would keep updating

    // console.log(body.scrollHeight);
    // console.log(window.scrollY);

    let realHeight = Number(grossWindowHeight - 641) ; //This is the height after we subtract the constant value of 641 pixel. This is the descripancy betwen the body's height and the current scroll height. We did this in order to be able to calculate the percentage of the scrolling.

    // console.log(realHeight);
    let percentage = (currentScrollHeight/realHeight) * 100;
    console.log(percentage);
    guage.style.width = `${percentage}%`;
//    console.log(yay)
})