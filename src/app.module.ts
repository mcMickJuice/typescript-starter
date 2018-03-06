import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OtherModule } from './modules/other/other.module';

@Module({
  imports: [OtherModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
