
import React from "react";
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CourseScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.courseNav}>
      <Button title="Geography" buttonStyle={styles.button} onPress={() => navigation.navigate('Course1')} />
      <Button title="Tech" buttonStyle={styles.button} onPress={() => navigation.navigate('Course2')} />
      <Button title="History" buttonStyle={styles.button} onPress={() => navigation.navigate('Course3')} />
      <Button title="Pop Culture" buttonStyle={styles.button} onPress={() => navigation.navigate('Course4')} />
      <Button title="Finance" buttonStyle={styles.button} onPress={() => navigation.navigate('Course5')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#fec625',
    margin: 10,
    width: 200,
    height: 50,
  },
  courseNav: {


  },
});

export default CourseScreen;