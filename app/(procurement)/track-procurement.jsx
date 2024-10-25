import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReturnButton } from "../../components";
import { router } from "expo-router";

const orderAmount = 500; // Example order amount for chicken
const platformFee = orderAmount * 0.03; // 3% of the procurement cost
const totalAmount = orderAmount + platformFee; // Total amount

const TrackProcurement = () => {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <View className="flex flex-row justify-left items-center mx-5 my-5">
        <ReturnButton handlePress={() => router.push("/procurement")} />
      </View>
      <ScrollView className="px-4">
        <Text className="text-2xl text-white font-psemibold">Procurement Status</Text>
        <View className="bg-gray-800 p-4 my-4 rounded-lg">
          <Text className="text-base text-gray-300 font-pmedium">Item Name</Text>
          <Text className="text-lg text-white font-semibold">Chicken</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Supplier Address</Text>
          <Text className="text-lg text-white font-semibold">123 Jalan Bukit Bintang, Kuala Lumpur, Malaysia</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Contact Number</Text>
          <Text className="text-lg text-white font-semibold">+60-123 4567</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Procurement Number</Text>
          <Text className="text-lg text-white font-semibold">#P1484618</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Procurement Date</Text>
          <Text className="text-lg text-white font-semibold">01/06/2024</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Expected Delivery Date</Text>
          <Text className="text-lg text-white font-semibold">01/07/2024</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Status</Text>
          <Text className="text-lg text-green-500 font-semibold">Successful</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Procurement Cost</Text>
          <Text className="text-lg text-white font-semibold">RM {orderAmount.toFixed(2)}</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-base text-gray-300 font-pmedium">Platform Fee (3%)</Text>
          <Text className="text-lg text-white font-semibold">RM {platformFee.toFixed(2)}</Text>
          <View className="border-b border-gray-600 my-2" />
          <Text className="text-xl text-white font-semibold">TOTAL COST</Text>
          <Text className="text-2xl text-white font-bold">RM {totalAmount.toFixed(2)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackProcurement;
