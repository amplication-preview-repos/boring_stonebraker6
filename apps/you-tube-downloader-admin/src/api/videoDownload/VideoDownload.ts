import { User } from "../user/User";

export type VideoDownload = {
  createdAt: Date;
  downloadStatus?: "Option1" | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  videoUrl: string | null;
};
