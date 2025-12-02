import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./app/pages/Home";
import Entradas from "./app/pages/Entradas";
import Saidas from "./app/pages/Saidas";
import HomeAlert from "./app/pages/HomeAlert";
import CustomDrawer from "./app/components/CustomDrawer";
import Registrar from "./app/pages/Registrar";

import SignIn from "./app/pages/SignIn";
import SignUp from "./app/pages/SignUp";
import Perfil from "./app/pages/Perfil";

import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// --------------------
// 📌 TELAS DO MENU LATERAL
// --------------------
function DrawerRoutes() {
  return (
    <Drawer.Navigator 
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Registrar" component={Registrar} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}




// --------------------
// 📌 ROTAS PRINCIPAIS
// --------------------
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {/* Drawer */}
          <Stack.Screen name="Drawer" component={DrawerRoutes} />

          {/* OUTRAS TELAS */}
          <Stack.Screen name="Saidas" component={Saidas} />
          <Stack.Screen name="HomeAlert" component={HomeAlert} />

          {/* Autenticação */}
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />

        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </>
  );
}
