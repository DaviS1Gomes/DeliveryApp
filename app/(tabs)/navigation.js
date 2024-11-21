import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "../../screens/HomeScreen";
import RestaurantScreen from "../../screens/RestaurantScreen";
import CartScreen from "../../screens/CartScreen";
import DeliveryScreen from "../../screens/DeliveryScreen";
import OrderPrepairingScreen from "../../screens/OrderPrepairingScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="NotFound"
          component={() => <Text>Screen not found</Text>}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPrepairing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPrepairingScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
