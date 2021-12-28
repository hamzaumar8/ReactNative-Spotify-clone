import { FlatList, StyleSheet } from "react-native";
import AlbumCategory from "../components/AlbumCategory";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import albumCategories from "../data/albumCategories";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
