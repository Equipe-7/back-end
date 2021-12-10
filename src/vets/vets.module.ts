import { Module } from '@nestjs/common';
import { VetsService } from './vets.service';
import { VetsController } from './vets.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VetsController],
  providers: [VetsService, PrismaService]
})
export class VetsModule {}
