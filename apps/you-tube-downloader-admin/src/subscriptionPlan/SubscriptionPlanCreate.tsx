import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const SubscriptionPlanCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
