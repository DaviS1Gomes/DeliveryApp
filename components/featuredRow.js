import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import React from 'react' 
import { themeColors } from "../app/(tabs)/themeColors";
import RestaurantCard from './restaurantCard';

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg"> {title} </Text>
          <Text className = "text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity> 
          <Text style ={styles.colorText} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      className="overflow-visible py-5">
        {
          restaurants.map ((restaurant, index) = {
            return (
              <RestaurantCard
              item ={restaurant}
              key={index} />
            )
          })
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create ({
  colorText:{
    color: themeColors.text,
  },
  contentContainerStyle: {
    paddingHorizontal: 15
  }
})