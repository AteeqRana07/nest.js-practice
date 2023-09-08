import { Module } from '@nestjs/common';

//Modules
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [CatsModule],
})
export class AppModule {}
