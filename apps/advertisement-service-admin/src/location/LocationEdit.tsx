import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AdvertisementTitle } from "../advertisement/AdvertisementTitle";
import { UserTitle } from "../user/UserTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <TextInput label="state" source="state" />
        <TextInput label="city" source="city" />
        <TextInput label="postalCode" source="postalCode" />
        <ReferenceArrayInput
          source="advertisements"
          reference="Advertisement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdvertisementTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
