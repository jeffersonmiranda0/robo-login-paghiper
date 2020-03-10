const puppeteer = require("puppeteer");
const acoes = {
  userInput: require("./user-inputs"),
  realizaLogin: require("./realiza-login"),
  informacoesConta: require("./informacoes-conta"),
  ultimasTransacoes: require("./ultimas-transacoes"),
  credenciais: require("./credenciais-api"),
  dadosConta: require("./dados-da-conta")
};

async function executa() {
  let paghiper = {};

  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  try {
    acoes.userInput(paghiper);
    await acoes.realizaLogin(page, paghiper);
    await acoes.informacoesConta(page, paghiper);
    await acoes.ultimasTransacoes(page, paghiper);
    await acoes.credenciais(page, paghiper);
    await acoes.dadosConta(page, paghiper);
  } catch (e) {
    console.log("OCORREU UM ERRO", e);
  }

  await browser.close();

  delete paghiper.senha;

  console.log(paghiper);
}

executa();
