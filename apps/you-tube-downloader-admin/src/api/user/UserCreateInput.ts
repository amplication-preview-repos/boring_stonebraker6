import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";
import { VideoDownloadCreateNestedManyWithoutUsersInput } from "./VideoDownloadCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  username: string;
  videoDownloads?: VideoDownloadCreateNestedManyWithoutUsersInput;
};
