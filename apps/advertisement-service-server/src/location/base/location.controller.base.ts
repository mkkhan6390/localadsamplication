/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LocationService } from "../location.service";
import { LocationCreateInput } from "./LocationCreateInput";
import { Location } from "./Location";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";
import { LocationUpdateInput } from "./LocationUpdateInput";
import { AdvertisementFindManyArgs } from "../../advertisement/base/AdvertisementFindManyArgs";
import { Advertisement } from "../../advertisement/base/Advertisement";
import { AdvertisementWhereUniqueInput } from "../../advertisement/base/AdvertisementWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

export class LocationControllerBase {
  constructor(protected readonly service: LocationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Location })
  async createLocation(
    @common.Body() data: LocationCreateInput
  ): Promise<Location> {
    return await this.service.createLocation({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        country: true,
        state: true,
        city: true,
        postalCode: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Location] })
  @ApiNestedQuery(LocationFindManyArgs)
  async locations(@common.Req() request: Request): Promise<Location[]> {
    const args = plainToClass(LocationFindManyArgs, request.query);
    return this.service.locations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        country: true,
        state: true,
        city: true,
        postalCode: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async location(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    const result = await this.service.location({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        country: true,
        state: true,
        city: true,
        postalCode: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLocation(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() data: LocationUpdateInput
  ): Promise<Location | null> {
    try {
      return await this.service.updateLocation({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          country: true,
          state: true,
          city: true,
          postalCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLocation(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    try {
      return await this.service.deleteLocation({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          country: true,
          state: true,
          city: true,
          postalCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/advertisements")
  @ApiNestedQuery(AdvertisementFindManyArgs)
  async findAdvertisements(
    @common.Req() request: Request,
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Advertisement[]> {
    const query = plainToClass(AdvertisementFindManyArgs, request.query);
    const results = await this.service.findAdvertisements(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        typeField: true,
        contentUrl: true,

        business: {
          select: {
            id: true,
          },
        },

        location: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/advertisements")
  async connectAdvertisements(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: AdvertisementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      advertisements: {
        connect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/advertisements")
  async updateAdvertisements(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: AdvertisementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      advertisements: {
        set: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/advertisements")
  async disconnectAdvertisements(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: AdvertisementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      advertisements: {
        disconnect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
        emailContact: true,

        location: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  async connectUsers(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
