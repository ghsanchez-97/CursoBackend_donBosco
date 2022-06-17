import 'dotenv/config'
export default {
  BASEAPI: process.env.BASEAPI || '/curso/api',
  PORT: process.env.PORT || 5200,
  DB: {
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DIALECT: process.env.DB_DIALECT
  },
  NODE_ENV: process.env.NODE_ENV
}
