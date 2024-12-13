import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { VideoDownloadListRelationFilter } from "../videoDownload/VideoDownloadListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  username?: StringFilter;
  videoDownloads?: VideoDownloadListRelationFilter;
};
