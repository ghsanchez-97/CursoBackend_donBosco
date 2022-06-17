import { UserOnboarding } from '../hooks'
import { dataDictionary } from '../config'

const { ONBARDING } = dataDictionary

const authServices = {}

authServices.signup = async (data) => {
  const onboarding = UserOnboarding.selectUserRegType(ONBARDING.EASY, data)

  if (!await onboarding.checkUser()) {
    const { meta, msg } = await onboarding.createEasyOnboarding()

    return {
      meta, msg
    }
  } else {
    return { meta: { action: false }, msg: 'controllers.signup.already' }
  }
}

export default authServices
