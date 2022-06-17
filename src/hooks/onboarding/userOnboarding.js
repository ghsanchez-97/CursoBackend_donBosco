import EasyOnboarding from './easyOnboarding'
import { dataDictionary } from '../../config'

const registeredOnboardingStrategies = {}

registeredOnboardingStrategies[`${dataDictionary.ONBARDING.EASY}`] = EasyOnboarding

export default class UserOnboarding {
  static selectUserRegType (strategy, props) {
    return new registeredOnboardingStrategies[strategy]({ ...props })
  }
}
