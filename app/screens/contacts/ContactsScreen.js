import React from "react";
import { ScrollView } from "react-native";
import { ContactList } from "contact_component";

export const ContactsScreen = (props) => {
  return (
    <ScrollView>
      <ContactList />
    </ScrollView>
  );
};
