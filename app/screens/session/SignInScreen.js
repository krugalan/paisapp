import React, { useState } from "react";
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

import { useForm } from "hooks";

export const SignInScreen = () => {
  const [formValues, handleInputChange] = useForm();
  const [checked, setChecked] = useState(false);

  const { email, password } = formValues;

  return (
    <SafeAreaView style={stl.container}>
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

      <View
        style={{ flex: 3, justifyContent: "flex-start", alignItems: "center" }}
      >
        <View style={stl.containerText}>
          <Text style={Shared.txtNormalBlack}>Email</Text>
          <TextInput
            style={stl.input}
            name="email"
            value={email}
            keyboardType="email-address"
            placeholder="Ingresa tu email"
          />
        </View>
        <View style={stl.containerText}>
          <Text style={Shared.txtNormalBlack}>Contraseña</Text>
          <TextInput
            style={stl.input}
            name="password"
            value={password}
            secureTextEntry={true}
            placeholder="Ingresa tu contraseña"
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

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text style={Shared.txtNormalB}>No tienes cuenta?</Text>
          <Text style={[Shared.txtNormalB, { color: "#005CEE" }]}>
            {" Regístrate"}
          </Text>
        </View>
        <View style={stl.containerText}>
          <TouchableOpacity style={stl.btn}>
            <Text style={[Shared.txtNormalW, { fontWeight: "bold" }]}>
              Ingresar
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <Text style={Shared.txtNormalB}>No tienes cuenta?</Text>
            <Text style={[Shared.txtNormalB, { color: "#005CEE" }]}>
              {" Regístrate"}
            </Text>
          </View>
          <View style={stl.containerText}>
            <TouchableOpacity style={stl.btn}>
              <Text style={[Shared.txtNormalW, { fontWeight: "bold" }]}>
                Ingresar
              </Text>
            </TouchableOpacity>
          </View>
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
