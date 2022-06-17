import { constants } from '../config/index'
import testRouter from './routes/test.router'
import authRouter from './routes/auth.router'

export const api = () => {
  return [
    { path: `${constants.BASEAPI}/test`, controller: testRouter },
    { path: `${constants.BASEAPI}/auth`, controller: authRouter }
  ]
}
