import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import geographyQuestions from "../data/geographyQuestions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


const Course1 = () => {
  const navigation = useNavigation();
  const data = geographyQuestions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];

  return (
    <SafeAreaView>
      <View
        style={styles.headlineBox}
      >
        <Text style = {styles.headline}>Geography Quiz!</Text>
        <View
          style={styles.counterBox}
        >
          <Text
            style={styles.counter}
          >
            {counter}
          </Text>
        </View>
      </View>

      <View
        style={styles.progressBox}
      >
        <Text>Your Progress</Text>
        <Text>
          ({index}/{totalQuestions}) questions answered
        </Text>
      </View>

      {/* Progress Bar */}
      <View
          style={styles.progressBar}
        >
          <Text
            style={{
              backgroundColor: "#FFC0CB",
              borderRadius: 12,
              position: "absolute",
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
            }}
          />
        </View>
      <View
        style={styles.quizBox}
      >
        <Text style={styles.questionText}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              key = {index}
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex
                  ? styles.correctAnswer
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? styles.wrongAnswer
                  : styles.answer
              }
            >
              {selectedAnswerIndex === index &&
            index === currentQuestion.correctAnswerIndex ? (
              <AntDesign
              style={styles.gotAnswerCorrect}
              name="check"
              size={20}
              color="white"
            />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={styles.gotAnswerWrong}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={styles.answerButton}
                >
                  {item.options}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}

        {index + 1 >= data.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,

                answers: answers,
              })
            }
            style={styles.doneButton}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={styles.doneButton}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};


export default Course1;

const styles = StyleSheet.create({
  headline:{
    fontWeight: "bold", 
    fontSize: 18
  },
  counter: {
    color: "white", 
    textAlign: "center", 
    fontWeight: "bold" 
  },
  counterBox: {
    padding: 10, 
    backgroundColor: "#F7C04A", 
    borderRadius: 20 , 
    fontWeight: 200
  },
  headlineBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
  },
  progressBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  progressBar: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 10,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  quizBox: {
    marginTop: 30,
    backgroundColor: "#F0F8FF",
    padding: 10,
    borderRadius: 6,
  },
  questionText: {
    fontSize: 18, 
    fontWeight: "bold"
  },
  correctAnswer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    backgroundColor: "green",
    borderRadius: 20,
  },
  wrongAnswer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    backgroundColor: "red",
    borderRadius: 20,
  },
  answer:{
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    borderRadius: 20,
  },
  gotAnswerCorrect: {
    borderColor: "#00FFFF",
    textAlign: "center",
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  gotAnswerWrong: {
    borderColor: "#00FFFF",
    textAlign: "center",
    borderWidth: 0.5,
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 20,
  },
  answerButton:{
    borderColor: "#00FFFF",
    textAlign: "center",
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  doneButton:{
    backgroundColor: "green",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 6,
  },
  nextQuestionButton:{
    backgroundColor: "green",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 6,
  },


});
