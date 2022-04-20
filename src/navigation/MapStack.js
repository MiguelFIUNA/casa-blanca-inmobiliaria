import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MapScreen } from "../screens/Map/MapScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.map.map}
        component={MapScreen}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
}
