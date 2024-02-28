import { SessionProvider } from "@/context/authentication/authentication.state";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";

import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, EvilIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { useFonts } from "expo-font";
import CustomDrawerContent from '@/components/CustomDrawerContent';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SessionProvider>
      <Drawer
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -20
        }
       }}
       drawerContent={ CustomDrawerContent }>
      <Drawer.Screen
        name="pedidos"
        options={{
          drawerLabel: 'Pedidos',
          title: 'PEDIDOS',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          ),
         }}>
      </Drawer.Screen>
      <Drawer.Screen
        name="sincronizacion"
        options={{
          drawerLabel: 'Sincronización',
          title: 'SINCRONIZACIÓN',
          drawerActiveTintColor: 'lightgray',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="retweet" size={24} color="black" />
          ),
         }}>
      </Drawer.Screen>
      <Drawer.Screen
        name="terminos"
        options={{
          drawerLabel: 'Terminos y condiciones',
          title: 'TERMINOS Y CONDICIONES',
          drawerActiveTintColor: 'lightgray',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="retweet" size={24} color="black" />
          ),
         }}>
      </Drawer.Screen>
    </Drawer>
      </SessionProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  profile:{
    margin: 20,
    flex: 1,
  },
  navItemLabel: {
    //marginLeft: -20,
    //fontSize: 18
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});