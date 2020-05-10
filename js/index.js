// Your code goes here

const funBusImg = document.querySelector('.intro img');

funBusImg.addEventListener('mouseover', () => {
    funBusImg.style.transform = 'scale(1.2)'
    funBusImg.style.transition = 'all 0.3s'
});

funBusImg.addEventListener('mouseout', () => {
    funBusImg.style.transform = 'scale(1.0)'
});

const welcomeClick = document.querySelector('.intro h2');

welcomeClick.addEventListener('dblclick', () => {
    welcomeClick.style.color = 'green';
});

const navHover = document.querySelectorAll('.nav-link');

navHover.forEach(link => {

    link.addEventListener('mouseenter' , (event) => {
        event.target.style.transform = 'scale(1.2)';
        event.target.style.color = 'blue';
        event.target.style.transition = 'all 0.3s'
    });
});

navHover.forEach(link => {
    
    link.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.color = 'black'
    });
});

const goDrag = document.querySelector('.text-content h2');

goDrag.addEventListener('drag', () => {
    goDrag.textContent = 'GO!'
});

const awaitsContextMenu = document.querySelectorAll('.text-content h2').item(1);

awaitsContextMenu.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

window.addEventListener('resize', () => {

    const funBusAltImg = document.querySelector('.img-content img');
    funBusAltImg.src = 'https://images.unsplash.com/photo-1516503424803-708327384b90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
});

window.addEventListener('scroll', () => {

    const funBusAltImg2 = document.querySelectorAll('.img-content img').item(1);
    funBusAltImg2.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
});

