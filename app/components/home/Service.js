import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Base, Shared } from "styles";
import { Wallet, Transfer, Topup, Pay } from "use_svg";

const measure = Base.screenWidth * 0.2;

export const Service = ({ itemService }) => {
  const { item, index } = itemService;

  const { id, title, icon, color } = item;

  const iconRender = () => {
    switch (icon) {
      case "billetera":
        return (
          <Wallet
            width={measure / 2.2}
            height={measure / 2}
            strokeColor={"#74CC9B"}
            scale={1.6}
          />
        );
      case "transferencia":
        return (
          <Transfer
            width={measure / 2.2}
            height={measure / 2}
            strokeColor={"#EF9C55"}
            scale={1.6}
          />
        );
      case "pagar":
        return (
          <Pay
            width={measure / 3}
            height={measure / 2}
            strokeColor={"#B946FF"}
            scale={1.6}
          />
        );
      case "recargar":
        return (
          <Topup
            width={measure / 3.6}
            height={measure / 2}
            strokeColor={"#68C6E5"}
            scale={1.6}
          />
        );

      default:
        return (
          <Wallet
            width={measure / 2}
            height={measure / 2}
            strokeColor={"black"}
            scale={1.6}
          />
        );
    }
  };

  return (
    <View key={index} style={stl.containter}>
      <View
        style={[
          stl.card,
          {
            backgroundColor: color,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        {iconRender()}
      </View>
      <View>
        <Text style={Shared.txtNormalB}>{title}</Text>
      </View>
    </View>
  );
};

const stl = StyleSheet.create({
  containter: {
    alignItems: "center",
  },
  card: {
    flex: 1,
    width: measure,
    height: measure + 5,
    borderRadius: 16,
    elevation: 2,
    marginVertical: 5,
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
