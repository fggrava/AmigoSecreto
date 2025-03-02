let listaDeNomes = []; //Variavel para a matriz de nomes digitados.

//Função principal do botão adicionar amigos.
function adicionarAmigo() {

  let amigo = document.querySelector('input').value;
    if (amigo == '') { //verifica se oo campo de digitação não está sem preenchimento.
       alert('Digite um nome válido');
    } else {
      if (listaDeNomes.includes(amigo)) { //Verifica se o nome digitado já existe na lista de nomes.
       alert('esse nome já existe');
      } else {  
        listaDeNomes.push(amigo); //Acrescenta o nome digitado na matriz de nomes.
        exibirLista();
        console.log (listaDeNomes);
        limparCampo();
      }
    }
}

// Segunda função principal, que limpa a lista de nomes digitados e realiza o sorteio de um nome da lista, apresentando o nome em uma mensagem.
function sortearAmigo() {
  if (listaDeNomes < 1) { // verifica se realmente existem nomes digitados na lista de nomes.
    alert('Nenhum amigo foi inserido');
    limparSorteio();
    return;
  } 
  let nomeSorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `O amigo sorteado foi: ${nomeSorteado}`; //exibe uma mensagem com o nome sorteado na tela.

  limparLista();
  listaDeNomes = [];

}

//Função para exibir a lista dos nomes que estão sendo digitados.
function exibirLista() {
  
  limparLista();

  for (let i = 0; i < listaDeNomes.length;i++){
    let item = document.createElement('li');
    item.textContent = listaDeNomes[i];
    listaAmigos.appendChild(item);
  }
  }

//Função para limpar o campo para digitar o proximo nome.  
function limparCampo() {
   nomeDigitado = document.querySelector('input');
   nomeDigitado.value = '';
}

//Função para limpar o aviso com o nome sorteado.
function limparSorteio(){
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}

// Função para limpar a lista de nomes digitados.
function limparLista(){
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = " ";
}
