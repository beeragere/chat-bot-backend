import { MongoClient } from "mongodb";

export function createConnection() {
  try {
    const uri = process.env.MONGODB_CLUSTER;
    let client: MongoClient;
    if (uri) {
      client = new MongoClient(uri);
      return client;
    } else {
      throw new Error("process.env not working");
    }
  } catch (err) {
    console.log("error connecting to db", err);
  }
}
