import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/pages/Home";
import Entradas from "./app/pages/Entradas";
import Saidas from "./app/pages/Saidas";
import HomeAlert from "./app/pages/HomeAlert";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entradas" component={Entradas} />
        <Stack.Screen name="Saidas" component={Saidas} />
        <Stack.Screen name="HomeAlert" component={HomeAlert} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
