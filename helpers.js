/* eslint-disable camelcase */
const { default: axios } = require('axios')
const model = require('./model')
module.exports = {
  async getTotalPages (registrosPorPagina = 500, initialDate) {
    const { data } = await axios.post(
      'https://app.omie.com.br/api/v1/produtos/nfconsultar/',
      {
        call: 'ListarNF',
        app_key: process.env.OMIE_APP_KEY,
        app_secret: process.env.OMIE_APP_SECRET,
        param: [
          {
            pagina: 1,
            registros_por_pagina: registrosPorPagina,
            apenas_importado_api: 'N',
            ordenar_por: 'DATA_LANCAMENTO',
            dEmiInicial: initialDate
          }
        ]
      },
      {
        headers: {
          'Content-type': 'application/json'
        }
      }
    )
    return data.total_de_paginas
  },

  async getInitialDate () {
    const lastResult = await model.findLast()
    if (lastResult) return lastResult.dEmi
    return null
  },

  serializePageInfo (pageInfo) {
    return pageInfo.map(({
      compl: { cChaveNFe, nIdNF, cCodCateg },
      ide: { cDeneg, dCan, dEmi, nNF },
      nfDestInt: { cCodCliInt, cRazao, cnpj_cpf, nCodCli },
      total: { ICMSTot: { vNF } },
      det
    }) => ({
      cChaveNFe,
      // nIdNF chega como um bigInt mt doido
      nIdNF: nIdNF.toString(),
      cCodCateg,
      cDeneg,
      dCan,
      dEmi,
      nNF,
      cCodCliInt,
      cRazao,
      cnpj_cpf,
      // nCodCli chega como um bigInt mt doido
      nCodCli: nCodCli.toString(),
      vNF,
      xProd: det[0].prod.xProd
    }))
  }
}
