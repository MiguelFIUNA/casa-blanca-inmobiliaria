import * as Yup from "yup";

export function initialValues() {
  return {
    displayName: "",
    //password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    displayName: Yup.string().required("El nombre y apellido son obligatorios"),
    //password: Yup.string().required("La contraseña es obligatoria"),
  });
}
