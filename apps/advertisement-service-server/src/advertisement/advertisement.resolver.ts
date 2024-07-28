import * as graphql from "@nestjs/graphql";
import { AdvertisementResolverBase } from "./base/advertisement.resolver.base";
import { Advertisement } from "./base/Advertisement";
import { AdvertisementService } from "./advertisement.service";

@graphql.Resolver(() => Advertisement)
export class AdvertisementResolver extends AdvertisementResolverBase {
  constructor(protected readonly service: AdvertisementService) {
    super(service);
  }
}
