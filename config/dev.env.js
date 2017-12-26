var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

const mock = process.argv.indexOf('mock') === 2
const mockRemote = process.argv.indexOf('mock-r') === 2

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK: mock ? '"local"' : '""',
  BASE_URL: mockRemote ? '"http://121.40.167.226:3000"' : '"测试url"'
})
