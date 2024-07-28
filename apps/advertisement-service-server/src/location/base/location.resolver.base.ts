/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Location } from "./Location";
import { LocationCountArgs } from "./LocationCountArgs";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationFindUniqueArgs } from "./LocationFindUniqueArgs";
import { CreateLocationArgs } from "./CreateLocationArgs";
import { UpdateLocationArgs } from "./UpdateLocationArgs";
import { DeleteLocationArgs } from "./DeleteLocationArgs";
import { AdvertisementFindManyArgs } from "../../advertisement/base/AdvertisementFindManyArgs";
import { Advertisement } from "../../advertisement/base/Advertisement";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { LocationService } from "../location.service";
@graphql.Resolver(() => Location)
export class LocationResolverBase {
  constructor(protected readonly service: LocationService) {}

  async _locationsMeta(
    @graphql.Args() args: LocationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Location])
  async locations(
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    return this.service.locations(args);
  }

  @graphql.Query(() => Location, { nullable: true })
  async location(
    @graphql.Args() args: LocationFindUniqueArgs
  ): Promise<Location | null> {
    const result = await this.service.location(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Location)
  async createLocation(
    @graphql.Args() args: CreateLocationArgs
  ): Promise<Location> {
    return await this.service.createLocation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Location)
  async updateLocation(
    @graphql.Args() args: UpdateLocationArgs
  ): Promise<Location | null> {
    try {
      return await this.service.updateLocation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Location)
  async deleteLocation(
    @graphql.Args() args: DeleteLocationArgs
  ): Promise<Location | null> {
    try {
      return await this.service.deleteLocation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Advertisement], { name: "advertisements" })
  async findAdvertisements(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: AdvertisementFindManyArgs
  ): Promise<Advertisement[]> {
    const results = await this.service.findAdvertisements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [User], { name: "users" })
  async findUsers(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
