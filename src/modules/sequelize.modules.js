import { CountryModel, UserModel, KycModel } from '../models'

export default async function (sequelizeInstance) {
  if (!sequelizeInstance || !sequelizeInstance.sync) return

  // COUNTRYMODEL
  CountryModel.hasMany(KycModel, { foreignKey: 'fk_country' })

  // KYCMODEL
  KycModel.belongsTo(UserModel, { foreignKey: 'fk_user' })
  KycModel.belongsTo(CountryModel, { foreignKey: 'fk_country' })

  // USERMODEL
  UserModel.hasMany(KycModel, { foreignKey: 'fk_user' })

  // await sequelizeInstance.sync({
  //   alter: true
  // }).then(() => {
  //   console.log('All models has been created')
  // }).catch(err => {
  //   console.log(err)
  // })
  return sequelizeInstance
}
