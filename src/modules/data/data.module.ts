import { DataService } from './data.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  components: [], // adding 'DataService' in components makes everything work
  exports: [DataService],
})
export class DataModule {}
