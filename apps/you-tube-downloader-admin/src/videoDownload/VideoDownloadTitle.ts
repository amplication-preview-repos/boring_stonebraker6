import { VideoDownload as TVideoDownload } from "../api/videoDownload/VideoDownload";

export const VIDEODOWNLOAD_TITLE_FIELD = "videoUrl";

export const VideoDownloadTitle = (record: TVideoDownload): string => {
  return record.videoUrl?.toString() || String(record.id);
};
