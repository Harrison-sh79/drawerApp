import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const notifications = () => {
  const navigation = useNavigation()
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer())
  return (
    <View>
      <Text>notifications</Text>
      <Button title='open drawer' onPress={()=> openDrawer()} />
    </View>
  )
}

export default notifications