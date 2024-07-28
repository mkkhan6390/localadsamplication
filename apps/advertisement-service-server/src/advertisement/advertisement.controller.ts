import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdvertisementService } from "./advertisement.service";
import { AdvertisementControllerBase } from "./base/advertisement.controller.base";

@swagger.ApiTags("advertisements")
@common.Controller("advertisements")
export class AdvertisementController extends AdvertisementControllerBase {
  constructor(protected readonly service: AdvertisementService) {
    super(service);
  }
}
