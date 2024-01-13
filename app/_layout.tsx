import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import customDrawerContent from '../components/customDrawerContent';

export default function _layout() {
  return (
    <Drawer screenOptions={{
      drawerLabelStyle: {
        marginLeft: -20
      },
      drawerActiveBackgroundColor: 'gray',
      drawerActiveTintColor: 'white'
    }}
    drawerContent={customDrawerContent}
    >
      <Drawer.Screen name='home' options={{
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="home-sharp" size={size} color={color} />
        )
      }} />
      <Drawer.Screen name='index' options={{
        title: 'About',
        drawerLabel: 'About',
        drawerIcon: ({ color, size }) => (
          <Ionicons name='ios-information-circle-outline' size={size} color={color} />
        )
      }} />
    </Drawer>
  )
}