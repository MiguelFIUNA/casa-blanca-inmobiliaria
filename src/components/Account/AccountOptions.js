import React, { useState } from "react";
import { View, Text } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { Modal } from "../../components/Shared/Modal";
import { ChangeDisplayNameForm } from "./ChangeDisplayNameForm";

export function AccountOptions(props) {
  //recupero de prop la funcion para re renderizar el componente HomeScreen
  const { onReload } = props;
  //estado para mostrar u ocultar modal
  const [showModal, setshowModal] = useState(false);
  //funcion que cierra modal mediante el prop "close" y propiedad onBackdropPress
  const onCloseOpenModal = () => setshowModal((prevState) => !prevState);
  //estado para renderizar formulario de cambio de datos
  const [renderComponent, setRenderComponent] = useState(null);

  const selectedComponent = (key) => {
    if (key === "displayName") {
      onCloseOpenModal();
      setRenderComponent(
        <ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />
      );
    }
    if (key === "password") {
      onCloseOpenModal();
      setRenderComponent(<Text>Cambiar contrasena</Text>);
    }
  };
  const list = getMenuOptions(selectedComponent);

  return (
    <View>
      {list.map((item, i) => (
        <ListItem key={i} bottomDivider onPress={item.onPress}>
          <Icon type={"antdesign"} name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      <Modal
        show={showModal}
        close={onCloseOpenModal}
        children={renderComponent}
      />
    </View>
  );
}

function getMenuOptions(selectedComponent) {
  return [
    {
      title: "Cambiar Nombre y Apellido",
      icon: "user",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Contrasena",
      icon: "lock1",
      onPress: () => selectedComponent("password"),
    },
  ];
}
