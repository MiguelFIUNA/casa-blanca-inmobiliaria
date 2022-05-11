import React from "react";
import { View, Image, Text } from "react-native";
import { LoginForm } from "../../components/Auth/LoginForm";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  return (
    <View style={styles.content}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <LoginForm />
    </View>
  );
}
