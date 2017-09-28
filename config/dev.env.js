var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"zhMMpHG5V5O47xEUk3Yk6JHyExjeEAjY"'
})
