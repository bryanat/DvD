import React from 'react'
import { View } from 'react-native'
import { Text } from '../../components/Themed'

export default function Question1(props) {
    return (
      <View>
        <Text>Name: <input name="name" /></Text>
      </View>
    )
}
