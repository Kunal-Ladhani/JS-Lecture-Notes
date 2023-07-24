import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { HttpUtil } from './http-util';

@Global()
@Module({
  imports: [HttpModule.register({})],
  providers: [HttpUtil],
  exports: [HttpUtil, HttpModule],
})
export class HttpUtilModule {}
