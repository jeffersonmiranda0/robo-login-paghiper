async function dadosConta(page, conteudo) {
  await page.goto("https://www.paghiper.com/painel/dados-da-conta/");
  conteudo.dadosConta = await page.evaluate(() => {
    const getValue = function(selector) {
      return document
        .querySelector(selector)
        .innerHTML.replace("R$", "")
        .trim();
    };

    return {
      pessoais: {
        nome: getValue(".dadosconta dl dd:nth-child(1) p"),
        cpf: getValue(".dadosconta dl dd:nth-child(2) p"),
        RG: getValue(".dadosconta dl dd:nth-child(3) p"),
        dataNascimento: getValue(".dadosconta dl dd:nth-child(4) p"),
        contaID: getValue(".dadosconta dl dd:nth-child(5) p"),
        APIKEY: getValue(".dadosconta dl dd:nth-child(6) p")
      },
      endereco: {
        cep: getValue(".dadosconta div:nth-child(2) dl dd:nth-child(1) p"),
        rua: getValue(".dadosconta div:nth-child(2) dl dd:nth-child(2) p"),
        numero: getValue(".dadosconta div:nth-child(2) dl dd:nth-child(3) p"),
        bairro: getValue(".dadosconta div:nth-child(2) dl dd:nth-child(4) p"),
        cidade: getValue(".dadosconta div:nth-child(2) dl dd:nth-child(5) p")
      }
    };
  });
}

module.exports = dadosConta;
