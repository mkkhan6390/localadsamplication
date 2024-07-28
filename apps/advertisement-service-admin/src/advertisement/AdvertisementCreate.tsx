import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BusinessTitle } from "../business/BusinessTitle";
import { LocationTitle } from "../location/LocationTitle";

export const AdvertisementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <TextInput label="contentURL" source="contentUrl" />
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="Business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
