import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, TextInput, TouchableWithoutFeedback, Keyboard,  } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { useFonts } from 'expo-font';
import Spacer from '../components/Spacer';
// import { Picker } from '@react-native-picker/picker';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const InputScreen = ({ }) => {
  const [vitals, setVitals] = useState('');
  const [infuse, setInfuse] = useState('');

  const [loaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
    Poppins_Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        <View>
          <Text style={styles.text}>Device List</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.content}>Vital Signs</Text>
          <TextInput
            backgroundColor="white"
            value={vitals}
            onChangeText={setVitals}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.content}>Infuse</Text>
          <TextInput
            backgroundColor="white"
            value={infuse}
            onChangeText={setInfuse}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.content}>Oxygen</Text>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  )
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#001133',
    flex: 1,
  },
  text: {
    fontFamily: "Poppins_Regular",
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    margin: 20
  },
  content: {
    fontFamily: "Poppins_Regular",
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    margin: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
  },
  input: {
    height: 40,
    width: '50%',
    borderRadius: 10,
    margin: 20,
    fontFamily: "Poppins_Bold"
  },
})

export default InputScreen