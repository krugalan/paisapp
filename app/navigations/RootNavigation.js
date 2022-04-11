import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, AppTab } from "navigations";
import { useSelector } from "react-redux";

export const RootNavigation = () => {
  const sessionReducer = useSelector((state) => state.sessionReducer);
  const { token } = sessionReducer;
  console.log(sessionReducer);

  // Componente Root Navigator donde separo las rutas publicas y privadas basadas en el token correspondiente
  return (
    <NavigationContainer>
      {token ? <AppTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
