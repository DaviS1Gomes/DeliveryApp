import {View, Text} from 'react-native'
import React, { useEffect } from 'react'

export default function OrderPrepairingScreen()  {
    useEffect(()=>{
        setTimeout(()=>{
            // move to delivery screen
            Navigation.navigate('DeliveryScreen');
        }, 3000)

    }, [])
    return (
        <View className="flex-1 bg-white justify-center item-center">
        </View>
    )
}