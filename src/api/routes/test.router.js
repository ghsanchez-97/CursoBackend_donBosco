import express from 'express'
import pkg from '../../../package.json'
import migrateService from '../../services/migrate.service'

const testRouter = express.Router()
const app = express()

app.set('pkg', pkg)

testRouter.get('/', (req, res) => {
  try {
    const info = {
      name: app.get('pkg').name,
      version: app.get('pkg').version,
      description: app.get('pkg').description,
      author: app.get('pkg').author,
      success: true
    }
    res.json(info)
  } catch (error) {
    res.send({ error })
  }
})
testRouter.get('/countries', async (req, res) => {
  try {
    const { meta, msg } = await migrateService.loadCountryInfoFromExternalAPI()
    res.send({ meta, msg })
  } catch (error) {
    console.log(error)
  }
})
export default testRouter
