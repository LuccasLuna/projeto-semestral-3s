
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

 