async function realizaLogin(page, conteudo) {
  await page.goto("https://www.paghiper.com/login/");

  await page.type(".email input", conteudo.login);
  await page.type(".senha input", conteudo.senha);
  await page.screenshot({
    path: "./login.png",
    type: "png",
    fullPage: true
  });

  await page.click("#login > div > form > input[type=submit]");

  /**
   * SE NAO EXIBIR ERRO NA TELA ENTÃO QUER DIZER QUE FEZ LOGIN
   */

  await page.waitForSelector(".saldo", { timeout: 1000 }).catch(async () => {
    const erro = await page.evaluate(() => {
      console.log(
        $(".erro")
          .text()
          .trim()
      );

      return $(".erro")
        .text()
        .trim();
    });

    throw erro;
  });
}

module.exports = realizaLogin;
