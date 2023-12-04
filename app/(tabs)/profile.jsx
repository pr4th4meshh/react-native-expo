import React from "react"
import { ScrollView, Image, View, Text, Pressable } from "react-native"
import avatar from "../../images/mensclothing.webp"
import { Ionicons } from "@expo/vector-icons"

const Profile = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            marginTop: 30,
            alignItems: "center",
            flex: 1,
          }}
        >
          <Image
            source={avatar}
            style={{
              height: 190,
              width: 190,
              borderRadius: 999,
              resizeMode: "contain",
            }}
          />
          <Text style={{ paddingTop: 10, fontSize: 20, fontWeight: "bold" }}>
            Prathamesh Asolkar
          </Text>
          <Text style={{ color: "gray", fontSize: 14, fontWeight: "light" }}>
            prathameshdemoemail@pr4.com
          </Text>

          <Pressable
            style={{
              paddingVertical: 10,
              backgroundColor: "orange",
              borderRadius: 20,
              marginTop: 10,
              paddingHorizontal: 100,
            }}
          >
            <Text style={{ color: "white" }}>
              {" "}
              <Ionicons name="md-man" size={20} />
              Edit Profile
            </Text>
          </Pressable>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
              paddingHorizontal: 30,
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Pressable
                style={{
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "black", textAlign: "center" }}>
                  <Ionicons name="md-book" size={20} /> Orders
                </Text>
              </Pressable>
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Pressable
                style={{
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "black", textAlign: "center" }}>
                  <Ionicons name="md-cart" size={20} /> Cart
                </Text>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 10,
              paddingHorizontal: 30,
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Pressable
                style={{
                  paddingVertical: 10,
                  borderWidth: 1,

                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "black", textAlign: "center" }}>
                  <Ionicons name="md-heart" size={20} /> Wishlist
                </Text>
              </Pressable>
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Pressable
                style={{
                  paddingVertical: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                }}
              >
                <Text style={{ color: "black", textAlign: "center" }}>
                  <Ionicons name="md-settings" size={20} /> Settings
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Text style={{ textAlign: "center", marginTop: 50 }}>
          Made by @pr4th4meshh on GitHub, 2023.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Profile
