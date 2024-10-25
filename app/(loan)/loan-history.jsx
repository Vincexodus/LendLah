import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReturnButton } from "../../components";
import { router } from "expo-router";

const loanHistoryData = [
  {
    id: 1,
    date: "2024-06-01",
    item: "Car",
    bank: "MayBank",
    quantity: 10000,
    status: "Declined",
  },
  {
    id: 2,
    date: "2024-06-05",
    item: "House",
    bank: "Agro Bank",
    quantity: 200000,
    status: "Approved",
  },
  {
    id: 3,
    date: "2024-06-10",
    item: "Business",
    bank: "CIMB Bank",
    quantity: 50000,
    status: "Approved",
  },
];

const LoanHistory = () => {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <View className="flex flex-row justify-left items-center mx-5 my-5">
        <ReturnButton handlePress={() => router.push("/loan")} />
      </View>
      <ScrollView className="px-4">
        <Text className="text-2xl text-white font-psemibold">Loan History</Text>
        {loanHistoryData.map((item) => (
          <View key={item.id} className="bg-gray-800 p-4 my-4 rounded-lg">
            <Text className="text-lg text-white font-semibold">
              {item.date}
            </Text>
            <Text className="text-base text-white">Loan Type: {item.item}</Text>
            <Text className="text-base text-white">
              Loan Amount: MYR {item.quantity}
            </Text>
            <Text className="text-base text-white">
              Loaned From: {item.bank}
            </Text>
            <Text
              className={`text-base ${
                item.status === "Approved" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status: {item.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoanHistory;
