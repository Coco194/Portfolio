/*Remove the #{insert sectionid} from the url after refreshing the page */
window.addEventListener('load', function() {
    history.replaceState({}, document.title, window.location.pathname);
});
//

/*Logic for mobile navigation*/
const headerbtn = document.querySelector('.hamburgericon');
const mobilenav = document.querySelector('.mobile-navigation');
const mobilenavitems = document.querySelector('.mobile-navigation-menu');

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

function mobilenavfunction(){
    mobilenav.style.display = 'none';
    document.body.style.overflowY = 'auto';
}


headerbtn.addEventListener('click', openmenu);
mobilenavitems.addEventListener('click', mobilenavfunction);
//



//Intersection observer for the hero 
let parentflex = document.querySelector('.parentflex');

function hero_animation(entries){
    function innerfunction(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('parentflexshow')
        }
    }
    entries.forEach(innerfunction)
}

const hero_observer = new IntersectionObserver(hero_animation, {threshold:0.5})
hero_observer.observe(parentflex)
//


//Intersection observer for about section
let aboutparentflex = document.querySelector('.aboutparentflex');

function about_animation(entries){
    function innerfunction(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('aboutparentflexshow')
        }
    }
    entries.forEach(innerfunction)
}

const about_observer = new IntersectionObserver(about_animation, {threshold:0.14})
about_observer.observe(aboutparentflex)
//


//Even project animation
let projectcenter1 = document.querySelectorAll('.projectcenter1');

function project_animation1(entries){
    function innerfunction(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('projectcenter1_active')
        }
    }
    entries.forEach(innerfunction)
}

function observe_each_project1(projectcenter1){
    project1.observe(projectcenter1)
}

const project1 = new IntersectionObserver(project_animation1, {threshold:0.1})
projectcenter1.forEach(observe_each_project1)
//


//Odd project animation
const projectcenter2 = document.querySelectorAll('.projectcenter2');

function project_animation2(entries){
    function innerfunction(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('projectcenter2_active')
        }
    }
    entries.forEach(innerfunction)
}

function observe_each_project2(projectcenter2){
    project2.observe(projectcenter2)
}

const project2 = new IntersectionObserver(project_animation2, {threshold:0.1})
projectcenter2.forEach(observe_each_project2)
//
