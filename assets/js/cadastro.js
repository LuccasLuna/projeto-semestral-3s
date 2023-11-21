
const listaSangue = document.querySelector('.ul-sangue');
const btnModal = document.querySelector('.btn-modal');

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
btnModal.addEventListener('click', () => {
  document.querySelector('#email').value = '';
  document.querySelector('#senha').value = '';
  document.querySelector('#nome').value = '';
  document.querySelector('input[type="date"]').value = '';
  document.querySelector('#telefone').value = '';
  document.querySelector('#altura').value = '';
  document.querySelector('#cpf').value = '';
  document.querySelector('#peso').value = ''
  document.querySelector('input[name="sexo"]:checked').value = '';
  document.querySelector('input[name="sangue"]:checked').value = '';
  document.querySelector('#rua').value = '';
  document.querySelector('#bairro').value = '';
  document.querySelector('#municipio').value = '';
  document.querySelector('#uf').value = '';
  document.querySelector('#numero').value = '';
  document.querySelector('#cep').value = '';
  document.querySelector('#complemento').value = '';
  document.querySelector('#select-doencas').value = '';

  window.location.href = './perfil.html'
});




