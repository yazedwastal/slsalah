let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.navBar ul');
let close = document.querySelector('.close');
let header = document.querySelector('header');
let nav_img = document.querySelector('.logo img');
let nav_btn = document.querySelector('.btn button');

/* */
toggle.onclick = function(){
    toggle.style.display='none';
    header.style.display='none';
    nav_btn.style.display='none';
    nav_img.style.display='none';
    nav.style.display='flex';
    close.style.display='block';
};
close.onclick = function(){
    nav.style.display='none';
    header.style.display='block';
    nav_btn.style.display='block';
    nav_img.style.display='block';
    toggle.style.display = 'block';
    close.style.display='none';
};