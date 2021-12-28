import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import SearchHeader from "../components/SearchHeader";
import SearchListItem from "../components/SearchListItem";
import albumDetails from "../data/albumDetails";
import searchCategories from "../data/searchCategories";

const SearchScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <FlatList
        numColumns={2}
        data={searchCategories}
        renderItem={({ item }) => <SearchListItem search={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <SearchHeader album={albumDetails} />}
      />
    </View>
  );
};

export default SearchScreen;
