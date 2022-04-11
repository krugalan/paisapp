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
import { actSetUserSession } from "../../utils/redux/actions/actSession";
import { useDispatch } from "react-redux";

export const SignInScreen = () => {
  const isKeyOpen = useKeyboard();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");

  const login = () => {
    if (!email.length || !password.length) {
      setMsgError("Debe completar usuario y contraseña para continuar");
    } else {
      setMsgError("");
      logUserSignIn(email, password);
    }
  };

  const logUserSignIn = async () => {
    await logInUser({ email, password })
      .then((res) => {
        if (res.success) {
          dispatch(actSetUserSession({ email, password }));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={stl.container}>
      {!isKeyOpen && (
        <View
          style={{ flex: 3, justifyContent: "flex-end", alignItems: "center" }}
        >
          <View>
            <LogoPaisapp />
          </View>
          <View style={{ marginVertical: 5 }}>
            <TextPaisapp />
          </View>
          <View style={{ marginVertical: 15 }}>
            <DescPaisapp />
          </View>
        </View>
      )}

      <View
        style={{
          flex: 3,
          justifyContent: isKeyOpen ? "flex-end" : "flex-start",
          alignItems: "center",
        }}
      >
        <View style={stl.containerText}>
          <Text style={Shared.txtNormalBlack}>Email</Text>
          <TextInput
            selectTextOnFocus={true}
            name="email"
            keyboardType="email-address"
            placeholder="Ingresa tu email"
            style={stl.input}
            onChangeText={(e) => {
              setMsgError("");
              setEmail(e);
            }}
          />
        </View>
        <View style={stl.containerText}>
          <Text style={Shared.txtNormalBlack}>Contraseña</Text>
          <TextInput
            selectTextOnFocus={true}
            name="password"
            value={password}
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
            style={stl.input}
            onChangeText={(e) => {
              setMsgError("");
              setPassword(e);
            }}
          />
        </View>

        <View
          style={{
            ...stl.containerText,
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            {checked ? (
              <Checked
                height={30}
                width={30}
                scale={1}
                strokeWidth={1}
                strokeColor="#005CEE"
                color="#005CEE"
              />
            ) : (
              <CheckEmpty
                height={30}
                width={30}
                scale={1}
                strokeWidth={1}
                strokeColor="#AAAAAA"
                color="#AAAAAA"
              />
            )}
          </TouchableOpacity>

          <Text
            style={{
              ...Shared.txtNormalB,
              color: checked ? "#005CEE" : "#AAAAAA",
            }}
          >
            Recordarme
          </Text>
        </View>
      </View>

      <View style={stl.containerText}>
        <Text style={[Shared.txtNormalB, { color: "red" }]}>{msgError}</Text>
      </View>

      <View style={{ flex: 1.2, justifyContent: "flex-start", alignItems: "center" }}>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text style={Shared.txtNormalB}>No tienes cuenta?</Text>
          <Text style={[Shared.txtNormalB, { color: "#005CEE" }]}>
            {" Regístrate"}
          </Text>
        </View>
        <View style={stl.containerText}>
          <TouchableOpacity onPress={login} style={stl.btn}>
            <Text style={[Shared.txtNormalW, { fontWeight: "bold" }]}>
              Ingresar
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
