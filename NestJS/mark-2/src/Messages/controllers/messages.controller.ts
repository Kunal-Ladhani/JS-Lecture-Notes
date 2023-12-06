import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { createMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../services/messages.service';

@Controller('/messages')    // class decorator
export class MessagesController {
    constructor(private readonly messageService: MessagesService) { }

    @Get()  // method decorator
    private listMessages() {
        return this.messageService.findAll();
    }

    @Get('/:id')
    private async getMessage(@Param('id') id: string) {
        // body, param is argument decorator
        const message = await this.messageService.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found');
        }
        return message;
    }

    @Post()
    private createMessage(@Body() body: createMessageDto) {
        return this.messageService.create(body.content);
    }
}
