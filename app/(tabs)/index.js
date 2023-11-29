import { View } from "react-native"
import { Welcome, Details } from "../../components"

const Home = () => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <Welcome />
      <Details />
    </View>
  )
}

export default Home
