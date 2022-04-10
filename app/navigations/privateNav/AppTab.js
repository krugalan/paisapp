import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ContactsScreen } from "contacts_screen";
import { HomeStack } from "./navStack";
import Header from "../common/Header";
import { Home, Document, LogOut } from "use_svg";
import { Base } from "styles";

export default function AppTab() {
  const Tab = createBottomTabNavigator();

  const screenOptions = (route, color) => {
    let iconType;
    let icon;

    switch (route.name) {
      case "Contactos":
        iconType = "icon";
        icon = (
          <Document
            width={30}
            height={30}
            scale={1}
            stroke={color}
            strokeColor={color}
          />
        );
        break;
      case "Salir":
        iconType = "icon";
        icon = (
          <LogOut
            width={30}
            height={30}
            scale={1}
            stroke={color}
            strokeColor={color}
          />
        );
        break;
      default:
        iconType = "icon";
        icon = (
          <Home
            width={30}
            height={30}
            scale={1}
            stroke={color}
            strokeColor={color}
          />
        );
        break;
    }

    return icon;
  };

  return (
    <Tab.Navigator
      contentStyle={{
        backgroundColor: "red",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        tabBarStyle: { height: Base.screenHeight * 0.09 },
      })}
      tabBarOptions={{
        inactiveTintColor: "#071529",
        activeTintColor: "#6C8FF8",
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
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
