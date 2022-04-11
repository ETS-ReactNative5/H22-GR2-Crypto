import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/SignInScreen/Home";
import Login from "./src/screens/SignInScreen/Login";
import Signup from "./src/screens/SignInScreen/Signup";
import Accueil from "./src/screens/AppScreen/Accueil";
import DefaultAppScreen from "./src/screens/AppScreen/DefaultAppScreen";

export default function App() {
  return (
    <View style={styles.root}>

      {/*<Home/>*/}
      {/*<Login/>*/}
      {/*<Signup/>*/}
      {/*<Accueil/>*/}
      <DefaultAppScreen/>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
