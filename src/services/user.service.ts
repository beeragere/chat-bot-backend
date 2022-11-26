//main libraries
import { getClient } from "../database/mongo.init";

//user defined
import { ErrorHandler, ErrorType } from "../handlers/errorHandler";

//interface
import { User } from "../model/user";

export async function getAllUsers(): Promise<User[]> {
  let client = await getClient();
  if (!client)
    throw new ErrorHandler("db", "client not connected", ErrorType.DB);

  let database = client.db("chatBox");
  let chat = database.collection<User>("users");

  return await chat.find({}).toArray();
}
