import React from "react";
import { FlatList, Text, View } from "react-native";
import { Service } from "./Service";
import { Shared } from "styles";

const arrServices = [
  {
    id: 1,
    title: "Billetera",
    icon: "billetera",
    color: "#E4FFF0",
  },
  {
    id: 2,
    title: "Transferir",
    icon: "transferencia",
    color: "#FEEAD4",
  },
  {
    id: 3,
    title: "Pagar",
    icon: "pagar",
    color: "#EEE3FF",
  },
  {
    id: 4,
    title: "Recargar",
    icon: "recargar",
    color: "#CAF0FF",
  },
];

export const Services = () => {
  return (
    <View style={{ display: "flex" }}>
      <View style={Shared.safeAreaView}>
        <Text style={Shared.txtBigB}>Servicios</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={arrServices}
        renderItem={(data) => <Service itemService={data} />}
        contentContainerStyle={{
          flex: 1,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      />
    </View>
  );
};
