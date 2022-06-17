import expressModules from './express.modules'
import sequelizeModules from './sequelize.modules'

export default {
  async init ({ expressApp = null, expressRoutes = null, sequelizeInstance = null }) {
    await expressModules(expressApp, expressRoutes)
    await sequelizeModules(sequelizeInstance)
  }
}
