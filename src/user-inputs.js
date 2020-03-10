const readline = require("readline-sync");

function userInputs(conteudo) {
  conteudo.login = readline.question("Informe o email de acesso: ");
  conteudo.senha = readline.question("Informa a senha de acesso: ");
}

module.exports = userInputs;
