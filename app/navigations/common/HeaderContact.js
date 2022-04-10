import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { Base, Colors } from "styles";
import { ArrowBack } from "use_svg";

const HeaderPage = (props) => {
  const navigation = useNavigation();
  const { name } = props.route;

  return (
    <SafeAreaView style={stl.safeAreaView}>
      <View style={stl.container}>
        <View style={stl.rContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={stl.icons}
          >
            <ArrowBack
              width={20}
              height={20}
              scale={Base.baseUnit / 5}
              strokeWidth={2}
              strokeColor={"black"}
            />
          </TouchableOpacity>
        </View>

        <View style={stl.lContainer}>
          <Text style={stl.title}>{name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stl = StyleSheet.create({
  safeAreaView: {
    height: Base.screenHeight * 0.12,
    justifyContent: "center",    
    marginVertical: Base.baseUnit * 6,
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
    alignItems: "center",
  },
  lContainer: {
    flex: 6,
  },
  rContainer: {
    flex: 1,
  },
});

export default HeaderPage;
