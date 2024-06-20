import { VideoDownload as TVideoDownload } from "../api/videoDownload/VideoDownload";

export const VIDEODOWNLOAD_TITLE_FIELD = "id";

export const VideoDownloadTitle = (record: TVideoDownload): string => {
  return record.id?.toString() || String(record.id);
};
