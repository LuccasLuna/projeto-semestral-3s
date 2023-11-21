
const listaSangue = document.querySelector('.ul-sangue');
const btnModal = document.querySelector('.btn-modal')


listaSangue.addEventListener('click', (e) => {

  if (e.target.tagName === 'INPUT') {
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


btnModal.addEventListener('click', () => window.location.href = './perfil.html');



