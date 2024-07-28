import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "./BusinessTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const BusinessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="contactDetails" source="contactDetails" />
        <ReferenceManyField
          reference="Advertisement"
          target="businessId"
          label="Advertisements"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="type" source="typeField" />
            <TextField label="contentURL" source="contentUrl" />
            <ReferenceField
              label="Business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
