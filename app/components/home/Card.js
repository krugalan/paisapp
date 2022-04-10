import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Base, Shared } from "styles";
import { CardMaster } from "use_svg";
import { usePrice } from "hooks";

export const Card = ({ itemCard }) => {
  console.log("itemCard: ", itemCard);
  const { item, index } = itemCard;
  const colores = [
    { color_coin: "#89A5FB", color: "#005CEE" },
    { color_coin: "#d29393", color: "#F9B7B7" },
    { color_coin: "#709372", color: "#74CC9B" },
  ];

  const { id, number, balance, symbol, expDate } = item;

  const row2El = () => (
    <View style={[stl.rowEl, stl.space2El]}>
      <View>
        <Text style={stl.typeTxt}>Balance</Text>
      </View>
      <View style={stl.icon}>
        <View style={stl.type}>
          <CardMaster width={35} height={25} />
        </View>
      </View>
    </View>
  );

  const numberFormatCard = () => {
    let aux = number.split(" ");    
    return `**** **** **** ${aux[aux.length - 1]}`;
  };

  const bodyCard = () => (
    <>
      <View style={stl.rowEl}>
        <View>
          <Text
            style={[
              stl.typeTxt,
              stl.type_coin,
              { backgroundColor: colores[id - 1].color_coin },
            ]}
          >
            {symbol}
          </Text>
        </View>

        <Text style={[Shared.txtNormalCard, stl.total_amount]}>
          {usePrice(balance)}
        </Text>
      </View>

      <View style={stl.rowEl}>
        <Text style={Shared.txtNormalCard}>{numberFormatCard()}</Text>
      </View>
    </>
  );

  const footerCard = () => (
    <View style={[stl.rowEl, stl.space2El]}>
      <View>
        <Text style={stl.typeTxt}>Soy Paisanx</Text>
      </View>
      <View style={stl.icon}>
        <View style={stl.type}>
          <Text
            style={{
              fontSize: Base.txtXSmall,
              color: "white",
            }}
          >
            Exp. Date
          </Text>
          <Text style={stl.typeTxt}>{expDate}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View
      key={index}
      style={[stl.card, , { backgroundColor: colores[id - 1].color }]}
    >
      {row2El()}
      {bodyCard()}
      {footerCard()}
    </View>
  );
};

const stl = StyleSheet.create({
  card: {
    paddingHorizontal: Base.baseUnit * 4,
    paddingVertical: Base.baseUnit,
    width: Base.screenWidth * 0.85,
    height: 190,
    borderRadius: 24,
    marginLeft: Base.screenWidth * 0.05,
    marginBottom: Base.screenWidth * 0.015,
    elevation: 5,
  },
  rowEl: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  typeTxt: {
    fontSize: Base.txtSmall,
    color: "white",
  },

  icon: {},
  space2El: {
    justifyContent: "space-between",
  },
  type_coin: {
    fontWeight: "bold",
    borderRadius: Base.baseUnit * 1.5,
    padding: Base.baseUnit,
  },
  total_amount: {
    padding: Base.baseUnit,
  },
});
