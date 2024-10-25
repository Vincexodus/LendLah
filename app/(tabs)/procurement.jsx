import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components";

const Procurement = () => {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <Text className="px-4 text-2xl text-white font-psemibold mt-6">
        Procurement
      </Text>
      <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
        <CustomButton
          title="Request Procurement"
          handlePress={() => router.push("/request-procurement")}
          containerStyles="w-full mt-7"
          isRedirect={true}
        />
        <CustomButton
          title="Track Procurement"
          handlePress={() => router.push("/track-procurement")}
          containerStyles="w-full mt-7"
          isRedirect={true}
        />
        <CustomButton
          title="Procurement History"
          handlePress={() => router.push("/procurement-history")}
          containerStyles="w-full mt-7"
          isRedirect={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Procurement;
