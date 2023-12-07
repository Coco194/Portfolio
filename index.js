const headerbtn = document.querySelector('.hamburgericon');
const mobilenav = document.querySelector('.mobile-navigation');

//state is false when mobile nav is closed
let isMobilenavOpen = false;

function openmenu(){

    //state is true when we click the button hence mobile nav is true
    isMobilenavOpen = !isMobilenavOpen;
    if(isMobilenavOpen === true){
        mobilenav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    }else{
        mobilenav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
}
headerbtn.addEventListener('click', openmenu)




//Intersection observer
let aboutparentflex = document.querySelectorAll('.aboutparentflex');

function animationfunction(entries){
    function innerfunction(entry){
        if(entry.isIntersecting){
            entry.target.classList.add("aboutparentflexshow")
        }
    }
    entries.forEach(innerfunction)
}

const observer = new IntersectionObserver(animationfunction, {threshold:0.15})

observer.observe(aboutparentflex[0])
