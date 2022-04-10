import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Base, Shared } from "styles";
import { Payment, ArrowDown } from "use_svg";

export const Transaction = ({ id, item }) => {
  const { icon, title, short_description, amount, color } = item;

  const iconRender = () => {
    switch (icon) {
      case "Payment":
        return (
          <Payment width={30} height={30} strokeColor={color} scale={1.6} />
        );
      case "collect":
        return (
          <ArrowDown width={30} height={30} strokeColor={color} scale={1.4} />
        );

      default:
        return (
          <Payment width={30} height={30} strokeColor={color} scale={1.5} />
        );
    }
  };

  return (
    <View key={id} style={stl.card}>
      <View style={{ flex: 1, alignItems: "center" }}>{iconRender()}</View>
      <View style={stl.contentText}>
        <Text style={Shared.txtNormalBlack}>{title}</Text>
        <Text style={Shared.txtNormalB}>{short_description}</Text>
      </View>

      <View style={stl.amount}>
        <Text style={{ color: color, fontSize: Base.baseUnit * 3.5 }}>
          {amount}
        </Text>
      </View>
    </View>
  );
};

const stl = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingHorizontal: Base.baseUnit * 2,    
    width: Base.screenWidth * 0.95,
    height: Base.baseUnit * 20,
    borderRadius: 20,
    marginBottom: 5,
    elevation: 1.8,
    alignItems: "center",
  },
  contentText: {
    flex: 2,
  },
  amount: {
    flex: 1.4,
    marginRight: 10,
    alignItems: "flex-end",
  },
});
