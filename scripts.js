const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

toggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
})
window.addEventListener('click', ()=>{
    sidebar.style.left = '-250px';
})
const reveiws = document.querySelector(".review-container");
const maxScrolLeft = reveiws.scrollWidth - reveiws.clientWidth;

setInterval(()=>{
    const scrollAmount = reveiws.clientWidth;
    if (reveiws.scrollLeft == maxScrolLeft){
        reveiws.scrollTo({left: 0, behavior: 'smooth'});
    }
    else{
        reveiws.scrollBy({left: scrollAmount, behavior: 'smooth'});
    }
}, 2000)

// Function to add animation class
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.4 
});

const itemsToAnimate = document.querySelectorAll('.card');


itemsToAnimate.forEach(item => {
    observer.observe(item);
});
// loader
window.addEventListener('DOMContentLoaded', ()=>{
    const loader = document.querySelector('.loader-container');
    loader.style.display = 'none'
})