import { Controller, Get } from '@nestjs/common';
import { DataService } from '../data/data.service';

@Controller('other')
export class OtherController {
  constructor(private readonly dataService: DataService) {}
  @Get()
  getData() {
    return this.dataService.getData();
  }
}
