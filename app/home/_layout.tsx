import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen name='settings' options={{
        title: 'Settings',
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-settings" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name='notifications' options={{
        title: 'Notifications',
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-notifications" size={size} color={color} />
        )
      }} />
    </Tabs>
  )
}

export default _layout