async function credenciaisApi(page, conteudo) {
  await page.goto("https://www.paghiper.com/painel/credenciais/");
  await page.waitForSelector("body > div.page > div.infoconta > h1");
  conteudo.credenciais = await page.evaluate(() => {
    return {
      apikey: document.querySelector("#apikey").value,
      token: document.querySelector("#token").value
    };
  });
}

module.exports = credenciaisApi;
