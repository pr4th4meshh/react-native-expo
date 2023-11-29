import { Stack, useLocalSearchParams } from "expo-router"
import React from "react"
import { View, Text } from "react-native"

const Productdetails = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>Some text : {id}</Text>
    </View>
  )
}

export default Productdetails
