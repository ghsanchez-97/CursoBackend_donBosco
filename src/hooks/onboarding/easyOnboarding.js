import argon2 from 'argon2'
import moment from 'moment'

// Import Models
import { UserModel } from '../../models'

/* eslint-disable camelcase */
export default class EasyOnboarding {
  constructor ({ email, password, phone, prefix, is_active = false }) {
    this.email = email
    this.password = password
    this.phone = phone
    this.prefix = prefix
    this.is_active = is_active
  }

  async createEasyOnboarding () {
    const userDTO = {
      email: this.email,
      password: await argon2.hash(this.password),
      phone: this.phone,
      prefix: this.prefix,
      is_active: this.is_active,
      created_at: moment().utc().format()
    }

    const user = await UserModel.create(userDTO)

    return {
      meta: {
        action: true,
        user
      },
      msg: 'controllers.signup.success'
    }
  }

  async checkUser () {
    const user = await UserModel.findOne({ where: { email: this.email } })

    return user !== null
  }
}
