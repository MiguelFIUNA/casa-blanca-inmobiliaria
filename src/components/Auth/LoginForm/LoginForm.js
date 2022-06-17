import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
//import Toast from "react-native-toast-message";
import { async } from "@firebase/util";

export function LoginForm() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const onShowHidePass = () => setShowPassword((prevState) => !prevState);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      //console.log(formValue);
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.goBack();
      } catch (error) {
        console.log("error de singIN");
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo Electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="ionicon" name="at-outline" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="ionicon"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={onShowHidePass}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
