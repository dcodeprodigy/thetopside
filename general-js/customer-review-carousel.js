const reviewCard = document.querySelectorAll(".review-card");
const prevBtn = document.getElementById("previous-button");
const nextBtn = document.getElementById("next-button");
const container = document.querySelector(".container")





// Controlling the scroll of out carousel
nextBtn.addEventListener("click", nextSlide);
let currentVisibleSlide = 1;
prevBtn.disabled = true;
function nextSlide(){
    if(currentVisibleSlide === 1){
         for(let s = 0; s <= 2; s++){
            reviewCard[s].style.transition = "transform ease-in 250ms";
        } 
        for (let i = 0; i <= 2; i++){
            reviewCard[i].style.transform = "translateX(-100%) translateX(-10px)";
        }
        prevBtn.disabled = false;
        currentVisibleSlide++;
    }else if(currentVisibleSlide === 2){
        for (let i = 0; i <= 2; i++){ // Instead of seting the styling for each node, we simply use a for loop
            reviewCard[i].style.transform = "translateX(-200%) translateX(-20px)";
        }
        currentVisibleSlide++;
        nextBtn.disabled = true;

    }
    
};

prevBtn.addEventListener("click", prevSlide);
function prevSlide(){
    if(currentVisibleSlide === 3){
        for(let i = 0; i <=2; i++ ){
            reviewCard[i].style.transform = "translateX(-100%) translateX(-10px)";
        }
        nextBtn.disabled = false;
        currentVisibleSlide--;
    }else if(currentVisibleSlide === 2){
        for(let i = 0; i <=2; i++ ){
            reviewCard[i].style.transform = "translateX(-0%) translateX(-0px)";
        }
        currentVisibleSlide--;
        prevBtn.disabled = true;
    }
}




// For Scrolling with fingers

container.addEventListener("scroll", scrollBehaviour);
function scrollBehaviour(){
    const yay = this.scrollLeft;
    console.log(yay)
    
}