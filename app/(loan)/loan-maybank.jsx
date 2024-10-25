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
import { CustomButton, ReturnButton, FormField } from "../../components";

const loanMaybank = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    document: null,
    profileImage: null,
    loanAmount: "",
  });

  const openPicker = async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });

    if (!result.canceled) {
      if (selectType === "image") {
        setForm({
          ...form,
          profileImage: result.assets[0],
        });
      }

      if (selectType === "video") {
        setForm({
          ...form,
          document: result.assets[0],
        });
      }
    }
  };

  const submit = async () => {
    if (
      (form.loanAmount === "") |
      (form.title === "") |
      !form.profileImage |
      !form.document
    ) {
      return Alert.alert("Please provide all fields");
    }

    setUploading(true);
    try {
      Alert.alert("Success", "Post uploaded successfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        title: "",
        document: null,
        profileImage: null,
        loanAmount: "",
      });

      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="bg-black-100 h-full">
      <ScrollView className="px-4 my-6">
        <View className="flex flex-row justify-left items-center">
          <ReturnButton handlePress={() => router.push("/loan")} />
          <Text className="text-2xl text-white font-psemibold ml-4">
            Maybank Loan (2-3%)
          </Text>
        </View>

        <FormField
          title="Loan Type"
          value={form.title}
          placeholder="Enter Loan Type"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Proof of Employment
          </Text>

          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.profileImage ? (
              <Image
                source={{ uri: form.profileImage.uri }}
                resizeMode="cover"
                className="w-full h-64 rounded-2xl"
              />
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

        <FormField
          title="Latest Electric Bill ID (TnB)"
          value={form.title}
          placeholder="e.g A1239959192"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <FormField
          title="Latest Water Bill ID (Syabas)"
          value={form.title}
          placeholder="e.g W1239959192"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <FormField
          title="Loan Amount"
          value={form.title}
          placeholder="e.g MYR XXXX"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <CustomButton
          title="Apply"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default loanMaybank;
