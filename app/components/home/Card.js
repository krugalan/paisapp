import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Base, Shared } from "styles";

export const Card = ({ itemCard }) => {
  const { item, index } = itemCard;

  const {
    id,
    type,
    type_coin,
    icon,
    total_amount,
    number_card,
    name_card,
    expiration,
    color_coin,
    color,
  } = item;

  const row2El = () => (
    <View style={[stl.rowEl, stl.space2El]}>
      <View>
        <Text style={stl.typeTxt}>{type}</Text>
      </View>
      <View style={stl.icon}>
        <View style={stl.type}>
          <Text style={stl.typeTxt}>{icon}</Text>
        </View>
      </View>
    </View>
  );

  const bodyCard = () => (
    <>
      <View style={stl.rowEl}>
        <View>
          <Text
            style={[
              stl.typeTxt,
              stl.type_coin,
              { backgroundColor: color_coin },
            ]}
          >
            {type_coin}
          </Text>
        </View>

        <Text style={[Shared.txtNormalCard, stl.total_amount]}>
          {total_amount}
        </Text>
      </View>

      <View style={stl.rowEl}>
        <Text style={Shared.txtNormalCard}>{number_card}</Text>
      </View>
    </>
  );

  const footerCard = () => (
    <View style={[stl.rowEl, stl.space2El]}>
      <View>
        <Text style={stl.typeTxt}>{name_card}</Text>
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
          <Text style={stl.typeTxt}>{expiration}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View key={index} style={[stl.card, { backgroundColor: color }]}>
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
