import modules from './modules/index'
import express from 'express'
import { constants, sequelizeConfig } from './config/index'
import { api } from './api/index'
// IMPORT LOGGER
import Logger from './logs/logger.logs'

async function startServer () {
  const logger = new Logger({ enviroment: constants.NODE_ENV }).getLogger()
  const app = express()
  await modules.init({
    expressApp: app,
    expressRoutes: api(),
    sequelizeInstance: sequelizeConfig
  })
  app.listen(constants.PORT, (err) => {
    if (err) {
      logger.error(err)
    }
    logger.info(`🚀 Server running on port ${constants.PORT}`)
    // console.log(`Server running on port ${constants.PORT}`)
  })
}
startServer()
