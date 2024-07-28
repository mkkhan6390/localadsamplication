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
import { AdvertisementService } from "../advertisement.service";
import { AdvertisementCreateInput } from "./AdvertisementCreateInput";
import { Advertisement } from "./Advertisement";
import { AdvertisementFindManyArgs } from "./AdvertisementFindManyArgs";
import { AdvertisementWhereUniqueInput } from "./AdvertisementWhereUniqueInput";
import { AdvertisementUpdateInput } from "./AdvertisementUpdateInput";

export class AdvertisementControllerBase {
  constructor(protected readonly service: AdvertisementService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Advertisement })
  async createAdvertisement(
    @common.Body() data: AdvertisementCreateInput
  ): Promise<Advertisement> {
    return await this.service.createAdvertisement({
      data: {
        ...data,

        business: data.business
          ? {
              connect: data.business,
            }
          : undefined,

        location: data.location
          ? {
              connect: data.location,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Advertisement] })
  @ApiNestedQuery(AdvertisementFindManyArgs)
  async advertisements(
    @common.Req() request: Request
  ): Promise<Advertisement[]> {
    const args = plainToClass(AdvertisementFindManyArgs, request.query);
    return this.service.advertisements({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Advertisement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async advertisement(
    @common.Param() params: AdvertisementWhereUniqueInput
  ): Promise<Advertisement | null> {
    const result = await this.service.advertisement({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Advertisement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAdvertisement(
    @common.Param() params: AdvertisementWhereUniqueInput,
    @common.Body() data: AdvertisementUpdateInput
  ): Promise<Advertisement | null> {
    try {
      return await this.service.updateAdvertisement({
        where: params,
        data: {
          ...data,

          business: data.business
            ? {
                connect: data.business,
              }
            : undefined,

          location: data.location
            ? {
                connect: data.location,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Advertisement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAdvertisement(
    @common.Param() params: AdvertisementWhereUniqueInput
  ): Promise<Advertisement | null> {
    try {
      return await this.service.deleteAdvertisement({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
