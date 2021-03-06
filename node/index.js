const { default: create } = require('../lib/commands/create')
const { default: start } = require('../lib/commands/start')
const { default: build } = require('../lib/commands/build')
const { reloadRoutes } = require('../lib/static/webpack')
const { default: makePageRoutes } = require('../lib/node/makePageRoutes')

module.exports = {
  create,
  start,
  build,
  reloadRoutes,
  makePageRoutes,
}
