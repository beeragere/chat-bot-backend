//main libraries
import { getClient } from "../database/mongo.init";

//user defined
import { ErrorHandler, ErrorType } from "../handlers/errorHandler";

//interfaces
import { Chat } from "../model/chat";

export async function getUserMessages(userId: string) {
  let client = await getClient();
  if (!client)
    throw new ErrorHandler("db", "client not connected", ErrorType.DB);

  let database = client.db("chatBox");
  let chat = database.collection<Chat>("chats");

  let data = await chat.find({}).toArray();

  console.log(data);
}
