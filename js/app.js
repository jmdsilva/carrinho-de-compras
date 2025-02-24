// Inicializa a variável que armazena o valor total da compra
let valorTotal = 0;

// Chama a função limpar() no início para garantir que o carrinho comece vazio
limpar();

function adicionar() {
  // Obtém e converte a quantidade de itens informada pelo usuário para um número inteiro
  const qtdItems = parseInt(document.getElementById("quantidade").value);

  // Se a quantidade for inválida (NaN ou 0), interrompe a execução da função
  if (!qtdItems) return;

  // Obtém o valor do item selecionado no campo de produtos
  const item = document.getElementById("produto").value;

  // Extrai o nome do item e o valor a partir da string (exemplo: "Produto - R$100")
  const nomeItem = item.split(" - ")[0]; // Obtém o nome do produto
  const valorItem = parseInt(item.split("R$")[1]); // Converte o preço do produto para número

  // Calcula o subtotal do item multiplicando o preço pela quantidade
  const subTotal = valorItem * qtdItems;

  // Obtém a referência da lista de produtos no carrinho
  let carrinho = document.getElementById("lista-produtos");

  // Adiciona o novo item ao carrinho mantendo os anteriores
  carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${qtdItems}x</span> ${nomeItem} <span class="texto-azul">R$ ${subTotal}</span>
    </section>`;

  // Atualiza o valor total da compra somando o novo subtotal
  valorTotal += subTotal;

  // Atualiza o campo que exibe o valor total na interface
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${valorTotal}`;

  // Limpa o campo de quantidade após a adição do item
  document.getElementById("quantidade").value = "";
}

function limpar() {
  // Obtém as referências do campo de total e da lista de produtos
  let total = document.getElementById("valor-total");
  let carrinho = document.getElementById("lista-produtos");

  // Reseta o valor total e limpa o carrinho
  valorTotal = 0;
  carrinho.innerHTML = "";

  // Atualiza o valor total na interface para "R$ 0"
  total.textContent = "R$ 0";
}
