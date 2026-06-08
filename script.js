const cards = document.querySelectorAll(
'.card, .music-card, .look-card'
);

function revealCards(){

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 80){

card.classList.add('show');

}

});

}

window.addEventListener('scroll', revealCards);

window.addEventListener('load', revealCards);

const topo = document.querySelector('.topo');

if(topo){

topo.style.opacity = '0';
topo.style.pointerEvents = 'none';
topo.style.transition = '.4s';

window.addEventListener('scroll', ()=>{

if(window.scrollY > 300){

topo.style.opacity = '1';
topo.style.pointerEvents = 'all';

}

else{

topo.style.opacity = '0';
topo.style.pointerEvents = 'none';

}

});

}


const header = document.querySelector('header');

window.addEventListener('scroll', ()=>{

if(window.scrollY > 50){

header.classList.add('scrolled');

}

else{

header.classList.remove('scrolled');

}

});


const form = document.getElementById('contactForm');

if(form){

form.addEventListener('submit', function(e){

e.preventDefault();

const nome = document.getElementById('nome').value;

document.getElementById('status').textContent =
'Obrigado pela mensagem, ' + nome + '!';

form.reset();

});

}