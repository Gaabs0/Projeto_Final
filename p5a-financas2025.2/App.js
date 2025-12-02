import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/pages/Home";
import SignIn from "./app/pages/SignIn";
import SignUp from "./app/pages/SignUp";
import Entradas from "./app/pages/Entradas";
import Saidas from "./app/pages/Saidas";
import HomeAlert from "./app/pages/HomeAlert";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entradas" component={Entradas} />
        <Stack.Screen name="Saidas" component={Saidas} />
        <Stack.Screen name="HomeAlert" component={HomeAlert} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
