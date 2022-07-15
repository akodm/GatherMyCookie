import React from "react";
import { Button, Text, View } from "react-native";

const Main = (props: any) => {
  const { navigation } = props;
  return <View>
    <Text>Hello Main</Text>
    <Button title="Go To Loading" onPress={() => navigation.navigate("Loading")} />
  </View>;
};

export default Main;
