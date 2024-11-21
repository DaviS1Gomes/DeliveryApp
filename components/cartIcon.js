import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '@/app/(tabs)/themeColors'

export default function CartIcon() {
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
            style={styles.backgroundColorTouchable}
            className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
                <View className="p-2 px-4 rounded-full" style={styles.backgroundColorView} >
                    <Text className="font-extrabold text-white text-lg">
                        3
                    </Text>
                </View>
                <Text className="flex-1 text-center font-extrabold text-white text-lg">
                    View cart
                </Text>
            <Text className="font-extrabold text-white text-lg">
                ${23}
            </Text>
        </TouchableOpacity> 
    </View>
  )
}


const styles = StyleSheet.create({
    backgroundColorTouchable: {
        backgroundColor: themeColors.bgColor(1),
    },
    backgroundColorView: {
        backgroundColor: 'rgba(255,255,255,0.3)'
    }
    
})