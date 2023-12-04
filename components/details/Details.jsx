import React, { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, SafeAreaView } from "react-native"
import { Link } from "expo-router"
import { FlatGrid } from "react-native-super-grid"
import { fetchProducts } from "../../app/data"

const Details = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [isEndReached, setIsEndReached] = useState(false)

  useEffect(() => {
    loadInitialData()
  }, [])

  const loadInitialData = async () => {
    setLoading(true)
    try {
      const initialData = await fetchProducts(page)
      setProducts(initialData)
      // setPage(page + 1) // INFINITE SCROLL
      setLoading(false)
    } catch (error) {
      console.error("Error fetching initial data:", error)
      setLoading(false)
    }
  }

  // FUNCTION FOR INFINITE SCROLLING

  // const loadMoreData = async ({ distanceFromEnd }) => {
  //   if (!loading && distanceFromEnd < 0.01) {
  //     setLoading(true)
  //     try {
  //       const newData = await fetchProducts(page)
  //       if (newData.length > 0) {
  //         setProducts([...products, ...newData])
  //         setPage(page + 1)
  //       } else {
  //         setIsEndReached(true)
  //       }
  //     } catch (error) {
  //       console.error("Error fetching more data:", error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }

  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
  }

  const renderItem = ({ item }) => (
    <Link href={`productdetails/${item.id}`}>
      <View style={styles.container}>
        <Image
          source={{
            uri: item.image,
            headers: { Accept: "image/*" },
          }}
          style={{ height: 180, width: "100%", resizeMode: "contain" }}
        />
        <Text style={styles.itemName}>{item.title}...</Text>
      </View>
    </Link>
  )

  const handleScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y
    const layoutHeight = event.nativeEvent.layoutMeasurement.height
    const contentHeight = event.nativeEvent.contentSize.height

    const reachedEnd = offsetY >= contentHeight - layoutHeight

    if (reachedEnd && !loading && !isEndReached) {
      loadMoreData()
    }
  }

  return (
    <View style={{ flex: 1, margin: 0, padding: 0 }}>
      <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
        <FlatGrid
          itemDimension={130}
          data={products}
          style={styles.gridView}
          showsVerticalScrollIndicator={false}
          spacing={10}
          renderItem={renderItem}
          // onEndReached={loadMoreData}
          ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
    </View>
  )
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

export default Details
