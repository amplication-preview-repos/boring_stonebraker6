import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
