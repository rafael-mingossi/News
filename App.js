import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./components/styles";
import { db } from "./components/firebase";

const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);

  //this hook of effect will be executed once and will bring from the collection 'news' ordered by dates a snapshot of the news
  useEffect(() => {
    db.collection("news")
      .orderBy("dates", "desc")
      .onSnapshot((snapshot) => {
        //setNews has a callback with paramenter (doc) and returns to the object 'info' the data from the DB
        setNews(
          snapshot.docs.map((doc) => {
            return { info: doc.data() };
          })
        );
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.3 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{ height: 250, width: "200%" }}
          style={{ flex: 1 }}
        >
          {news.map((val, index) => {
            //validate if the number of news is less than 2, only shows 2 news because there is only space for 2
            if (index < 2) {
              return (
                <ImageBackground
                  source={{ uri: val.info.image }}
                  style={styles.image}
                >
                  {/* <View style={styles.viewOpacity}></View> */}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("NewsOpen", {
                        title: val.info.title,
                        content: val.info.content,
                      })
                    }
                    style={styles.touchableBtn}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: "white",
                        position: "absolute",
                        bottom: "40%",
                      }}
                    >
                      {" "}
                      {val.info.title}
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
              );
            }
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 0.7, padding: 20 }}>
        <View style={styles.viewLine}></View>
        <Text style={{ fontSize: 15 }}>Past News</Text>
        <ScrollView contentContainerStyle={{ padding: 20 }} style={{ flex: 1 }}>
          {news.map((val, index) => {
            if (index >= 2) {
              return (
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("News", {
                        title: val.info.title,
                        content: val.info.content,
                      })
                    }
                    style={{ flexDirection: "row" }}
                  >
                    <Image
                      source={{ uri: val.info.image }}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Text style={{ padding: 10 }}>{val.info.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const NewsScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.content}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const NewsOpenScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.content}</Text>
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
        <Stack.Screen name="NewsOpen" component={NewsOpenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
