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

import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { LOCATION_TITLE_FIELD } from "./LocationTitle";

export const LocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="country" source="country" />
        <TextField label="state" source="state" />
        <TextField label="city" source="city" />
        <TextField label="postalCode" source="postalCode" />
        <ReferenceManyField
          reference="Advertisement"
          target="locationId"
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
        <ReferenceManyField reference="User" target="locationId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Username" source="username" />
            <TextField label="Email" source="email" />
            <TextField label="Roles" source="roles" />
            <TextField label="emailContact" source="emailContact" />
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
