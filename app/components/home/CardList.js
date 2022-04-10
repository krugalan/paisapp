import React from "react";
import { FlatList, Text, View } from "react-native";
import { Card } from "./Card";

const arrCards = [
  {
    id: 1,
    type: "Balance",
    icon: "icon",
    type_coin: "USD",
    total_amount: "978.85",
    number_card: "**** **** **** 1234",
    name_card: "Soy Paisanx",
    expiration: "02/30",
    color_coin: "#89A5FB",
    color: "#005CEE",
  },
  {
    id: 2,
    type: "Visa",
    icon: "icon",
    type_coin: "EUR",
    total_amount: "8.50",
    number_card: "**** **** **** 2456",
    name_card: "Soy Paisanx X",
    expiration: "12/28",
    color_coin: "#d29393",
    color: "#F9B7B7",
  },
  {
    id: 3,
    type: "Master Card",
    icon: "icon",
    type_coin: "ARS",
    total_amount: "9800.00",
    number_card: "**** **** **** 1234",
    name_card: "Soy Paisanx Z",
    expiration: "03/25",
    color_coin: "#709372",
    color: "#74CC9B",
  },
];

export const CardList = () => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={arrCards}
        renderItem={(data) => <Card itemCard={data} />}
      />
    </View>
  );
};
