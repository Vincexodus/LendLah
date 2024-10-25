import React, { useState } from "react";
import { router } from "expo-router";
import { Text, View, Image, Switch, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import { CustomButton } from "../../components";
import { images } from "../../constants";

const Sales = () => {
  const [selectedMonth, setSelectedMonth] = useState("June");
  const [selectedYear, setSelectedYear] = useState("2024");

  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const years = [
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    // Add more years as needed
  ];

  return (
    <SafeAreaView className="bg-black-100 h-full">
      <ScrollView className="px-4 mt-6">
        <Text className="text-2xl text-white font-psemibold">Sales</Text>
        <View className="mt-4 flex flex-row justify-between">
          <View className="flex-1 mr-2">
            <RNPickerSelect
              onValueChange={(value) => setSelectedMonth(value)}
              items={months}
              value={selectedMonth}
              style={{
                inputIOS: {
                  color: "white",
                  padding: 10,
                  backgroundColor: "#333",
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#555",
                  marginBottom: 10,
                  paddingRight: 30,
                },
                iconContainer: {
                  top: 10,
                  right: 12,
                },
                placeholder: {
                  color: "white",
                },
              }}
              Icon={() => {
                return <Ionicons name="chevron-down" size={24} color="white" />;
              }}
              placeholder={{
                label: "Select Month",
                value: null,
                color: "white",
              }}
            />
          </View>
          <View className="flex-1 ml-2">
            <RNPickerSelect
              onValueChange={(value) => setSelectedYear(value)}
              items={years}
              value={selectedYear}
              style={{
                inputIOS: {
                  color: "white",
                  padding: 10,
                  backgroundColor: "#333",
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#555",
                  marginBottom: 10,
                  paddingRight: 30,
                },
                iconContainer: {
                  top: 10,
                  right: 12,
                },
                placeholder: {
                  color: "white",
                },
              }}
              Icon={() => {
                return <Ionicons name="chevron-down" size={24} color="white" />;
              }}
              placeholder={{
                label: "Select Year",
                value: null,
                color: "white",
              }}
            />
          </View>
        </View>
        <Image
          source={images.line_graph}
          resizeMode="contain"
          className="w-full h-64"
        />
        <Text className="text-base text-green-500 font-psemibold mt-0">
          Sales Today: RM 1000
        </Text>
        <Text className="text-base text-red-500 font-psemibold">
          Remaining Loan Due: RM 1000
        </Text>
        <CustomButton
          title="View Sales Details"
          handlePress={() => router.push("/sales-details")}
          containerStyles="w-full mt-7"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sales;
