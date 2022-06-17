import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon } from "react-native-elements";
import { DropdownMenu } from "./DropdownMenu";
import { getAuth } from "firebase/auth";
import { styles } from "./InfoForm.styles";
import { MapForm } from "../MapForm/MapForm";

export function InfoForm() {
  const tipo = [
    { label: "Departamento", value: "Departamento" },
    { label: "Casa", value: "Casa" },
    { label: "Terreno", value: "Terreno" },
    { label: "Oficina", value: "Oficina" },
    { label: "Loteamiento", value: "Loteamiento" },
    { label: "Duplex", value: "Duplex" },
    { label: "Local Comercial", value: "Local Comercial" },
    { label: "Otros", value: "Otros" },
  ];
  const oferta = [
    { label: "Venta", value: "Venta" },
    { label: "Alquiler", value: "Alquiler" },
  ];
  const auth = getAuth().currentUser;
  const agente = "Miguel Lezcano";
  const i = agente.indexOf(" ") + 1;
  const contador = 25;
  //console.log("#" + contador.toString().padStart(3, 0) + agente[0] + agente[i]);

  //estado para controlar el tipo de propiedad seleccionado
  const [selectedType, setSelectedType] = useState([]);
  //estado para controlar la oferta seleccionada
  const [selectedOffer, setSelectedOffer] = useState([]);
  //estado para abrir y cerrar el mapa
  const [showMap, setShowMap] = useState(false);
  //funcion para abrir y cerrar mapa

  const onOpenCloseMap = () => {
    setShowMap((prevState) => !prevState);
  };

  return (
    <>
      <View style={styles.content}>
        <DropdownMenu
          text={"Tipo de propiedad"}
          data={tipo}
          selected={selectedType}
          setSelected={setSelectedType}
          iconType={"ion-icon"}
          iconName={"home"}
        />
        <DropdownMenu
          text={"Tipo de oferta"}
          data={oferta}
          selected={selectedOffer}
          setSelected={setSelectedOffer}
          iconType={"material-community"}
          iconName={"key-chain"}
        />
        <Input
          placeholder="Título de la publicación"
          rightIcon={<Icon type="fontisto" name="font" size={15} />}
        />
        <Input
          placeholder="Precio inicial"
          rightIcon={
            <Icon type="material-icon" name="attach-money" size={25} />
          }
        />
        <Input
          placeholder="Dimensiones"
          rightIcon={
            <Icon type="font-awesome-5" name="pencil-ruler" size={15} />
          }
        />
        <Input
          placeholder="Características de la propiedad"
          multiline={true}
          inputContainerStyle={styles.textArea}
          rightIcon={<Icon type="fontisto" name="holiday-village" size={20} />}
        />
        <Input
          placeholder="Dirección"
          rightIcon={{
            type: "material-community",
            name: "map-marker",
            size: 25,
            onPress: onOpenCloseMap,
          }}
        />
      </View>
      <MapForm show={showMap} close={onOpenCloseMap} />
    </>
  );
}
