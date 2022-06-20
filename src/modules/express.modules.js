import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { json, urlencoded } from 'express'
import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import middleware from 'i18next-http-middleware'
import { httpResponseHandler } from '../hooks/http/http-response'
import { ApiError } from '../hooks/http/type-response'

export default async (app, routes = []) => {
  if (!app || !Array.isArray(routes)) {
    return
  }
  app.set('trust proxy')
  app.disabled('x-powered-by')
  // Middlewares
  i18next.use(Backend).use(middleware.LanguageDetector).init({
    fallbackLng: 'en',
    backend: {
      // eslint-disable-next-line n/no-path-concat
      loadPath: `${__dirname}/../locales/{{lng}}/translation.json`
    }
  })
  app.use(middleware.handle(i18next))
  app.use(cors({ origin: '*' }))
  app.use(helmet())
  app.use(morgan('dev'))
  app.use(json())
  app.use(urlencoded({ extended: true }))
  // Define routes
  for (const route of routes) {
    const { path = null, controller = null } = route
    if (path && controller) {
      app.use(path, controller)
    }
  }
  //
  app.use((req, res, next) => {
    const error = new Error('Internal server error Guy')
    next(ApiError.internal(error.message))
  })
  app.use(httpResponseHandler)
  return app
}
