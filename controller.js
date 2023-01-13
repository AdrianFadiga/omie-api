const { default: axios } = require('axios')
const helpers = require('./helpers')
const model = require('./model')

module.exports = {
  async getAll (req, res) {
    const response = await axios({
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://app.omie.com.br/api/v1/produtos/nfconsultar/'
    })
    return res.json(response)
  },

  async getAllNFEs (req, res) {
    const totalPages = await helpers.getTotalPages()
    for (let i = 1; i <= totalPages; i += 1) {
      const { data } = await axios.post(
        'https://app.omie.com.br/api/v1/produtos/nfconsultar/',
        {
          call: 'ListarNF',
          app_key: '905225428107',
          app_secret: '65420591f307877587eec74cb7527fda',
          param: [
            {
              pagina: i,
              registros_por_pagina: 500,
              apenas_importado_api: 'N',
              ordenar_por: 'DATA_LANCAMENTO'
            // dEmiInicial: '01/08/2021'
            }
          ]
        },
        {
          headers: {
            'Content-type': 'application/json'
          }
        }
      )
      const serializedInfo = helpers.serializePageInfo(data.nfCadastro)
      await model.saveAll(serializedInfo)
      console.log(i)
    }
    return res.json('Rapaz, tu é doido')
  },

  async teste () {
    await model.saveAll()
  }
}
