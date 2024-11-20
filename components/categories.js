import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import { categories } from '../constants'

export default function Categories() {
  return (
    <View className="mt-4">
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={styles.container}>
       {categories.map((category, index) => {
        <View key={index} className="flex justify-center items-center mr-6">
           <TouchableOpacity className="p-1 rounded-full shadow bg-gray-200">

           </TouchableOpacity>
        </View>
       })} 
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  image: {
    width: 45,
    height: 45
  }
}) 