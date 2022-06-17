import { sequelizeConfig as db } from '../config'
const { DataTypes: type, Model } = require('sequelize')

class KycModel extends Model {}

KycModel.init({
  id: {
    autoIncrement: true,
    type: type.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  firstname: {
    type: type.STRING(50),
    allowNull: false
  },
  lastname: {
    type: type.STRING(50),
    allowNull: false
  },
  birthdate: {
    type: type.STRING(10),
    allowNull: false
  },
  address: {
    type: type.STRING,
    allowNull: false,
    defaultValue: '-'
  },
  dni: {
    type: type.STRING(20),
    allowNull: false
  },
  sex: {
    type: type.INTEGER,
    allowNull: false,
    defaultValue: 3
  },
  fk_user: {
    primaryKey: true,
    type: type.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  fk_country: {
    primaryKey: true,
    type: type.INTEGER,
    allowNull: false,
    references: {
      model: 'country',
      key: 'id'
    }
  }
},
{
  sequelize: db,
  modelName: 'kyc'
}
)

module.exports = KycModel
