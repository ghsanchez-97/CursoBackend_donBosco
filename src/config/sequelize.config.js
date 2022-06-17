import Sequelize from 'sequelize'
import db from './db.config'

const sequelize = new Sequelize(
  db.database,
  db.user,
  db.password,
  db.options
)
export default sequelize
