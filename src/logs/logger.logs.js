import { devLoggerConfig, prodLoggerConfig } from '../config'
import { createLogger } from 'winston'

export default class Logger {
  constructor ({ enviroment = null }) {
    this.enviroment = enviroment
  }

  getLogger () {
    const typeLogger = this.enviroment === 'development' ? devLoggerConfig : prodLoggerConfig
    return createLogger(typeLogger)
  }
}
