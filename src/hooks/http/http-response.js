import { ApiError, ApiResponse } from './type-response'

export function httpResponseHandler (api, req, res, next) {
  if (api instanceof ApiError) {
    res.status(api.code).json({
      message: api.message,
      meta: api.meta || []
    })
  }
  if (api instanceof ApiResponse) {
    res.status(api.code).json({
      message: api.message,
      meta: api.meta || []
    })
  }
}
