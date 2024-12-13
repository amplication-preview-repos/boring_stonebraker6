import { SubscriptionCreateNestedManyWithoutSubscriptionPlansInput } from "./SubscriptionCreateNestedManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanCreateInput = {
  duration?: number | null;
  name?: string | null;
  price?: number | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionPlansInput;
};
