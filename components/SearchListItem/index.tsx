import React from "react";
import { Image, Text, View } from "react-native";
import { SearchCategory } from "../../types";
import styles from "./styles";

export type SearchListItemProps = {
  search: SearchCategory;
};

const SearchListItem = (props: SearchListItemProps) => {
  const { search } = props;
  return (
    <View
      style={[styles.container, { backgroundColor: `${search.background}` }]}
    >
      <Text style={styles.title}>{search.title}</Text>
      <Image source={{ uri: search.imageUri }} style={styles.image} />
    </View>
  );
};

export default SearchListItem;
