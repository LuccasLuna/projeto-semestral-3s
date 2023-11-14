const form = document.querySelector('form');
const modal = document.querySelector('dialog');
const btnModal = document.querySelector('dialog button');
const inputs = document.querySelectorAll('form input');

form.addEventListener('submit', e => {
  e.preventDefault();

  document.querySelector('#cpf').value = '';
  document.querySelector('#data-agendamento').value = '';
  document.querySelector('#hora-agendamento').value = '';


  document.querySelector('input[name="tatuagem"]:checked').checked = false
  document.querySelector('input[name="piercing"]:checked').checked = false
  document.querySelector('input[name="remedio"]:checked').checked = false


  modal.showModal();

});

btnModal.onclick = () => modal.close();

