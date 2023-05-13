import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { StackScreenProps } from "@react-navigation/stack";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/Quizzy-Logo.png')} />
      </View>
      <View style={styles.buttons}>
        <Text style={styles.text}>Welcome to Quizzy!</Text>
        <Text style={styles.text}>Sign In or Sign Up to get started: </Text>
        <Button title="Sign in" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign In')} />
        <Button title="Sign up" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign Up')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#fec625',
    color: 'white',
  },
});
export default WelcomeScreen;