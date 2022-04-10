import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "session_screen";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={navScreenOptions}>
      <Stack.Screen component={SignInScreen} name="Login" />
    </Stack.Navigator>
  );
}

const navScreenOptions = {
  gestureEnabled: false,
  headerShown: false,
  contentStyle: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
};
