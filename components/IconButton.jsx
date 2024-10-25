import { ActivityIndicator, Text, TouchableOpacity, Image } from "react-native";

const IconButton = ({ handlePress, isLoading, icon }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Image source={icon} resizeMode="contain" className={`w-6 h-6 mr-6`} />

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

export default IconButton;
