import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../app/(tabs)/themeColors";

export default function RestaurantCard() {
  return (
    <TouchableWithoutFeedback
    onPress={()=> navigation.navigate('Restaurant', (...item))}>
      <View style={styles.container}> </View>
      <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={require("")} className="h-4 w-4" />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review) |{" "}
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin style={styles.iconMapStyle} />
            <Text className="text-gray-700 text-xs">
              Nearby | {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  iconMapStyle: {
    color: "gray",
    width: 15,
    height: 15,
  },
  container:{
    shadowColor: themeColors.bgColor(0.2),
    shadowRadius: 7
  }
});
