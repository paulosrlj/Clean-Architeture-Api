import request from 'supertest'
import { MongoHelper } from '../../infra/db/postgres/helpers/mongodb-helper'
import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGODB_URL_TEST ?? '')
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  // Antes de cada teste, zerar as tabelas do BD
  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Paulo',
        email: 'paulo@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
