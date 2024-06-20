import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";
import { VideoDownload } from "../videoDownload/VideoDownload";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
  videoDownloads?: Array<VideoDownload>;
};
