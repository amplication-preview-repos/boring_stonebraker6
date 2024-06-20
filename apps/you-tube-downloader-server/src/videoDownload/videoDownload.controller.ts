import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoDownloadService } from "./videoDownload.service";
import { VideoDownloadControllerBase } from "./base/videoDownload.controller.base";

@swagger.ApiTags("videoDownloads")
@common.Controller("videoDownloads")
export class VideoDownloadController extends VideoDownloadControllerBase {
  constructor(protected readonly service: VideoDownloadService) {
    super(service);
  }
}
