import { constants } from './index'

const user = constants.DB.DB_USERNAME
const password = constants.DB.DB_PASSWORD
const database = constants.DB.DB_NAME
const host = constants.DB.DB_HOST
const dialect = constants.DB.DB_DIALECT
const nodeEnv = constants.NODE_ENV

const config = {
  development: {
    user,
    password,
    database,
    options: {
      dialect,
      host,
      dialectOptions: {
        multipleStatements: true
      },
      logging: false,
      timezone: '-06:00',
      define: {
        freezeTableName: true,
        timestamps: false,
        underscored: true
      }
    }
  },
  production: {}
}

export default config[nodeEnv]
