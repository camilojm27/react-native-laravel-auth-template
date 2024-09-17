import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface TextFieldWrapperProps extends TextInputProps {
  label?: string;
}

const FormTextField: React.FC<TextFieldWrapperProps> = ({ label, ...rest }) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.textInput} autoCapitalize="none" {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "white",
    height: 40,
    marginTop: 4,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default FormTextField;
