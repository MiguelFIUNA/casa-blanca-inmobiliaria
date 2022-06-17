import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./AddPropertiesScreen.styles";
import { InfoForm } from "../../components/Properties";
import { Button } from "react-native-elements";

export function AddPropertiesScreen() {
  return (
    <ScrollView>
      <InfoForm />
      <Button title={"Añadir propiedad"} buttonStyle={styles.addProperties} />
    </ScrollView>
  );
}
