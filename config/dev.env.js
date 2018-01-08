var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

const mock = process.argv.indexOf('mock') === 2

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK: mock ? 'true' : 'false',
  BASE_URL: mock ? '""' : '"https://www.easy-mock.com/mock/597973d3a1d30433d83f11e7/base"'
})
