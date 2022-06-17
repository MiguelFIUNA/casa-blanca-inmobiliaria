import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./DropdownMenu.styles";
//dropdown librerias
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Icon } from "react-native-elements";

export function DropdownMenu(props) {
  const { text, data, selected, setSelected, iconName, iconType } = props;

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign style={styles.icon} color="#000" name="Safety" size={20} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={text}
        value={selected}
        search
        searchPlaceholder="Buscar..."
        onChange={(item) => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <Icon
            type={iconType}
            style={styles.icon}
            color="black"
            name={iconName}
            size={20}
          />
        )}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <AntDesign color="white" name="delete" size={18} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
