import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";

const LoanLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="loan-history"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="loan-status"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="loan-maybank"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default LoanLayout;
