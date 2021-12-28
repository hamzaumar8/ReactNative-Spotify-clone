import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type SearchHeaderProps = {
  album: Album;
};

const SearchHeader = (props: SearchHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.container}>
      <FontAwesome name="search" color={"black"} />
      <TextInput
        style={styles.textInput}
        placeholder="Artist, songs or podcasts"
      />
    </View>
  );
};

export default SearchHeader;
