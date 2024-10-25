import { useState } from "react";
import { router } from "expo-router";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { icons } from "../../constants";
import { CustomButton, FormField, ReturnButton } from "../../components";

const RequestProcurement = () => {
  const [uploading, setUploading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    procurementDetails: null,
    financialStatements: null,
  });

  const openPicker = async (field) => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "image/png", "image/jpg"],
    });

    if (!result.canceled) {
      setForm({
        ...form,
        [field]: result,
      });
    } else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };

  const submit = async () => {
    if (!form.procurementDetails || !form.financialStatements || !isChecked) {
      return Alert.alert("Please provide all fields and agree to the terms");
    }

    setUploading(true);
    try {
      Alert.alert("Success", "Request submitted successfully");
      router.push("/procurement");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        procurementDetails: null,
        financialStatements: null,
      });

      setUploading(false);
      setIsChecked(false);
    }
  };

  return (
    <SafeAreaView className="bg-black-100 h-full">
      <ScrollView className="px-4 my-6">
        <View className="flex flex-row justify-left items-center">
          <ReturnButton handlePress={() => router.push("/procurement")} />
        </View>
        <Text className="text-2xl text-white font-psemibold my-3">Request Procurement</Text>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Procurement Details
          </Text>

          <TouchableOpacity onPress={() => openPicker("procurementDetails")}>
            {form.procurementDetails ? (
              <Text className="text-base text-green-500">{form.procurementDetails.name}</Text>
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  alt="upload"
                  className="w-5 h-5"
                />
                <Text className="text-sm text-gray-100 font-pmedium">
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Financial Statements
          </Text>

          <TouchableOpacity onPress={() => openPicker("financialStatements")}>
            {form.financialStatements ? (
              <Text className="text-base text-green-500">{form.financialStatements.name}</Text>
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  alt="upload"
                  className="w-5 h-5"
                />
                <Text className="text-sm text-gray-100 font-pmedium">
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Repayment and Financing Terms
          </Text>
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={{
                height: 24,
                width: 24,
                borderRadius: 4,
                borderWidth: 2,
                borderColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              {isChecked && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 2,
                    backgroundColor: "#34C759",
                  }}
                />
              )}
            </TouchableOpacity>
            <Text className="text-sm text-gray-100 font-pmedium" style={{ flex: 1 }}>
              I agree to the terms of repayment, including the repayment percentage from daily sales (e.g., 13%).{"\n"}
              I also agree to the platform fee (e.g., 3%) and any interest charges.
            </Text>
          </View>
        </View>

        <CustomButton
          title="Submit"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RequestProcurement;
