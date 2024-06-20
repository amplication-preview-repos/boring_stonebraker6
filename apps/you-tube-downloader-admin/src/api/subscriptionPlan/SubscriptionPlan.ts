import { Subscription } from "../subscription/Subscription";

export type SubscriptionPlan = {
  createdAt: Date;
  duration: number | null;
  id: string;
  name: string | null;
  price: number | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
