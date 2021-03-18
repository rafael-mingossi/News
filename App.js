import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View, ImageBackground } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./components/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        contentContainerStyle={{ height: 250, width: "200%" }}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={{ uri: "https://picsum.photos/id/1/200/300" }}
          style={styles.image}
        >
          <View style={styles.viewOpacity}></View>
          <Text style={{ fontSize: 29, color: "white", padding: 10 }}>
            Main News
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const NewsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>News Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
