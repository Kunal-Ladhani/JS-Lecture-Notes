import { MessagesService } from '../services/messages.service';
export declare class MessagesController {
    private readonly messageService;
    constructor(messageService: MessagesService);
    private listMessages;
    private getMessage;
    private createMessage;
}
