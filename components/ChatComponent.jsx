import { useState } from "react";
import { View } from "react-native";
import ChatPrompInput from "./ChatPromptInput";
import MessageBubble from "./MessageBubble";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors";

const ChatComponent = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Tell me something about your skills",
      answer: "",
    },
    {
      id: 2,
      question: "What are your career goals?",
      answer: "",
    },
    {
      id: 3,
      question: "What are your hobbies?",
      answer: "",
    },
  ]);
  const [askedQuestions, setAskedQuestions] = useState([1]);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleSendAnswer = (answer) => {
    const questionsCopy = [...questions];
    for (let q of questionsCopy) {
      if (q.id === currentQuestion) {
        q.answer = answer;
      }
    }
    setQuestions(questionsCopy);
    if (currentQuestion === questions.length) {
      console.log("All questions answered");
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setAskedQuestions([...askedQuestions, currentQuestion + 1]);
    }
  };

  return (
    <View className={`flex flex-col flex-grow pt-6 pb-4 bg-white`}>
      <View className={`flex-grow px-4 justify-end`}>
        {askedQuestions.map((qId) => {
          const q = questions.find((q) => q.id === qId);
          return (
            <View key={q.id} className={`flex flex-col`}>
              <View className={`flex flex-row items-start mr-16 my-2`}>
                <MaterialCommunityIcons
                  name="google-assistant"
                  size={24}
                  color={colors.secondary}
                />
                <MessageBubble
                  message={q.question}
                  color="secondary"
                  textColor="white"
                  className="ml-2"
                />
              </View>
              {q.answer != "" && (
                <View
                  className={`w-full flex flex-row items-start justify-end pl-16 my-2`}
                >
                  <MessageBubble
                    message={q.answer}
                    color="black-100"
                    textColor="black"
                    className="mr-2"
                  />
                  <FontAwesome name="user" size={24} color={colors.secondary} />
                </View>
              )}
            </View>
          );
        })}
      </View>
      <ChatPrompInput
        onSend={(answer) => {
          handleSendAnswer(answer);
        }}
      />
    </View>
  );
};

export default ChatComponent;
