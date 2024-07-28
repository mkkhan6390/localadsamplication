import { Module } from "@nestjs/common";
import { AdvertisementModuleBase } from "./base/advertisement.module.base";
import { AdvertisementService } from "./advertisement.service";
import { AdvertisementController } from "./advertisement.controller";
import { AdvertisementResolver } from "./advertisement.resolver";

@Module({
  imports: [AdvertisementModuleBase],
  controllers: [AdvertisementController],
  providers: [AdvertisementService, AdvertisementResolver],
  exports: [AdvertisementService],
})
export class AdvertisementModule {}
