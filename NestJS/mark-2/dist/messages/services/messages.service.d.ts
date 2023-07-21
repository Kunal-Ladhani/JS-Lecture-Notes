import { MessagesRepository } from '../repository/messages.repository';
export declare class MessagesService {
    private readonly messagesRepo;
    constructor(messagesRepo: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(message: string): Promise<void>;
}
