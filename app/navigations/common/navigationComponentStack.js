import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BackIcon from "./backIcon";

export default ({ data, Header }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {data.length &&
        data.map((screen) => (
          <Stack.Screen
            component={screen.component}
            key={screen.name}
            name={screen.name}
            options={({ navigation }) => ({
              headerShown: false, //screen.headerShown,
            })}
          />
        ))}
    </Stack.Navigator>
  );
};
