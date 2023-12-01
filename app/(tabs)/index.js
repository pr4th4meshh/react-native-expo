import { ScrollView, View } from "react-native"
import { Welcome, Details } from "../../components"

const Home = () => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white',  }}>
      <ScrollView showsVerticalScrollIndicator={false} >
      <Welcome />
      <Details />
      </ScrollView>
    </View>
  )
}

export default Home
