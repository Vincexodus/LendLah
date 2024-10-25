import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  Image,
  FlatList,
  Switch,
  TouchableOpacity,
} from "react-native";
import { images, icons } from "../../constants";
import { EmptyState, CustomButton, InfoBox, VideoCard } from "../../components";

const Profile = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsNotificationEnabled((previousState) => !previousState);

  const logout = async () => {
    router.replace("/"); // return to root dir
  };

  return (
    <SafeAreaView className="bg-black-100 h-full">
      <FlatList
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex flex-row w-full justify-between mb-10"
            >
              <Text className="text-2xl text-white font-psemibold">
                Profile
              </Text>
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-32 h-32 flex justify-center items-center">
              <Image
                source={images.profile}
                className="w-[90%] h-[90%] rounded-full"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title="British Shorthair"
              subtitle="britishshorthair@gmail.com"
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="flex flex-row items-center justify-between mt-10">
              <Text className="text-base text-white font-psemibold">
                Enable Push Notifications
              </Text>
              <Switch
                className="ml-6"
                value={isNotificationEnabled}
                onValueChange={toggleSwitch}
                thumbColor="#ffffff"
                trackColor={{ false: "#767577", true: "#34C759" }}
              />
            </View>

            <CustomButton
              title="KYC Verification"
              handlePress={() => router.push("/kyc")}
              containerStyles="w-full mt-7"
              isRedirect={true}
            />

            <CustomButton // decoration
              title="Change Password"
              containerStyles="w-full mt-7"
              isRedirect={true}
            />

            <CustomButton // decoration
              title="Language (EN)"
              containerStyles="w-full mt-7"
              isRedirect={true}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
