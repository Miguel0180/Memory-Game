const grid = document.querySelector('.grid')

const personagens = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let SecondCard = ''
let Tentativas = 0

const TentativasNum = (Tentativas) => {
    const elemento = document.querySelector('#tryNumber')
    elemento.textContent = `Tentativa: ${Tentativas}`
}

const PlayerName = () => {
    const player = localStorage.getItem('player')
    const texto = document.querySelector('#PlayerName')

    texto.textContent = `${player}`
}

const verify = () => {
    const firstPersona = firstCard.getAttribute('data-persona')
    const SecondPersona = SecondCard.getAttribute('data-persona')
    if ( firstPersona === SecondPersona) {

        

        firstCard = ''
        SecondCard= ''

    }else {
        setTimeout (() =>{
            firstCard.classList.remove('reveal-card')
            SecondCard.classList.remove('reveal-card')

            firstCard = ''
            SecondCard= ''
        }, 1000)

        
    }
}


const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return
    }
    

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    }else if (SecondCard === '') {
        target.parentNode.classList.add('reveal-card')
        SecondCard = target.parentNode

        Tentativas += 1
        console.log(Tentativas)
        TentativasNum(Tentativas)
        verify()

    }

}

const createCard = (persona)  => {

    const card = createElement('div','card')
    const front = createElement('div', 'card-pres front')
    const back = createElement('div', 'card-pres back')

    front.style.backgroundImage = `url('../imgs/${persona}.jpg')`

    card.className ='card';
    front.className = 'card-pres front'
    back.className = 'card-pres back'

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    card.setAttribute('data-persona', persona)

    return card

}



const loadGame = () => {

    const duplicaPersonagens = [ ... personagens, ... personagens]

    const cardsAleatorio = duplicaPersonagens.sort(() => Math.random() -0.5);

    

    duplicaPersonagens.forEach((persona) => {
        console.log(persona)
        const card = createCard(persona)
        grid.appendChild(card)

    });
}


window.onload = () => {

    PlayerName()
    loadGame()
}