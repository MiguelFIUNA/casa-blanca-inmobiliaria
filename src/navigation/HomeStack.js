import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { AccountScreen } from "../screens/Account";
import { HomeScreen } from "../screens/Home";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Mi cuenta", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
