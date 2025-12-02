import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SignIn from "./app/pages/SignIn";
import SignUp from "./app/pages/SignUp";

import Home from "./app/pages/Home";
import Registrar from "./app/pages/Registrar";
import Perfil from "./app/pages/Perfil";
import Saidas from "./app/pages/Saidas";
import HomeAlert from "./app/pages/HomeAlert";

import CustomDrawer from "./app/components/CustomDrawer";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer com as telas logadas
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

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {/* 🔥 TELAS DE LOGIN PRIMEIRO */}
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />

          {/* 🔥 APÓS LOGIN, ENTRA NO DRAWER */}
          <Stack.Screen name="HomeDrawer" component={DrawerRoutes} />

          {/* EXTRA */}
          <Stack.Screen name="Saidas" component={Saidas} />
          <Stack.Screen name="HomeAlert" component={HomeAlert} />

        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </>
  );
}
