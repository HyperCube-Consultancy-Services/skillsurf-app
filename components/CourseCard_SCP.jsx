import { View, Text } from "react-native";
import colors from "../assets/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const CourseCard_SCP = ({ course }) => {
  return (
    <View
      className={`w-40 h-40 bg-white border border-black-100 rounded-lg me-2 flex flex-col py-2 px-2`}
    >
      <View className={`flex flex-row items-center`}>
        <Ionicons name="book" size={24} color={colors.primary} />
        <Text className={`text-black-900 text-lg font-semibold`}>
          {course.courseName}
        </Text>
      </View>
    </View>
  );
};

export default CourseCard_SCP;
