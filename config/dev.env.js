var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const mock = process.argv.indexOf('mock') === 2
const mock_remote = mock && process.argv.indexOf('local') === -1

module.exports = merge(prodEnv, {
  NODE_ENV: mock ? '"mock"' : '"development"',
  MOCK: mock_remote ? '"remote"' : '"local"',
  BASE_URL: mock_remote ? '"http://127.0.0.1:3000"' : '"http://www.ccqiqiu.com"'
})
