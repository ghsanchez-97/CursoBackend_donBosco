import Logger from '../../logs/logger.logs'
import emoji from 'node-emoji'
import { constants } from '../../config'

const logger = new Logger({ enviroment: constants.NODE_ENV }).getLogger()

function logError (msg, type) {
  const c = emoji.get(`:${type}:`)
  return `${c} ${msg} | Api Error`
}

function logSuccess (msg, type) {
  const c = emoji.get(`:${type}:`)
  return `${c} ${msg} | Api Message`
}

export class ApiError {
  constructor (code, message, meta) {
    this.code = code
    this.message = message
    this.meta = meta
  }

  static badRequest (msg) {
    // console.log(msg)
    logger.error(logError(msg, 'angry'))
    return new ApiError(400, msg)
  }

  static notAuthenticated (msg) {
    logger.error(logError(msg, 'scream'))
    return new ApiError(401, msg)
  }

  static notAuthorized (msg) {
    logger.error(logError(msg, 'space_invader'))
    return new ApiError(403, msg)
  }

  static payloadTooLarge (msg) {
    logger.error(logError(msg, 'triumph'))
    return new ApiError(413, msg)
  }

  static unprocessableEntity (msg) {
    logger.error(logError(msg, 'cold_sweat'))
    return new ApiError(422, msg)
  }

  static internal (msg) {
    logger.error(logError(msg, 'confused'))
    return new ApiError(500, msg)
  }
}

export class ApiResponse {
  constructor (code, message, meta) {
    this.code = code
    this.message = message
    this.meta = meta
  }

  static successRequest (msg, meta) {
    logger.error(logSuccess(msg, 'smiley'))
    return new ApiResponse(200, msg, meta)
  }
}
