import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReturnButton } from '../../components';
import { router } from 'expo-router';

const procurementHistoryData = [
  { id: 1, date: '2024-06-01', item: 'Broccoli', quantity: 10, status: 'In Progress' },
  { id: 2, date: '2024-06-05', item: 'Chicken', quantity: 20, status: 'Completed' },
  { id: 3, date: '2024-06-10', item: 'Tomatoes', quantity: 5, status: 'Not Approved' },
  { id: 4, date: '2024-06-15', item: 'Lettuce', quantity: 15, status: 'Completed' },
  { id: 5, date: '2024-06-20', item: 'Carrots', quantity: 25, status: 'In Progress' },
];

const ProcurementHistory = () => {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <View className="flex flex-row justify-left items-center mx-5 my-5">
        <ReturnButton handlePress={() => router.push("/procurement")} />
      </View>
      <ScrollView className="px-4">
        <Text className="text-2xl text-white font-psemibold">
          Procurement History
        </Text>
        {procurementHistoryData.map((item) => (
          <View key={item.id} className="bg-gray-800 p-4 my-4 rounded-lg">
            <Text className="text-lg text-white font-semibold">{item.date}</Text>
            <View className="border-b border-gray-600 my-2" />
            <Text className="text-base text-white"><Text className="font-bold">Item:</Text> {item.item}</Text>
            <Text className="text-base text-white"><Text className="font-bold">Quantity:</Text> {item.quantity}</Text>
            <Text className={`text-base ${item.status === 'Completed' ? 'text-green-500' : item.status === 'In Progress' ? 'text-orange-500' : 'text-red-500'}`}>
              <Text className="font-bold">Status:</Text> {item.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProcurementHistory;
