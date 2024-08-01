
import {create} from 'zustand';
import type { Message } from '../types/Message';
import type { User } from '../types/User';

type ChatStore = {
    messages: Message[];
    userChat: User | null;
    addMessage: (message: Message) => void;
    clearMessages: () => void;
    setMessages: (messages: Message[]) => void;
    setUserChat: (userChat: User) => void;
}

const useChatStore= create<ChatStore>((set) => ({
    messages: [],
    userChat: null,
    setMessages: (messages: Message[]) => set({messages}),
    setUserChat: (userChat: User) => set({userChat}),
    addMessage: (message: Message) => set((state) => ({messages: [...state.messages, message]})),
    clearMessages: () => set({messages: []}),
    }));


export default useChatStore;
