import React from "react";
import { ScrollView, Text, View } from "react-native";
import { CardList , Services} from "home_component";

export const HomeScreen = () => {
  return (
    <ScrollView>      
      <CardList />
      <Services />
    </ScrollView>
  );
};
