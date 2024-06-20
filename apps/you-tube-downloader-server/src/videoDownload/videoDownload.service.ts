import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoDownloadServiceBase } from "./base/videoDownload.service.base";

@Injectable()
export class VideoDownloadService extends VideoDownloadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
