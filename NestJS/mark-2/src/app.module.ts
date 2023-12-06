import { Module } from '@nestjs/common';
import { AuthModule } from './auth/module/auth.module';
import { MessagesModule } from './Messages/messages.module';

// Module - class that is annotated with @Module decorator.
// help in organizing your app into sub-modules.
@Module({
  imports: [AuthModule, MessagesModule]
})
export class AppModule { }

// decorator is function that adds metadata to class or function.
// nest js has a generator
  