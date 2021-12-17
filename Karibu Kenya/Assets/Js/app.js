const moreFactsBtn = document.getElementById('see-more');
const quickFactsSection = document.getElementById('quick-facts');
const navContainer = document.getElementById('nav-container');
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
    toggle(quickFactsSection, 'active')
})
closeBtn_QuickFacts.addEventListener('click', (e)=>{
    e.preventDefault();
    toggle(quickFactsSection, 'active')
})

menu_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    toggle(navContainer, 'active')
})

closeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    toggle(navContainer, 'active')
})