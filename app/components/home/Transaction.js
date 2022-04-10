import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Base, Shared } from "styles";
import { Payment, ArrowDown } from "use_svg";
import { usePrice } from "hooks";

export const Transaction = ({ id, item }) => {
  const { type, title, description, total } = item;
  const color = type === "PAYMENT" ? "#B946FF" : "#74CC9B";

  const typeRender = () => {
    switch (type) {
      case "PAYMENT":
        return (
          <Payment width={30} height={35} strokeColor={color} scale={1.6} />
        );
      case "DEBIT":
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
      <View style={{ flex: 1, alignItems: "center" }}>{typeRender()}</View>
      <View style={stl.contentText}>
        <Text style={Shared.txtNormalBlack}>{title}</Text>
        <Text style={Shared.txtNormalB}>{description}</Text>
      </View>

      <View style={stl.total}>
        <Text style={{ color: color, fontSize: Base.baseUnit * 3.5 }}>
          {usePrice(total)}
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
    elevation: 2,
    alignItems: "center",
  },
  contentText: {
    flex: 2,
  },
  total: {
    flex: 1.4,
    marginRight: 10,
    alignItems: "flex-end",
  },
});
