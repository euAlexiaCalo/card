/*const badge = document.getElementById("avatar");
const titlePage = document.getElementsByClassName("usuario");
const backgroundPage = document.querySelector("body");
console.log(backgroundPage);

const arrayItens = [backgroundPage, badge];
// Seleciona apenas o primeiro item encontrado
const titleHabilidades = document.querySelector("h3");
const descricaoTexto = document.querySelector(".descricao");

// Seleciona todos os itens encontrados
const arrayTitlesH3 = document.querySelectorAll("h3");

//  Imprime no console
console.log(titleHabilidades);
console.log(arrayTitlesH3);

function changeColor() {
  console.log("Chamou função ChangeColor");
  // Altera a cor de fundo do círculo
  if (badge) {
    badge.style.backgroundColor = "#000000";
  }

  // Altera a cor do texto do nome (pegando o primeiro item da lista)
  console.log(titlePage[0]);
  // Altera o texto do nome (pegando o primeiro item da lista)
  titlePage[0].innerHTML = "Nome do profissional";
}

function hideDescription() {
  descricaoTexto.classList.toggle("descricaoInvisivel");
}

function backgroundChange() {
  backgroundPage.classList.toggle("darkTheme");

  for (const element of arrayItens) {
    element.classList.toggle("darkTheme");
  }
}*/

const themePage = document.getElementsByClassName("theme");
const titleTheme = document.getElementsByClassName("btn-acao");

function theme() {
    /*para cada elemento da coleção de elementos com a classe "theme", alterna a classe "darkTheme" para aplicar ou remover o tema escuro.*/
    for (const element of themePage) {
        element.classList.toggle("darkTheme");
    }

    // Pega o primeiro elemento da coleção da classe "btn-acoes" e verifica seu conteúdo. Se for "Modo escuro", muda para "Modo claro"; caso contrário, muda para "Modo escuro". E atualiza o conteúdo.
    titleTheme[0].innerHTML = titleTheme[0].innerHTML === "Modo escuro" ? "Modo claro" : "Modo escuro";
}
 