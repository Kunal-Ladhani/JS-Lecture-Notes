import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repository/messages.repository';

// this decorator marks class for reg inside DI container
@Injectable()
export class MessagesService {
    // Serivce is creating its own dependecny.
    // DO NOT DO IT ACTUALLY! USE DI.
    constructor(private readonly messagesRepo: MessagesRepository) { }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(message: string) {
        return this.messagesRepo.create(message);
    }
}
