import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{
          headerTitle: "Home",
          title: "Home",
          headerTitleAlign: 'center'
        }} />
        <Tabs.Screen name='profile' options={{
            headerTitle: "Your Profile",
            title: "Profile"
        }} />
    </Tabs>
  )
}

export default TabsLayout