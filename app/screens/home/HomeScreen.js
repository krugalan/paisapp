import React from "react";
import { ScrollView, Text, View } from "react-native";
import { CardList } from "home_component";
// import { Base } from "styles";

export const HomeScreen = () => {
  return (
    <ScrollView>      
      <CardList />
    </ScrollView>
  );
};
