import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { LogoPaisapp } from "use_svg";

export const SignInScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <LogoPaisapp />
      </View>
      <View>
        <Text>SignInScreen</Text>
      </View>
    </SafeAreaView>
  );
};
