import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ContactsScreen } from "contacts_screen";
import { HomeStack } from "./navStack";
import Header from "../common/Header";
import { SafeAreaView, View } from "react-native";

export default function AppTab() {
  const Tab = createBottomTabNavigator();

  return (
   
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            header: Header,
            ...navScreenOptions,
          }}
        />
        <Tab.Screen name="Contactos" component={ContactsScreen} />
        <Tab.Screen name="Salir" component={ContactsScreen} />
      </Tab.Navigator>
    
  );
}

const navScreenOptions = {
  gestureEnabled: false,

  contentStyle: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
};
