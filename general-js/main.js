const menuBar = document.querySelector(".menu-button");
const links = document.querySelectorAll(".website-navigation-section nav a")
const body = document.querySelector("body");
const html = document.querySelector("html");
const guage =  document.querySelector(".guage");
const sideBar = document.querySelector(".side-bar");
const newsletterLink = document.querySelector(".newsletter-link");
const backDropDiv = document.querySelector(".back-drop-div");



// To open the menu bar at the navigation section
menuBar.addEventListener("click", ()=>{
    if(sideBar.style.display === "block"){
        sideBar.style.display = "none"
    } else {
        sideBar.style.display = "block";
    }
});

newsletterLink.addEventListener("click", ()=>{
    if(sideBar.style.display === "none"){
        sideBar.style.display = "block"
    } else {
        sideBar.style.display = "none";
    }
});

// Close the menu by clicking anypart of the body
// html.addEventListener("click", ()=>{
//     if(sideBar.style.display === "block"){
//         sideBar.style.display = "none";
//     }
// });



// Set Timeout for the menu when open
// if(sideBar.style.display === block){
//     setTimeout(() => {
//         sideBar.style.display = "none"
//     }, 2000);
// }




























// For adjusting the width of the top guage which indicates the level the user has scrolled to
let grossBodyHeight;
let currentScrollHeight;
let netBodyHeight;
let percentageOfPageScrolled;

window.addEventListener("scroll", ()=>{
    grossBodyHeight = Number(body.scrollHeight); // 6405  8386 
    // This gives the total scrollable height of the body element.

    currentScrollHeight = Number(window.scrollY); // 5764  7745 => These figures were used to get a constant(641), regardless of the height of the window, that 641px is constant.
    // This gives the current scroll height. It updates as we keep scrolling.

    netBodyHeight = Number(grossBodyHeight - 641) ; // This is the height after we subtract the constant value of 641 pixel. This(641) is the descripancy between the body's scrollable height and the current scroll height. We did this in order to be able to calculate the percentage of the height we have scrolled to.

    percentageOfPageScrolled = (currentScrollHeight/netBodyHeight) * 100;
    guage.style.width = `${percentageOfPageScrolled}%`;

})