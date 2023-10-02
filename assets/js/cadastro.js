
const listaSangue = document.querySelector('.ul-sangue');


listaSangue.addEventListener('click', (e) => {

  if(e.target.tagName === 'INPUT') {
    const input = e.target;

    const allLabels = document.querySelectorAll('.ul-sangue label');

    //remove o estido de todos os labels
    allLabels.forEach(label => {
      label.classList.remove('clicado');
    })

    // adiciona o estilo ao label referente ao input clicado
    const label = document.querySelector(`label[for="${input.id}"]`);
    label.classList.add('clicado');
  }
});






/*
listaSangue.addEventListener('click', (e)=> {
  const className = e.target.getAttribute('id'); // ta pegando o id do input
  const input = document.querySelector(`#${className}`);
  const label = document.querySelector(`.${className}`); // ta criando uma variavel para a label  que tem a classe com o menos nome do id do input


if(!label.classList.contains('clicado')) {
    label.classList.add('clicado');
    input.classList.add('active');
}


  
});

  for(let chave in input) {
    if(!chave.classList('active')){
      label.classList.remove('clicado');
    } else {
      label.classList.add('clicado');
    }
  }
 */  




  /*
  // //console.log(e.target.getAttribute('id'));
  if(!label.classList.contains('clicado')) {
    label.classList.add('clicado');
  } // else {
    //   label.classList.remove('clicado');
    // }
    
    
    // if(e.target.getAttribute('id') !== input.getAttribute('id')){
      //   label.classList.add('clicado');
      // }
  */
     