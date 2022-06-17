import React from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { styles } from "./ChangeDisplayNameForm.styles";
import { initialValues, validationSchema } from "./ChangeDisplayNameForm.data";
import { useFormik } from "formik";
import { getAuth, updateProfile } from "firebase/auth";

export function ChangeDisplayNameForm(props) {
  const { onClose, onReload } = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    //onSubmit enviamos a firebase la modificacion del display Name
    onSubmit: async (formValue) => {
      try {
        const { displayName } = formValue;
        await updateProfile(getAuth().currentUser, { displayName });
        navigation.goBack();
      } catch (error) {
        console.log("error al cambiar nombre");
      }
      //cambiar por los datos nuevos
      onReload();
      //cerramos el modal
      onClose();
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y Apellido"
        rightIcon={{ type: "antdesign", name: "user" }}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title={"Cambiar nombre y apellido"}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
