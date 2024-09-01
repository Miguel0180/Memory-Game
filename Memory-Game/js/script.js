const input = document.querySelector('.login_input');
const button = document.querySelector('.play_button');
const form = document.querySelector('.login_form');

const validarInput = ({ target }) => {//Cria uma função para validar o input
  if (target.value.length > 2) {//se o valor do input for maior que 2 remove o atributo disabled
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');//Senão coloca novamente
}

const handleSubmit = (event) => {
  event.preventDefault(); //Previni o compartamento padraão de um forms de recarregar a pagina

  localStorage.setItem('player', input.value);// Armazena a informação de nome no local Storage
  window.location = 'jogo.html';//Redireciona para pagina jogo.html
}

input.addEventListener('input', validarInput);
form.addEventListener('submit', handleSubmit);