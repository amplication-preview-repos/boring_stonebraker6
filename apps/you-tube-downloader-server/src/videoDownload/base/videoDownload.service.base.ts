/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  VideoDownload as PrismaVideoDownload,
  User as PrismaUser,
} from "@prisma/client";

export class VideoDownloadServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VideoDownloadCountArgs, "select">
  ): Promise<number> {
    return this.prisma.videoDownload.count(args);
  }

  async videoDownloads(
    args: Prisma.VideoDownloadFindManyArgs
  ): Promise<PrismaVideoDownload[]> {
    return this.prisma.videoDownload.findMany(args);
  }
  async videoDownload(
    args: Prisma.VideoDownloadFindUniqueArgs
  ): Promise<PrismaVideoDownload | null> {
    return this.prisma.videoDownload.findUnique(args);
  }
  async createVideoDownload(
    args: Prisma.VideoDownloadCreateArgs
  ): Promise<PrismaVideoDownload> {
    return this.prisma.videoDownload.create(args);
  }
  async updateVideoDownload(
    args: Prisma.VideoDownloadUpdateArgs
  ): Promise<PrismaVideoDownload> {
    return this.prisma.videoDownload.update(args);
  }
  async deleteVideoDownload(
    args: Prisma.VideoDownloadDeleteArgs
  ): Promise<PrismaVideoDownload> {
    return this.prisma.videoDownload.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.videoDownload
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
