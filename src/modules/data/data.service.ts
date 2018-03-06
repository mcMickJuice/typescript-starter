import { Component } from '@nestjs/common';

@Component()
export class DataService {
  getData(): string[] {
    return ['1', '2', '3'];
  }
}
