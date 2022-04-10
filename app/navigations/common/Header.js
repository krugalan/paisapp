import React from "react";
import { StyleSheet, View, SafeAreaView, Image, Text } from "react-native";

import { Base,Colors } from "styles";
import { Search, Notification } from "use_svg";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView style={stl.safeAreaView}>
      <View style={stl.container}>
        <View style={stl.lContainer}>
          <Text style={stl.subTitle}>Hola</Text>
          <Text style={stl.title}>Soy Paisanx</Text>
        </View>

        <View style={stl.rContainer}>
          <View style={stl.icons}>
            <Search
              height={Base.baseUnit * 6}
              width={Base.baseUnit * 6}
              scale={Base.baseUnit / 4}
              strokeWidth={2}
            />
            <Notification
              height={Base.baseUnit * 6}
              width={Base.baseUnit * 6}
              scale={Base.baseUnit / 4}
              strokeWidth={2}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stl = StyleSheet.create({
  safeAreaView: {
    height: Base.screenHeight * 0.06,
    justifyContent: "center",
    marginVertical: Base.screenHeight * 0.06,
    paddingHorizontal: Base.baseUnit * 5,
  },
  title: {
    fontSize: Base.baseUnit * 5,
  },
  subTitle: {
    fontSize: Base.baseUnit * 4,
    color: Colors.secondary.regular,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lContainer: {
    flex: 3,
  },
  rContainer: {
    flex: 1,
  },
});

export default Header;
