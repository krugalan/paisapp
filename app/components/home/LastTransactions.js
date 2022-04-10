import React from "react";
import { Text, View } from "react-native";

import { Shared } from "styles";
import { Transaction } from "./Transaction";

const transactions = [
  {
    id: 1,
    icon: "payment",
    title: "Adobe",
    short_description: "Pago de suscripción",
    amount: "$125.00",
    color: "#B946FF",
  },
  {
    id: 2,
    icon: "collect",
    title: "Juan David",
    short_description: "Pago recibido",
    amount: "$95.00",
    color: "#74CC9B",
  },
  {
    id: 3,
    icon: "collect",
    title: "Alan Krug",
    short_description: "Pago recibido",
    amount: "$560.50",
    color: "#74CC9B",
  },
];

export const LastTransactions = () => {
  return (
    <View style={{ display: "flex", marginVertical: 15 }}>
      <View style={Shared.safeAreaView}>
        <Text style={Shared.txtBigB}>Últimas transacciones</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        {transactions.map((el, index) => (
          <Transaction id={index} item={el} />
        ))}
      </View>
    </View>
  );
};
