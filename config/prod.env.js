const mock = process.argv.indexOf('mock') === 2

module.exports = {
  NODE_ENV: '"production"',
  MOCK: mock ? 'true' : 'false',
  BASE_URL: mock ? '""' : '"http://生产url"'
}
