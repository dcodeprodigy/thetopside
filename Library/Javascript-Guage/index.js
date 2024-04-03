const body = document.querySelector("body");
const guage = document.querySelector(".guage");


// Function For adjusting the width of the top guage which indicates the level the user has scrolled to.

window.addEventListener("scroll", ()=>{
    let grossBodyHeight = Number(body.scrollHeight); // 6405 | 8386 
    // This gives the total scrollable height of the body element.

    let currentScrollHeight = Number(window.scrollY); // 5764 | 7745 => These figures (Both Above Included) were used to get a constant Pixel Value(641). Regardless of the height of the window, that 641px is constant.
    // This gives the current scroll height. It updates as we keep scrolling.

    let netBodyHeight = Number(grossBodyHeight - 641) ; // This is the height after we subtract the constant value of 641 pixel. This(641) is the descripancy between the body's scrollable height and the current scroll height *When the scroll bar is at the bottom of the page*. We did this in order to be able to calculate the percentage of the height we have scrolled to.

    let percentageOfPageScrolled = (currentScrollHeight/netBodyHeight) * 100;
    guage.style.width = `${percentageOfPageScrolled}%`;

})