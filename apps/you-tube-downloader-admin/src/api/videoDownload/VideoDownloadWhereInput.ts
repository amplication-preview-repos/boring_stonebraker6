import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VideoDownloadWhereInput = {
  downloadStatus?: "Option1";
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  videoUrl?: StringNullableFilter;
};
