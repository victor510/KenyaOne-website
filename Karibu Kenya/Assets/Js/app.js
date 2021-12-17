const moreFactsBtn = document.getElementById('see-more');
const quickFactsSection = document.getElementById('quick-facts');
const navContainer = document.getElementById('nav-container');
const mainOverlay = document.getElementById('main_overlay');
const menuBtn = document.getElementById('menu_btn');
const closeBtn = document.getElementById('close_btn');
const closeBtn_QuickFacts = document.getElementById('quick-facts close_btn');



function toggle(el,classname){
    if(el.classList.contains(classname)){
    el.classList.remove(classname)
    }
    else{
    el.classList.add(classname)
    }
    }

moreFactsBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    toggle(quickFactsSection, 'active');
    toggle(mainOverlay, 'active')
})
closeBtn_QuickFacts.addEventListener('click', (e)=>{
    e.preventDefault();
    toggle(quickFactsSection, 'active');
    toggle(mainOverlay, 'active')
})

menu_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    gsap.to('.nav-container', {
        duration: .8,
        width: '100%',
        visibility: 'visible'
    })
    gsap.from('.close_btn', {
        delay: .6,
        duration: .2,
        opacity: 0
    })
    gsap.to('.nav-link', {
        opacity: 1,
        stagger: .15
    })
})

closeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    gsap.to('.nav-container', {
        duration: .8,
        visibility: 'hidden',
        width: '0'
    })
    gsap.to('.nav-link', {
        opacity: 0,
        stagger: .15
    })
})