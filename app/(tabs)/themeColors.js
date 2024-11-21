
import React from 'react';
import { View, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <View>
      <Text>Explore Screen</Text>
    </View>
  );
}

export const themeColors = {
  text: '#f97316',
  bgColor: opacity=> `rgba(251,146,60, ${opacity})`
}