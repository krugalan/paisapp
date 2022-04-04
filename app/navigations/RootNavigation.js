import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, AppTab } from "navigations";

export const RootNavigation = () => {
  const [token, setToken] = useState(true);

  // Componente Root Navigator donde separo las rutas publicas y privadas basadas en el token correspondiente
  return (
    <NavigationContainer>
      {token ? <AppTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
