import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ProcurementLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="procurement"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="request-procurement"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="track-procurement"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="procurement-history"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default ProcurementLayout;
