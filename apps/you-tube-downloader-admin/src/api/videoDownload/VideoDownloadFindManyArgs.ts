import { VideoDownloadWhereInput } from "./VideoDownloadWhereInput";
import { VideoDownloadOrderByInput } from "./VideoDownloadOrderByInput";

export type VideoDownloadFindManyArgs = {
  where?: VideoDownloadWhereInput;
  orderBy?: Array<VideoDownloadOrderByInput>;
  skip?: number;
  take?: number;
};
