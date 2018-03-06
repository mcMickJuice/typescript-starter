import { DataModule } from '../data/data.module';
import { OtherController } from './other.controller';
import { Module } from '@nestjs/common';
import { DataService } from '../data/data.service';

@Module({
  imports: [DataModule],
  exports: [],
  controllers: [OtherController],
  components: [],
})
export class OtherModule {}
