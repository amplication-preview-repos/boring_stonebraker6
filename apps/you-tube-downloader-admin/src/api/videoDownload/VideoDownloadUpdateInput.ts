import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoDownloadUpdateInput = {
  downloadStatus?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  videoUrl?: string | null;
};
