import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const VideoDownloadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="downloadStatus"
          label="downloadStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};
