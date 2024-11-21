import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-web";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null)
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={styles.container}
      >
 
 {categories.map((category, index) => {
          const isActive = category.id === activeCategory;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

          return (
            <View key={index} className='flex justify-center items-center mr-6'>
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={"p-1 rounded-full shadow bg-gray-200" + btnClass}
              >
                <Image style={styles.image} source={category.image} />
                <Text className={"text-sm" + textClass}>{category.name}</Text>

              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  image: {
    width: 45,
    height: 45,
  },
});
