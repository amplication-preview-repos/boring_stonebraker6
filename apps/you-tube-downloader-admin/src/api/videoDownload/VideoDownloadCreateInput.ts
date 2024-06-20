import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoDownloadCreateInput = {
  downloadStatus?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  videoUrl?: string | null;
};
