const formulario = document.querySelector('form');

function enviarForm(event) {
  event.preventDefault();
  const btnSubmit = document.querySelector('form button');
  btnSubmit.disabled = true;
  btnSubmit.innerText = 'Enviando...';

  const data = new FormData(formulario);

  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then((resposta) => {
    if (resposta.ok) {
      btnSubmit.innerText = 'Enviado com sucesso';
    } else {
      btnSubmit.innerText = 'Erro, recarregue a página';
    }
  });
}

formulario.addEventListener('submit', enviarForm);
