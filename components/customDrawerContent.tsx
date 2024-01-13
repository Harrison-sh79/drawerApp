import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/routers'

const customDrawerContent = (props:any) => {
  const {bottom} = useSafeAreaInsets()
  const navigation = useNavigation()
  const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer())
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props} >
        <View style={{padding:20}}>
          <Image style={{height: 25}} resizeMode='contain' source={require('../assets/logoipsum-297.png')}/>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable style={{padding: 20, paddingBottom: bottom+10, marginLeft:10 }}
      onPress={closeDrawer}>
        <Text >Logout</Text>
      </Pressable>
    </View>
  )
}

export default customDrawerContent