import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Base, Shared } from "styles";
import { Payment, ArrowDown } from "use_svg";

export const ContactItem = ({ item }) => {
  const { id, name, lastName, phone, contacted } = item;

  const iconRender = () => {
    return (
      <Text
        style={{
          color: "#68C6E5",
          fontSize: Base.baseUnit * 4,
        }}
      >
        {initalName()}
      </Text>
    );
  };

  const initalName = () => {
    return name.charAt(0) + lastName.charAt(0);
  };

  return (
    <View key={id} style={stl.card}>
      <View style={stl.init}>{iconRender()}</View>
      <View style={stl.contentText}>
        <Text style={Shared.txtNormalBlack}>{`${name} ${lastName}`}</Text>
        <Text style={[Shared.txtNormalB, { color: "#AAAAAA" }]}>{phone}</Text>
      </View>
    </View>
  );
};

const stl = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingHorizontal: Base.baseUnit * 3,
    width: Base.screenWidth * 0.95,
    height: Base.baseUnit * 22,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 2,
    alignItems: "center",
  },
  contentText: {
    flex: 5,
  },
  init: {
    flex: 1,
    marginRight: Base.baseUnit * 2,
    alignItems: "center",
    backgroundColor: "#CAF0FF",
    height: "50%",
    borderRadius: 12,
    justifyContent: "center",
  },
  amount: {
    flex: 1.4,
    marginRight: 10,
    alignItems: "flex-end",
  },
});
