const HtmlTableToJson = require("html-table-to-json");
async function ultimasTransacoes(page, conteudo) {
  const jsonTables = HtmlTableToJson.parse(
    await page.evaluate(() => {
      return (
        "<table>" +
        document
          .querySelector(
            "body > div.page > div.infoconta > div.extrato > table:nth-child(2)"
          )
          .innerHTML.replace("\n", "")
          .trim() +
        "</table>"
      );
    })
  );

  conteudo.ultimasTransacoes = jsonTables.results;
}

module.exports = ultimasTransacoes;
