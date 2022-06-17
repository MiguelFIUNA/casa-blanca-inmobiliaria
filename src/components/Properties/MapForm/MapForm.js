import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Modal } from "../../Shared/Modal";
import { styles } from "./MapForm.styles";
import * as Location from "expo-location";
import MapView from "react-native-maps";

export function MapForm(props) {
  const { show, close } = props;
  //estados para controlar los datos de la geolocalizacion
  const [location, setLocation] = useState({
    latitude: -25.2874987394482,
    longitude: -57.54298983381532,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  //hooke de efecto para obtener ubicacion
  useEffect(() => {
    (async () => {
      const { status } = await Location.getForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("error con permisos");
        return;
      }
      const locationTemp = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  return (
    <Modal
      show={show}
      close={close}
      children={
        <View>
          <MapView
            initialRegion={location}
            showsUserLocation={true}
            style={styles.mapStyle}
          >
            <MapView.Marker draggable coordinate={location} />
          </MapView>
        </View>
      }
    />
  );
}
