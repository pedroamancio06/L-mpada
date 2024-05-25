const lampOnOff = document.querySelector('#lampadaOnOff');
const lamp = document.querySelector('#lamp');
const nova = document.querySelector('.new');

const lampQuebrada = () => {
    return lamp.src.indexOf('quebrada') > -1;
}

const turnOn = () => {
    if (!lampQuebrada()) lamp.src = 'img/ligada.jpg';
}

const turnOff = () => {
    if (!lampQuebrada()) lamp.src = 'img/desligada.jpg'; 
}

const quebrada = () => {
    lamp.src = 'img/quebrada.jpg';
    nova.classList.add('active');
}

const renovarLamp = () => {
    if (lampQuebrada()) {
        lamp.src = 'img/desligada.jpg';
        lampOnOff.textContent = 'Ligar';
    }
    nova.classList.remove('active');
}

function turnOnOff() {
    if (lampOnOff.textContent == 'Ligar') {
        turnOn();
        lampOnOff.textContent = 'Desligar';
    } else {
        turnOff();
        lampOnOff.textContent = 'Ligar';
    }
}

lampOnOff.addEventListener('click', turnOnOff);
lamp.addEventListener('mouseenter', turnOn);
lamp.addEventListener('mouseleave', turnOff);
lamp.addEventListener('dblclick', quebrada);
nova.addEventListener('click', renovarLamp);