import React from "react"
import { FlatList, TouchableOpacity } from "react-native"
import { Text, TextInput, View, Image } from "react-native"

import avatar from "../../images/avatar.png"
import { Link } from "expo-router"

const data = [avatar, avatar, avatar, avatar, avatar, avatar, avatar]

const Welcome = () => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="What are you looking for?"
          style={{
            width: "100%",
            padding: 16,
            backgroundColor: "#f4f4f4",
            borderRadius: 20,
            paddingHorizontal: 16,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            padding: 16,
            borderRadius: 20,
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Categories</Text>
        </View>

        <TouchableOpacity>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 16 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Link href='/productdetails/1' >
            <View style={{ alignItems: "center" }}>
              <Image source={item} style={{ height: 80, width: 80 }} />
              <Text>Clothes</Text>
            </View>
            </Link>
          )}
          contentContainerStyle={{ columnGap: 12 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome
