import { ActivityIndicator, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
import { View } from "react-native-animatable";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  isRedirect,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary-100 rounded-xl min-h-[62px] flex flex-row items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } ${isRedirect ? "justify-between" : "justify-center"}`}
      disabled={isLoading}
    >
      <Text
        className={`text-primary font-psemibold text-lg ${textStyles} ${
          isRedirect ? "ml-4" : ""
        }`}
      >
        {title}
      </Text>

      {isRedirect && (
        <Image
          source={icons.rightArrow}
          resizeMode="contain"
          className={`w-4 h-4 ${isRedirect ? "mr-4" : ""}`}
        />
      )}

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

export default CustomButton;
