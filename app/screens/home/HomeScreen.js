import React from "react";
import { ScrollView, Text, View } from "react-native";
import { CardList, Services, LastTransactions } from "home_component";

export const HomeScreen = () => {
  return (
    <ScrollView>
      <CardList />
      <Services />
      <LastTransactions />
    
    </ScrollView>
  );
};
