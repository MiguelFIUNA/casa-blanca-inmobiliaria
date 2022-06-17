import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropertiesScreen } from "../screens/Properties/PropertiesScreen";
import { AddPropertiesScreen } from "../screens/Properties/AddPropertiesScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function PropertiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.properties.properties}
        component={PropertiesScreen}
        options={{ title: "Propiedades", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name={screen.properties.addProperties}
        component={AddPropertiesScreen}
        options={{ title: "Añadir Propiedad", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
