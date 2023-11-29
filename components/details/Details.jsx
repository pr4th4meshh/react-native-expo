import React, { useState, useEffect } from "react"
import { Text } from "react-native"
import { View, FlatList, Image, StyleSheet } from "react-native"
import { Link, Stack } from "expo-router"
import { FlatGrid } from "react-native-super-grid"
import { fetchProducts } from "../../app/data"
import { ScrollView } from "react-native-gesture-handler"

const Details = () => {
  const [products, setProducts] = useState([])
  console.log(products)

  const styles = StyleSheet.create({
    container: {
      height: 250,
      backgroundColor: "white",
      borderRadius: 5,
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    text: {
      textAlign: "center",
    },
  })

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchProducts() // Fetch products from the API
        setProducts(data) // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchData()
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <FlatGrid
        itemDimension={130}
        data={products.slice(0, 12)}
        style={styles.gridView}
        showsVerticalScrollIndicator={false}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={styles.container} >
            <Image
              source={{ uri: item.image, headers: { Accept: "image/*" } }}
              style={{ height: 180, width: '100%', resizeMode: "contain" }}
            />

            <Text style={styles.itemName}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Details
