
const listaSangue = document.querySelector('.ul-sangue');
const liSangue = document.querySelector('.li-sangue');



listaSangue.addEventListener('click', (e)=> {
  const className = e.target.getAttribute('id'); // ta pegando o id do input
  const input = document.querySelector(`#${className}`);
  const label = document.querySelector(`.${className}`); // ta criando uma variavel para a label  que tem a classe com o menos nome do id do input


  input.classList.add('active')
  // //console.log(e.target.getAttribute('id'));
  if(!label.classList.contains('clicado')) {
     label.classList.add('clicado');
  } // else {
  //   label.classList.remove('clicado');
  // }


  // if(e.target.getAttribute('id') !== input.getAttribute('id')){
  //   label.classList.add('clicado');
  // }

  
});

/*
listaSangue.addEventListener('click', handleEvent);

function handleEvent(e) {
  const className = e.target.getAttribute('id'); // ta pegando o id do input

  const input = document.querySelector(`#${className}`);

  const label = document.querySelector(`.${className}`); // ta criando uma variavel para a label  que tem a classe com o menos nome do id do input

 input.addEventListener('onChange', ()=> { // tentando pegar o evento no input

   if(!label.classList.contains('clicado')) {
     label.classList.add('clicado');
  } else {
    label.classList.remove('clicado');
  }
 })
}
*/