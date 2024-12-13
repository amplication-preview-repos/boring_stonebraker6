import { Module } from "@nestjs/common";
import { VideoDownloadModuleBase } from "./base/videoDownload.module.base";
import { VideoDownloadService } from "./videoDownload.service";
import { VideoDownloadController } from "./videoDownload.controller";
import { VideoDownloadResolver } from "./videoDownload.resolver";

@Module({
  imports: [VideoDownloadModuleBase],
  controllers: [VideoDownloadController],
  providers: [VideoDownloadService, VideoDownloadResolver],
  exports: [VideoDownloadService],
})
export class VideoDownloadModule {}
