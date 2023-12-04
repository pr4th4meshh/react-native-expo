import { Tabs } from "expo-router"
import React from "react"
import { Ionicons } from '@expo/vector-icons'

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
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
         
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Your Profile",
          title: "Profile",
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-man" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
