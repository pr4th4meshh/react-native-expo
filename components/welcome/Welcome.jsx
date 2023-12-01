import React from "react"
import { FlatList, TouchableOpacity } from "react-native"
import { Text, TextInput, View, Image } from "react-native"

import womens from "../../images/womensclothing.webp"
import mens from "../../images/womensclothing.webp"
import jewelery from "../../images/jewelery.jpeg"
import electronics from "../../images/electronics.webp"

import { Link } from "expo-router"

const data = [
  {
    image: electronics,
    categoryName: "Electronics",
    categoryType: '/electronics'
  },
  {
    image: jewelery,
    categoryName: "Jewelery",
    categoryType: '/jewelery'
  },
  {
    image: mens,
    categoryName: "Men's Clothing",
    categoryType: `/men's clothing`
  },
  {
    image: womens,
    categoryName: "Women's Clothing",
    categoryType: `/women's clothing`
  },
]

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
          <Text style={{ color: "#38a3a5" }}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 16, marginBottom: 20 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Link href={`/productcategory/${item.categoryType}`}>
              <View style={{ alignItems: "center" }}>
                <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 50, resizeMode: "contain" }} />
                <Text>{item.categoryName}</Text>
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
