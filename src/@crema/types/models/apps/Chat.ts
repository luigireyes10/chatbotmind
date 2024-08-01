export enum MessageType {
  MEDIA = 1,
  TEXT = 2,
}

export type MemberType = {
  id: number;
  name: string;
  image: string;
  status: string;
  username?: string;
};

export type ConnectionObjType = {
  contactId?:{
    _id:string;
    username:string;
    status:string;
  };
  chatId:string;
  _id:string;
  id: number;
  channelId: number;
  name: string;
  image: string;
  photoURL?: string;
  email?: string;
  status: string;
  username: string;
  displayName?: string;
  isGroup?: boolean;
  members?: MemberType[];
  messageCount?: number;
  lastMessage?: {
    id: number;
    message: string;
    type: string;
    time: string;
  } | null;
};

export type MediaObjType = {

  url: string;
  mime_type: string;
  file_name: string;
  file_size: number;
  _id: string;
};

export type MessageDataObjType = {
  find(arg0: (message: any) => boolean): unknown;
  find(arg0: (media: any) => boolean): unknown;
  file?: any,
  _id(_id: any): unknown;
  to:string;
  from:string;
  id?: number;
  sender?: number | string;
  message?: string;
  message_type: MessageType;
  time?: string;
  edited?: boolean;
  media?: MediaObjType[];
};

export type MessageObjType = {
  channelId: number;
  messageData: MessageDataObjType[];
};

export type ChatApiResponseType = {
  userMessages: MessageObjType | null;
  connectionData: MessageDataObjType;
};
