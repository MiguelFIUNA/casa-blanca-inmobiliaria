import React from "react";
import { View } from "react-native";
import { Overlay, Text } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { styles } from "./LoadingModal.styles";

export function LoadingModal(props) {
  const { show, text } = props;
  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.content}>
        <ActivityIndicator size="large" color="black" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Overlay>
  );
}

//definimos mediante el siguiente objeto de configuracion las props por defecto
LoadingModal.defaultProps = {
  show: false,
  text: "Cargando",
};
