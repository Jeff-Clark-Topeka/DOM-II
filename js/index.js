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