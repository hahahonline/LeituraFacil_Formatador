function formatarTexto() {
    var texto = document.getElementById("texto").value;
    var palavras = texto.split(" ");
    var novo_texto = "";

    for (var i = 0; i < palavras.length; i++) {
      var palavra = palavras[i];
      var tam = palavra.length;
      var metade = Math.ceil(tam / 2);
      var nova_palavra = "<b>" + palavra.slice(0, metade) + "</b>" + palavra.slice(metade);
      novo_texto += nova_palavra + " ";
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = novo_texto;
    document.getElementById("texto").value = "";

  }

  function copiarTexto() {
    const resultado = document.getElementById("resultado"); // Seleciona o elemento com o resultado
    const textoFormatado = resultado.innerHTML; // Obtém o texto formatado do resultado
    navigator.clipboard.writeText(textoFormatado).then(() => { // Copia o texto com as tags HTML para a área de transferência
      // Mostra um balão de mensagem na tela
      const balao = document.createElement("div");
      balao.textContent = "Texto copiado para a área de transferência";
      balao.style.position = "fixed";
      balao.style.bottom = "10px";
      balao.style.right = "10px";
      balao.style.backgroundColor = "#4CAF50";
      balao.style.color = "white";
      balao.style.padding = "10px";
      balao.style.borderRadius = "5px";
      document.body.appendChild(balao);
  
      // Remove o balão de mensagem após 3 segundos
      setTimeout(() => {
        balao.remove();
      }, 3000);
  
      // Cria uma seleção e define o conteúdo da seleção para o texto sem as tags HTML
      const range = document.createRange();
      range.selectNodeContents(resultado);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
    }).catch((err) => {
      console.error('Erro ao copiar texto para a área de transferência:', err);
    });
  }
  