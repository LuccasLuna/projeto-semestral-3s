const form = document.querySelector('form');

function checaSelect() {
  const select = document.querySelector('#select-doencas');
  const value = select.options[select.selectedIndex].value;

  if(value !== '0') {
    alert('desculpe, mas você não pode doar sangue'); 
    return window.location.href = '../index.html'; // retorna pro index
    // return  window.history.back();
  }
}


form.addEventListener('submit', async (e) =>  {
  e.preventDefault();
  checaSelect(); //chega se o usuário possui alguma doença
  
  
  const valorPrompt = window.prompt(`Ao enviar você concorda com nossos termos, onde sua vida se torna propriedade exclusiva, irremediável e irrevogável do instituto Zé vampirinho. Na qual é resguardado o direito do possuinte de uso de sua propriedade como bem intender. Se você concorda digite "Sim", caso contrario, digite "Não"`);

  if (valorPrompt.toLowerCase() !== 'sim') {
    alert('Você não aceitou os termos, seu cadastro não foi efetuado!');
    return window.location.href = '../index.html';
  } else {

     // tbm poderia usar o dataForm

    try {
      const responsta = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: document.querySelector('#email').value,
          senha: document.querySelector('#senha').value,
          nome: document.querySelector('#nome').value,
          dtNascimento: document.querySelector('input[type="date"]').value.toString(),
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
        })
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
  }

});

