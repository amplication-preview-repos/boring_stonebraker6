import { SortOrder } from "../../util/SortOrder";

export type VideoDownloadOrderByInput = {
  createdAt?: SortOrder;
  downloadStatus?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  videoUrl?: SortOrder;
};
