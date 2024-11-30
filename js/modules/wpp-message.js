export default function initWppMessage() {
  const h2Element = document.querySelector('.slide-info h2');

  const telefone = '5511995499500';

  let mensagemCodificada = '';
  if (h2Element) {
    const nomeConvite = h2Element.textContent.trim(); // Remove espaços extras
    const mensagem = `Olá, estava no site da Office e gostaria de um orçamento do convite ${nomeConvite}`;
    mensagemCodificada = `?text=${encodeURIComponent(mensagem)}`;
  }

  const whatsappLink = document.getElementById('whatsapp-link');
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${telefone}${mensagemCodificada}`;
  }

  const whatsappIconLink = document.getElementById('whatsapp-icon-link');
  if (whatsappIconLink) {
    whatsappIconLink.href = `https://wa.me/${telefone}${mensagemCodificada}`;
  }
}
