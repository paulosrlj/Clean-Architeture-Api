import { WithId } from 'mongodb'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/Account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongodb-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel | any> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const accountId = result.insertedId
    const account = await accountCollection.findOne(accountId)

    const { _id, ...accountWithoutId } = account as WithId<Document>

    return Object.assign({}, accountWithoutId, { id: _id })
  }
}
