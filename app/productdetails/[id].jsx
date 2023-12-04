import React, { useEffect, useState } from "react"
import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native"
import { fetchSingleProd } from "../data"
import { useLocalSearchParams } from "expo-router"
import LoadingScreen from "../../components/loading"

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const { id } = useLocalSearchParams()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchSingleProd(id)
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <LoadingScreen />
  }

  return (
    <ScrollView style={{ minHeight: "auto" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: 20,
          minHeight: "auto",
        }}
      >
        <View style={{ width: "100%" }}>
          <Image
            source={{ uri: product.image, headers: { Accept: "image/*" } }}
            style={{
              height: 300,
              width: "100%",
              resizeMode: "contain",
              marginBottom: 30,
            }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {product.title}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingVertical: 5,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "light", color: "gray" }}>
              Rating: {product.rating.rate}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "light", color: "gray" }}>
              Reviews: {product.rating.count}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#22577a",
              paddingVertical: 10,
              textAlign: "center"
            }}
          >
            ${product.price}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingVertical: 10,
              marginBottom: 20
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                paddingHorizontal: 30,
                backgroundColor: "orange",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                paddingHorizontal: 30,
                backgroundColor: "#57cc99",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "light" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Description: {"\n"} {"\n"}
            </Text>
            {product.description}
          </Text>
        </View>
        <Text style={{ textAlign: "center", paddingTop: 50 }}>
          End of Products Details page
        </Text>
      </View>
    </ScrollView>
  )
}

export default ProductDetail
