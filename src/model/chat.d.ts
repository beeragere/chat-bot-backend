export interface ChatDetails {
  id: number;
  sender: "string";
  message: string;
}
export interface Chat {
  members: string[];
  chats: ChatDetails[];
}
