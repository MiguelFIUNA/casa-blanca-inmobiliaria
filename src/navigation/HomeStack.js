import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "/src/screens/Home/HomeScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.home.tab}
        component={HomeScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}
