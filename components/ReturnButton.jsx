import { ActivityIndicator, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
const ReturnButton = ({ handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Image
        source={icons.leftArrow}
        resizeMode="contain"
        className={`w-6 h-6 mr-4`}
      />

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default ReturnButton;
