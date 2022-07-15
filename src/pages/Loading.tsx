import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

const Loading = (props: any) => {
  const { navigation } = props;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <View>
    <Text>Hello Loading</Text>
    <Button title="Go To Main" onPress={() => navigation.navigate("Main")} />
  </View>;
};

export default Loading;
