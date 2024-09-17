import FormTextField from "@/components/FormTextField";
import { SetStateAction, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: GestureResponderEvent): void {
    console.log("hola");
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FormTextField
          label="Email address:"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <FormTextField
          label="Password:"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Submit" onPress={handleLogin}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: "#ffff", flex: 1 },
  container: {
    padding: 20,
    rowGap: 16,
  },
});
