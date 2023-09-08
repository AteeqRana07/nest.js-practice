import { Module } from '@nestjs/common';

//Controllers
import { CatsController } from './cats.controller';

//Providers
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
