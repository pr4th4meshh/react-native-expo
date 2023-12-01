import { Stack } from "expo-router"

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="productdetails/[id]"
        options={{
          headerStyle: {
            backgroundColor: "#38a3a5",
          },
          headerTitle: "Product Details:",
        }}
      />
    </Stack>
  )
}

export default Layout
