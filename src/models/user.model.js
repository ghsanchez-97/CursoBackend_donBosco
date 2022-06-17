import { sequelizeConfig as db } from '../config'
const { DataTypes: type, Model } = require('sequelize')

class UsersModel extends Model {}

UsersModel.init({
  id: {
    autoIncrement: true,
    type: type.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  email: {
    type: type.STRING(200),
    allowNull: false,
    unique: true
  },
  password: {
    type: type.STRING,
    allowNull: false
  },
  phone: {
    type: type.STRING(20),
    allowNull: false
  },
  prefix: {
    type: type.STRING(10),
    allowNull: false
  },
  is_active: {
    type: type.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  created_at: {
    type: type.DATE,
    allowNull: false
  }
},
{
  sequelize: db,
  modelName: 'user'
}
)

module.exports = UsersModel
