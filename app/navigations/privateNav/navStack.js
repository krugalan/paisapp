import NavigationComponent from "../common/navigationComponentStack";
import { DashboardScreen, HomeScreen } from "home_screen";
import Header from "../common/Header";

/*
    NavigationComponent es un componente Stack que recibe un array de rutas. 
    Personaliza la distribución de pantallas según la sección a utilizar
    Se abstrae de la creacion un stack anidado para facilitar la lectura y mantenimiento
    Cada item del array data tiene la informacion necesaria para 
*/
export function HomeStack() {
  return (
    <NavigationComponent      
      data={[
        {
          component: HomeScreen,
          name: "Home",
          headerRight: false,
          headerLeft: false,
        },
        {
          component: DashboardScreen,
          name: "Dashboard",
          headerRight: false,
          headerLeft: false,
        },
      ]}
    />
  );
}
