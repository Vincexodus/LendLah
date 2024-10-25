import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SalesLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sales-details"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default SalesLayout;
