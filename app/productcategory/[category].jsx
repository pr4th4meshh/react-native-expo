import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native"
import { useLocalSearchParams, Link } from "expo-router"
import { FlatGrid } from "react-native-super-grid"
import { fetchProductsByCategory } from "../data"
import { useNavigation } from "@react-navigation/native"
import loadingSpinner from "../../images/spinner.svg"
import LoadingScreen from "../../components/loading"

const CategoryPage = () => {
  const [product, setProduct] = useState([])
  const { category } = useLocalSearchParams()

  const navigation = useNavigation()

  const uniqueCategory = [
    ...new Set(
      product.map(
        (item) => item.category.charAt(0).toUpperCase() + item.category.slice(1)
      )
    ),
  ]

  // Update header title when the component mounts
  navigation.setOptions({
    title: `${uniqueCategory}`, // Change this to your desired title
  })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductsByCategory(category)
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    fetchProduct()
  }, [category])

  if (!product) {
    return <LoadingScreen />
  }

  const styles = StyleSheet.create({
    container: {
      height: 250,
      width: 160,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 5,
      justifyContent: "center",
      shadowColor: "#000",
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    text: {
      textAlign: "center",
    },
  })
  return (
    <View style={{ flex: 1 }}>
      <FlatGrid
        itemDimension={130}
        data={product}
        style={styles.gridView}
        showsVerticalScrollIndicator
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <Link href={`productdetails/${item.id}`}>
            <View style={styles.container}>
              <Image
                source={{ uri: item.image, headers: { Accept: "image/*" } }}
                style={{ height: 180, width: "100%", resizeMode: "contain" }}
              />

              <Text style={styles.itemName}>{item.title.slice(0, 18)}...</Text>
            </View>
          </Link>
        )}
      />
    </View>
  )
}

export default CategoryPage
