import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { screen } from "../utils";
import { HomeStack } from "./HomeStack";
import { MapStack } from "./MapStack";
import { PropertiesStack } from "./PropertiesStack";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00abb5",
        tabBarInactiveTintColor: "#c1c1c1",
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) =>
          screenOptionsFunction(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.properties.tab}
        component={PropertiesStack}
        Options={{ title: "Ventana Propiedades" }}
      />
      <Tab.Screen
        name={screen.home.tab}
        component={HomeStack}
        Options={{ title: "Ventana Mi cuenta" }}
      />
      <Tab.Screen
        name={screen.map.tab}
        component={MapStack}
        Options={{ title: "Ventana Mapa" }}
      />
    </Tab.Navigator>
  );
}

function screenOptionsFunction(route, color, size) {
  let iconName;
  if (route.name === screen.home.tab) iconName = "clipboard-outline";
  if (route.name === screen.map.tab) iconName = "locate-outline";
  if (route.name === screen.properties.tab) iconName = "home-outline";

  return <Icon type="ionicon" name={iconName} color={color} size={size} />;
}
