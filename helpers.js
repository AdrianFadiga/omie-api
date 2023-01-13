const { default: axios } = require('axios')
module.exports = {
  async getTotalPages () {
    const { data } = await axios.post(
      'https://app.omie.com.br/api/v1/produtos/nfconsultar/',
      {
        call: 'ListarNF',
        app_key: '905225428107',
        app_secret: '65420591f307877587eec74cb7527fda',
        param: [
          {
            pagina: 1,
            registros_por_pagina: 500,
            apenas_importado_api: 'N',
            ordenar_por: 'DATA_LANCAMENTO'
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

  serializePageInfo (pageInfo) {
    return pageInfo.map(({
      compl: { cChaveNFe, nIdNF, cCodCateg },
      ide: { cDeneg, dCan, dEmi, nNF },
      nfDestInt: { cCodCliInt, cRazao, cnpj_cpf, nCodCli },
      total: { ICMSTot: { vNF } },
      det
    }) => ({ cChaveNFe, nIdNF, cCodCateg, cDeneg, dCan, dEmi, nNF, cCodCliInt, cRazao, cnpj_cpf, nCodCli, vNF, xProd: det[0].prod.xProd }))
  }
}
