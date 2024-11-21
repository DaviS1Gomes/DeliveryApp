import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../app/(tabs)/themeColors";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content"/>
        <View className="flex-row items-center space-x-2 px4 pb-2">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search style={styles.iconSearch}/>
            <TextInput placeholder="Restaurante" className="ml-2 flex-1"/>
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300" >
              <Icon.MapPin style={styles.iconMapPin}/>
              <Text className="text-gray-600">Taguatinga, DF</Text>
            </View>
          </View>
          <View style={style.containerIconSlider} className="p-3 rounded-full">
            <Icon.Sliders style={styles.iconSlider}/>
          </View>
        </View>

    <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle= {styles.contentContainerStyle}
    >
      <Categories / >

      <View className="mt-5">
        {
          [featured, featured, featured].map((item, index) => {{
            return(
              <FeaturedRow 
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description = {item.description}
              />
            )
          }})
        }
      </View>
    </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    background: "#fff",
  },
  iconSearch: {
    height: 25,
    width: 25,
    stroke: 'gray'
  },
  iconMapPin: {
    height: 20,
    width: 20,
    stroke: 'gray'
  },
  containerIconSlider: {
    backgroundColor: themeColors.bgColor(1),
  },
  iconSlider: {
    height: 20,
    width: 20,
    strokeWidth: 2.5,
    stroke: "#fff"
  },
  contentContainerStyle: {
    paddingBottom: 20,
  }

});
