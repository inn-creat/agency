// document.getElementById('icon-open').addEventListener('click', function(){
//     const menu = document.getElementById('menu');
//     menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
// })

let navBtn = document.getElementById('navbtn')
let navBar = document.getElementById('nav')
let nav = false

if(!nav){
    navBtn.addEventListener('click', () => {
        navBar.classList.toggle('navBar')
    })
}