async function informacoesConta(page, conteudo) {
  await page.screenshot({
    path: "./informacoes-da-conta.png",
    type: "png",
    fullPage: true
  });

  conteudo.conta = await page.evaluate(() => {
    const getValue = function(selector) {
      return document
        .querySelector(selector)
        .innerHTML.replace("R$", "")
        .trim();
    };

    return {
      disponivel: getValue(
        "body > div.page > div.infoconta > div.saldo > dl:nth-child(1) > dd"
      ),
      receber: getValue(
        "body > div.page > div.infoconta > div.saldo > dl:nth-child(2) > dd"
      ),
      bloqueado: getValue(
        "body > div.page > div.infoconta > div.saldo > dl:nth-child(3) > dd > span"
      ),
      tipoConta: getValue(
        "body > div.page > div.infoconta > div.saldo > div > p:nth-child(1) > a"
      ),
      qtdTransacoes: getValue(
        "body > div.page > div.infoconta > div.saldo > div > p:nth-child(2) > span"
      )
    };
  });
}

module.exports = informacoesConta;
