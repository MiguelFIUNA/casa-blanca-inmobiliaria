import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./InfoUser.styles";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Icon, Text } from "react-native-elements";
import { Avatar } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";

export function InfoUser(props) {
  //recupero los props que son las funciones para controlar los estados del LoadingModal
  const { setLoading, setLoadingText } = props;
  //recuperamos los datos del usuario actual
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  //creo un estado para controlar el link de la foto del avatar en tiempo real
  const [avatar, setAvatar] = useState(photoURL);
  //funcion para cambiar el avatar
  const changeAvatar = async () => {
    //creamos una variable para guardar los resultados de abrir la galeria, como la uri y la bandera cancelled
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    //console.log(result);
    if (result.cancelled != true) uploadImage(result.uri);
  };

  //funcion para subir la imagen
  const uploadImage = async (uri) => {
    //seteamos los estados para abrir modal
    setLoadingText("Actualizando foto de perfil");
    setLoading(true);
    //Proceso de carga de imagen a la db de firestone
    const response = await fetch(uri);

    const blob = await response.blob();
    //console.log(blob);
    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);
    uploadBytes(storageRef, blob).then((snapshot) => {
      //llamamos a la funcion que cambia el avatar en la vista infoUser
      updatePhotoUrl(snapshot.metadata.fullPath);
      //console.log(snapshot.metadata);
    });
  };

  //funcion para cambiar el avatar
  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);
    //actualizar en firebase la imagen del usuario
    const auth = getAuth();
    updateProfile(auth.currentUser, { photoURL: imageUrl });
    //cambiamos el estado que controla el avatar
    setAvatar(imageUrl);
    //cerramos el loading modal
    setLoading(false);
  };

  //console.log({ uid, photoURL, displayName, email });
  return (
    <View style={styles.content}>
      <Avatar
        size={80}
        rounded
        icon={{ name: "adb", type: "material" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View style={styles.view}>
        <Text style={styles.displayName}>
          {displayName || "Agente Anónimo"}
        </Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
