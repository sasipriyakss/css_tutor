const btn=document.getElementsByClassName('btn')[0];
const navbar=document.getElementsByClassName('navbar-links')[0];

btn.addEventListener('click',()=>{
    navbar.classlist.toggle('active');
}
);