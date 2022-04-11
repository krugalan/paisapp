import React, { useState, useEffect } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CheckEmpty,
  LogoPaisapp,
  TextPaisapp,
  DescPaisapp,
  Checked,
} from "use_svg";
import { Base, Shared } from "styles";
import { logInUser } from "call_api";
import { useKeyboard } from "hooks";
import { logOutUserSession } from "../../utils/redux/actions/actSession";
import { useDispatch } from "react-redux";

export const LogOutScreen = () => {
  const isKeyOpen = useKeyboard();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");

  const logout = () => {
    dispatch(logOutUserSession());
  };

  return (
    <SafeAreaView style={stl.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <LogoPaisapp />
        </View>
        <View style={{ marginVertical: 5 }}>
          <TextPaisapp />
        </View>
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <View style={stl.containerText}>
          <TouchableOpacity onPress={logout} style={stl.btn}>
            <Text style={[Shared.txtNormalW, { fontWeight: "bold" }]}>
              Cerrar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stl = StyleSheet.create({
  btn: {
    width: "100%",
    height: Base.baseUnit * 10,
    backgroundColor: "#005CEE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  containerText: {
    width: Base.screenWidth * 0.85,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  input: {
    width: "100%",
    height: Base.baseUnit * 12,
    paddingHorizontal: Base.baseUnit * 3,
    elevation: 2,
    borderRadius: 15,
    marginVertical: 10,
  },
});
