import { SafeAreaView, ScrollView, View } from "react-native"
import { Welcome, Details } from "../../components"

const Home = () => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'white', margin: 0,  }}>
      <ScrollView showsVerticalScrollIndicator={false} >
      <Welcome />
      <Details />
      </ScrollView>
    </View>
  )
}

export default Home
