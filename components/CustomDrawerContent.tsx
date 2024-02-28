import { Text, Pressable, Image, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { View } from '@/components/Themed';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props:any) {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={{ backgroundColor: '#1873e7', height: 120 }}>
        <Text style={{ marginTop: 50, paddingHorizontal: 20, color: 'white', fontSize: 20, fontWeight: 'bold' }}>BARES Y RESTAURANTES</Text>
        <Text style={{ paddingHorizontal: 20, color: 'white', fontSize: 20 }}>TERCERO AUXILIAR</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <Text style={{ paddingHorizontal: 20, color: 'gray' }}>Menú principal</Text>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <Pressable style={{ padding: 20 }}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={{ fontSize: 10, color: 'gray' }}>Copyright @ Logis ERP 2024</Text>
        <Text style={{ fontSize: 10, color: 'gray' }}>Todos los derechos reservados</Text>
        {/* <View style={{ padding: 20 }}>
          <Image style={styles.stretch} source={require('../assets/images/logo.png')}/>
        </View> */}
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 100,
    height: 50,
    resizeMode: 'stretch',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
});