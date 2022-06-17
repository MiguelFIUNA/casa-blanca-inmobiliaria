import React from "react";
import { View, Image } from "react-native";
import { LoginForm } from "../../components/Auth/LoginForm";
import { styles } from "./LoginScreen.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function LoginScreen() {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.content}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
