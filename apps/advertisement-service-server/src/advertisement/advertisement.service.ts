import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvertisementServiceBase } from "./base/advertisement.service.base";

@Injectable()
export class AdvertisementService extends AdvertisementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
