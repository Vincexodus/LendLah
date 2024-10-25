import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { View, Text, Image, ScrollView, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton } from "../components";
// import { signIn, getCurrentUser } from "../lib/appwrite";
// import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "britishshorthair@gmail.com",
    password: "123456789",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);

    try {
      // Uncomment and update with your sign-in logic
      // await signIn(form.email, form.password);
      // const result = await getCurrentUser();
      // setUser(result);
      // setIsLogged(true);

      Alert.alert("Success", "You have signed in successfully!");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-black-100 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.lendlahLogo}
            className="w-[200px] h-[200px] rounded-full"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              <Text className="text-secondary-100">LendLah</Text>
            </Text>
          </View>

          <View className="relative">
            <Text className="italic text-lg text-white text-center">
              <Text className="text-white">LendLah, your business boost ~</Text>
            </Text>
          </View>

          {/* Sign-In Form */}
          <View className="w-full mt-10">
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              className="bg-gray-800 text-white p-4 rounded mb-4 w-full"
              keyboardType="email-address"
              style={{ width: "100%", fontSize: 16, height: 50 }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              className="bg-gray-800 text-white p-4 rounded mb-4 w-full"
              secureTextEntry={true}
              style={{ width: "100%", fontSize: 16, height: 50 }}
            />
            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="w-full mt-7"
              isLoading={isSubmitting}
              buttonStyles={{ height: 50 }}
              textStyles={{ fontSize: 16 }}
            />
          </View>

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Text
              // onPress={() => router.push("/sign-up")}
              className="text-sm font-psemibold text-secondary-100"
            >
              Signup
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 text-center mt-10">
            By OpenBank
          </Text>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
