import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReturnButton } from '../../components';
import { router } from 'expo-router';

const salesData = Array.from({ length: 30 }, (_, index) => {
  const day = `Day ${index + 1}`;
  const salesAmount = `RM ${(Math.random() * 500 + 500).toFixed(2)}`;
  const platformFee = parseFloat(salesAmount.replace('RM ', '')) * 0.13;
  const feeAccumulation = platformFee;
  return { day, salesAmount, platformFee, feeAccumulation };
});

// Calculate the fee accumulation based on the platform fee for each day
let cumulativeFee = 0;
let isFeeAccumulationCapped = false;
let lastValidRowIndex = -1;

salesData.forEach((item, index) => {
  if (!isFeeAccumulationCapped) {
    cumulativeFee += item.platformFee;
    item.feeAccumulation = cumulativeFee;

    if (cumulativeFee > 2000) {
      isFeeAccumulationCapped = true;
    } else {
      lastValidRowIndex = index;
    }
  } else {
    item.feeAccumulation = "-";
  }
});

const totalCumulativeFee = salesData.reduce((acc, item) => {
  if (item.feeAccumulation !== "-") {
    acc += item.platformFee;
  }
  return acc;
}, 0);

const SalesDetails = () => {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <ScrollView className="px-4 mt-6">
        <View className="flex flex-row justify-left items-center">
          <ReturnButton handlePress={() => router.push("/sales")} />
        </View>
        <View className="bg-gray-800 p-4 my-4 rounded-lg">
          <Text className="text-lg text-white font-semibold">Total Fee To Be Due</Text>
          <Text className="text-2xl text-red-500">RM {totalCumulativeFee.toFixed(2)}</Text>
        </View>
        <Text className="text-2xl text-white font-psemibold mt-4">
          Sales Details
        </Text>
        <View className="mt-4">
          <View className="flex flex-row border-b border-gray-700 pb-2 mb-2">
            <Text style={{ width: 50, marginLeft: 10 }} className="text-white font-semibold text-left">Day</Text>
            <Text style={{ width: 100 }} className="text-white font-semibold text-left">Sales Amount</Text>
            <Text style={{ width: 100 }} className="text-white font-semibold text-left">Platform Fee (13%)</Text>
            <Text style={{ width: 150 }} className="text-white font-semibold text-left">Fee {"\n"}Accumulation</Text>
          </View>
          {salesData.map((item, index) => (
            <View key={index} className={`flex flex-row border-b border-gray-700 py-2 ${index === lastValidRowIndex+1 ? 'bg-yellow-500' : ''}`}>
              <Text style={{ width: 50, marginLeft: 10 }} className={`text-left ${index === lastValidRowIndex+1 ? 'text-black' : 'text-white'}`}>{item.day}</Text>
              <Text style={{ width: 100 }} className={`text-left ${index === lastValidRowIndex+1 ? 'text-black' : 'text-green-500'}`}>{item.salesAmount}</Text>
              <Text style={{ width: 100 }} className={`text-left ${index === lastValidRowIndex+1 ? 'text-black' : 'text-yellow-500'}`}>{`RM ${item.platformFee.toFixed(2)}`}</Text>
              <Text style={{ width: 150 }} className={`text-left ${index === lastValidRowIndex+1 ? 'text-black' : 'text-red-500'}`}>{item.feeAccumulation === "-" ? "-" : `RM ${item.feeAccumulation.toFixed(2)}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SalesDetails;
