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