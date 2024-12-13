import { SubscriptionUpdateManyWithoutSubscriptionPlansInput } from "./SubscriptionUpdateManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanUpdateInput = {
  duration?: number | null;
  name?: string | null;
  price?: number | null;
  subscriptions?: SubscriptionUpdateManyWithoutSubscriptionPlansInput;
};
