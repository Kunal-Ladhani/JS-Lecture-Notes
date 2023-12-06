export declare class MessagesRepository {
    create(message: string): Promise<void>;
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
}
