/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/

// objetivo:1
// passo 1: pegar no JS o elemento HTML correspondente ao botão de troca.

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2- dar um jeito de pegar no  JS oelemento HTML correspondente ao body;
// sem usar o id no body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
// passo 3- dar um jeito de identificar o clique do usuario no botao de trooca de tema;
//
botaoAlterarTema.addEventListener("click", () => {

    // Passo 6 - verifica se tem o modo escuro no body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    // refatorando
    // remove e add a classe modo escuro no body faz a inversão sem repetir varios codigos
    body.classList.toggle("modo-escuro");
    // fim refatorando

    if (modoEscuroEstaAtivo) {
        // Passo 7 - remover a classe do modo escuro do modo escuro;
        // body.classList.remove("modo-escuro");

        // Passo 8 -Troca a imagem do botão de alterar tema para o sol;
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        // Passo 4: add a classe modo escuro no body
        // body.classList.add("modo-escuro");
        // Passo 5: trocar a imagem do botão de alterar tema pra lua.
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

