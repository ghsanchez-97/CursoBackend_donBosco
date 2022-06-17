import modules from './modules/index'
import express from 'express'
import { constants, sequelizeConfig } from './config/index'
import { api } from './api/index'

async function startServer () {
  const app = express()
  await modules.init({
    expressApp: app,
    expressRoutes: api(),
    sequelizeInstance: sequelizeConfig
  })
  app.listen(constants.PORT, () => {
    console.log(`Server running on port ${constants.PORT}`)
  })
}
startServer()
