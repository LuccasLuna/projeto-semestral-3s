const form = document.querySelector('form');
/*
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

const nome = document.querySelector('#nome');
const dtNascimento = document.querySelector('#data-nasc');
const cpf = document.querySelector('#cpf');
const telefone = document.querySelector('#telefone');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const sexo = document.querySelectorAll('[name="sexo"]');
const sangue = document.querySelectorAll('[name="sangue"]');

const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const municipio = document.querySelector('#municipio');
const uf = document.querySelector('#uf');
const numero = document.querySelector('#numero');
const cep = document.querySelector('#cep');
const complemento = document.querySelector('#complemento');
const doencas = document.querySelector('#select-doencas');

const data = {
  email: email.value,
  senha: senha.value,
  nome: nome.value,
  dtNascimento: dtNascimento.value,
  cpf: cpf.value,
  telefone: telefone.value,
  altura: altura.value,
  peso: peso.value,
  sexo: sexo.value,
  sangue: sangue.value,
  rua: rua.value,
  bairro: bairro.value,
  municipio: municipio.value,
  uf: uf.value,
  numero: numero.value,
  cep: cep.value,
  complemento: complemento.value,
  doencas: doencas.value
}
*/
// tbm poderia usar o dataForm

const data = {
  email: document.querySelector('#email').value,
  senha: document.querySelector('#senha').value,
  nome: document.querySelector('#nome').value,
  dtNascimento: document.querySelector('#data-nasc').value,
  cpf: document.querySelector('#cpf').value,
  telefone: document.querySelector('#telefone').value,
  altura: document.querySelector('#altura').value,
  peso: document.querySelector('#peso').value,
  sexo: document.querySelectorAll('[name="sexo"]').value,
  sangue: document.querySelectorAll('[name="sangue"]').value,
  rua: document.querySelector('#rua').value,
  bairro: document.querySelector('#bairro').value,
  municipio: document.querySelector('#municipio').value,
  uf: document.querySelector('#uf').value,
  numero: document.querySelector('#numero').value,
  cep: document.querySelector('#cep').value,
  complemento: document.querySelector('#complemento').value,
  doencas: document.querySelector('#select-doencas').value
}


form.addEventListener('submit', async (e) =>  {
  e.preventDefault(); 

  const data = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if(!res.ok) {
      console.log('erro');
    }else {
      console.log('ok');
    }
  })
  .catch(erro => console.error(erro))

  const res = await data.json()

  console.log(res);
  
});

