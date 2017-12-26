const mock = process.argv.indexOf('mock') === 2
const mockRemote = process.argv.indexOf('mock-r') === 2

module.exports = {
  NODE_ENV: '"production"',
  MOCK: mock ? '"local"' : '""',
  BASE_URL: mockRemote ? '"http://121.40.167.226:3000"' : '"http://生产url"'
}
