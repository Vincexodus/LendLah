import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReturnButton } from "../../components";
import { router } from "expo-router";

const loanAmount = 500; // Example order amount for chicken
const legalFee = loanAmount * 0.03; // 3% of the procurement cost
const totalAmount = loanAmount + legalFee; // Total amount

const LoanStatus = () => {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <View className="flex flex-row justify-left items-center mx-5 my-5">
        <ReturnButton handlePress={() => router.push("/loan")} />
      </View>
      <ScrollView className="px-4">
        <Text className="text-2xl text-white font-psemibold">Loan Status</Text>
        <View className="bg-gray-800 p-4 my-4 rounded-lg">
          <Text className="text-base text-gray-300 font-pmedium">
            Loan Type
          </Text>
          <Text className="text-lg text-white font-semibold">
            Business Loan
          </Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">
            Business Registraion Number
          </Text>
          <Text className="text-lg text-white font-semibold">102149596812</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Loan ID</Text>
          <Text className="text-lg text-white font-semibold">#L1484618</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">
            Loan From
          </Text>
          <Text className="text-lg text-white font-semibold">Maybank</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">
            Apply Date
          </Text>
          <Text className="text-lg text-white font-semibold">01/06/2024</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Status</Text>
          <Text className="text-lg text-red-500 font-semibold">
            Unsuccessful
          </Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">
            Loan Amount
          </Text>
          <Text className="text-lg text-white font-semibold">
            RM {loanAmount.toFixed(2)}
          </Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">
            Legal Fees & Tax
          </Text>
          <Text className="text-lg text-white font-semibold">
            RM {legalFee.toFixed(2)}
          </Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-xl text-white font-semibold">TOTAL COST</Text>
          <Text className="text-2xl text-white font-bold">
            RM {totalAmount.toFixed(2)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoanStatus;
