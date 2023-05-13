import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ResultsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View
        style={styles.mainContainer}
      >
        <Text style={styles.headlineText}>Your Results</Text>
        <View
          style={styles.headlineBox}
        >
        </View>
      </View>

      <View
        style={styles.questionsAnsweredBox}
      >
        <Text>Questions Answered</Text>
        <Text>(10/10)</Text>
      </View>

      <View
        style={styles.scoreCard}
      >
        <Text
          style={styles.scoreHeadlineText}
        >
          Score Card
        </Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={styles.scoreList}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="green" />
              ) : (
                <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
              )}
            </View>
          )}
        />

        <Pressable 
        onPress={() => navigation.navigate("Courses")}
        style={styles.continueButton}
        >
          <Text style={styles.continueText}>Back to Topics</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  mainContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  headlineText:{
    fontWeight: 'bold', 
    fontSize:18
  },
  headlineBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  questionsAnsweredBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  scoreCard: {
    backgroundColor: "white",
    borderRadius: 7,
    marginTop: 20,
  },
  scoreHeadlineText:{
    color: "black",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
  },
  scoreList:{
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:"auto",
    marginRight:"auto"
  },
  continueButton: {
    backgroundColor:"green",
    padding:8,
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:20,
    borderRadius:5
  },
  continueText: {
    color:"white",
    textAlign:"center"
  }

});
