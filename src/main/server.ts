import { MongoHelper } from '../infra/db/mongodb/helpers/mongodb-helper'
import app from './config/app'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    app.listen(env.port, () => console.log(`Server running at localhost:${env.port}/`))
  })
  .catch(console.error)
