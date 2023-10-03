import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { useSession } from "@/context/authentication/authentication.context";

export default function LoginScreen() {
  const values = useSession();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Pressable onPress={values?.signIn} style={{ padding: 10 }}>
        <Text>Ingresar</Text>
      </Pressable>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(app)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});