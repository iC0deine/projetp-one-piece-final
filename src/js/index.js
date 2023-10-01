// Objetivo 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado.
// passo 1 - Pegar botão no js pra poder verificar quando o usuario clicar em cima de um deles.

const botoes = document.querySelectorAll(".botao");

// objetivo 2 - quando clicar no botão di personagem mostrar as informaçoes do personagem.
// passo 1 - pegar os personagens no js pra poder mostrar ou esconder ele.

const personagens = document.querySelectorAll(".personagem");

// passo 2 - adcionar a classe "selecionado" no botão que o usuario clicou.

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    //passo 3 - verificar se já existe um botao selecionado, se sim, devemos remover a seleção existente.
    desselecionarBotao();
    
    // objetivo 2 passo 2 verificar se já existe personagem selecionado, se sim, devemos remover a seleção existente.
    desselecionarPersonagem();


    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

function desselecionarPersonagem (){
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}