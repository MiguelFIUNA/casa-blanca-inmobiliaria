//Pantalla principal del Agente con sus tareas y propiedades
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { InfoUser, AccountOptions } from "../../components/Account";
import { LoadingModal } from "../../components/Shared/LoadingModal/LoadingModal";
import { styles } from "./HomeScreen.styles";
import { screen } from "../../utils";
import { TouchableOpacity } from "react-native";

export function HomeScreen() {
  //funcion para cerrar sesion
  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  //estados para la LoadingModal
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  //estados para actualizar datos del usuario
  const [_, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);
  const navigation = useNavigation();
  const goToAddProperties = () => {
    navigation.navigate(screen.properties.addProperties);
  };
  //obtenemos los datos del usuario logueado
  const { uid, photoURL, displayName, email } = getAuth().currentUser;

  return (
    <>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions onReload={onReload} />
      <View style={styles.content}>
        <LoadingModal show={loading} text={loadingText} />
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#000"
          containerStyle={styles.btnAddContainer}
          onPress={goToAddProperties}
        />
        <TouchableOpacity onPress={logout}>
          <View style={styles.selectedStyle}>
            <Text style={styles.textSelectedStyle}>Cerrar Sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
