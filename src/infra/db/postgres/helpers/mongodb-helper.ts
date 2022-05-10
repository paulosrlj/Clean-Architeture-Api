import { MongoClient, Collection, Db } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    const db = this.client.db(name) as Db
    return db.collection(name)
  }
}
