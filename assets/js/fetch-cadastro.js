const form = document.querySelector('form');

// tbm poderia usar o dataForm


form.addEventListener('submit', async (e) =>  {
  window.prompt('a');
  e.preventDefault(); 

  const data = {
    email: document.querySelector('#email').value,
    senha: document.querySelector('#senha').value,
    nome: document.querySelector('#nome').value,
    dtNascimento: document.querySelector('#data-nasc').value,
    cpf: document.querySelector('#cpf').value,
    telefone: document.querySelector('#telefone').value,
    altura: document.querySelector('#altura').value,
    peso: document.querySelector('#peso').value,
    sexo: document.querySelector('input[name="sexo"]:checked').value,
    sangue: document.querySelector('input[name="sangue"]:checked').value,
    rua: document.querySelector('#rua').value,
    bairro: document.querySelector('#bairro').value,
    municipio: document.querySelector('#municipio').value,
    uf: document.querySelector('#uf').value,
    numero: document.querySelector('#numero').value,
    cep: document.querySelector('#cep').value,
    complemento: document.querySelector('#complemento').value,
    doencas: document.querySelector('#select-doencas').value
  }

  try {
    const responsta = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!responsta.ok) {
      console.log('Erro na requisição.');
    } else {
      const res = await responsta.json();
      console.log('Requisição bem-sucedida:', res);
    }
  } catch (erro) {
    console.error('Erro na requisição:', erro);
  }
});
  


