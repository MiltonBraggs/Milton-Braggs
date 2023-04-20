let nav = document.querySelector('.navigation');
let navToogle = document.querySelector(".mobile-nav-toogle");

navToogle.addEventListener('click', () =>{
    let visibility = nav.getAttribute('data-visible');

    if(visibility === "false"){
        nav.setAttribute('data-visible',true);
        navToogle.setAttribute('aria-expanded',true);
    }
    else if(visibility === "true"){
        nav.setAttribute('data-visible',false);
        navToogle.setAttribute('aria-expanded',false);
    }
} );


//scrolling

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});


const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el) => observer.observe(el));