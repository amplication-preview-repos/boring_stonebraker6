import * as graphql from "@nestjs/graphql";
import { VideoDownloadResolverBase } from "./base/videoDownload.resolver.base";
import { VideoDownload } from "./base/VideoDownload";
import { VideoDownloadService } from "./videoDownload.service";

@graphql.Resolver(() => VideoDownload)
export class VideoDownloadResolver extends VideoDownloadResolverBase {
  constructor(protected readonly service: VideoDownloadService) {
    super(service);
  }
}
