const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const resposta = await fetch("", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value,
        nome: document.querySelector('#nome').value,
        cpf: document.querySelector('#cpf').value,
        peso: document.querySelector('#peso').value,
        altura: document.querySelector('#altura').value,
        dtNascimento: document.querySelector('input[type="date"]').value.toString(),
        telefone: document.querySelector('#telefone').value,
        sangue: document.querySelector('#select-sangue').value,
        rua: document.querySelector('#rua').value,
        bairro: document.querySelector('#bairro').value,
        municipio: document.querySelector('#municipio').value,
        uf: document.querySelector('#uf').value,
        numero: document.querySelector('#numero').value,
        cep: document.querySelector('#cep').value,
        complemento: document.querySelector('#complemento').value
      })
    });

    if (!resposta.ok) {
      console.log('Erro na requisição.');
    } else {
      const res = await resposta.json();
      console.log('Requisição bem-sucedida:', res);
    }
  } catch (erro) {
    console.error('Erro na requisição:', erro);
  }
});