import { Module } from '@nestjs/common';
import { DonorsService } from './donors.service';
import { DonorsController } from './donors.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DonorsController],
  providers: [DonorsService, PrismaService],
})
export class DonorsModule {}
