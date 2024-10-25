import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, IconButton } from "../../components";
import { icons } from "../../constants";

const Loan = () => {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <View className="w-full flex flex-row justify-between">
        <Text className="px-4 text-2xl text-white font-psemibold mt-6">
          Loan
        </Text>
        <View className="flex flex-row justify-end mt-6">
          <IconButton
            icon={icons.barChart}
            handlePress={() => router.replace("/loan-history")}
          />
          <IconButton
            icon={icons.tick}
            handlePress={() => router.push("/loan-status")}
          />
        </View>
      </View>
      <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
        <CustomButton
          title="MayBank (2%-3%)"
          handlePress={() => router.replace("/loan-maybank")}
          containerStyles="w-full mt-7"
          isRedirect={true}
        />

        <CustomButton // decoration
          title="Agro Bank (2-3.5%)"
          containerStyles="w-full mt-7"
          isRedirect={true}
        />

        <CustomButton // decoration
          title="CIMB (2-3%)"
          containerStyles="w-full mt-7"
          isRedirect={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Loan;
