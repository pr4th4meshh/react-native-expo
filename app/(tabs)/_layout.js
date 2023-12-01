import { Tabs } from "expo-router"
import React from "react"

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "PR4MAZON",
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#38a3a5",
          },
          headerTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Your Profile",
          title: "Profile",
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
