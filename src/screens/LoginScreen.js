// import react native dan import lain yang dibutuhkan 
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { useFonts } from 'expo-font';
import Spacer from '../components/Spacer';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const LoginScreen = ({ navigation }) => {
  const [FullName, SetFullName] = useState('');
  const [Password, SetPassword] = useState('');

  const [loaded] = useFonts({
    Poppins_Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
    Poppins_Italic: require('../../assets/fonts/Poppins-Italic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        {/* Tambah logo */}
        <Image source={require('../../assets/byonLogo.png')} style={styles.logo} />
        <Text style={styles.text}>Full Name</Text>
        <TextInput style={styles.input} />
        <Spacer />
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} />
        <Spacer />
        <TouchableOpacity>
          <Text style={styles.text2}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text3}>
            Login
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </DismissKeyboard>
  )
}

LoginScreen.navigationOptions = {
  header: () => false
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 20,
    color: "white",
    fontFamily: "Poppins_Regular"
  },
  text2: {
    fontSize: 20,
    marginLeft: 20,
    color: "white",
    fontFamily: "Poppins_Italic",
    alignSelf: "center"
  },
  screen: {
    backgroundColor: '#001133',
    flex: 1
  },
  logo: {
    height: 70,
    width: 300,
    alignSelf: 'center',
    margin: 40,
    marginTop: 100
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    height: "6%",
    borderRadius: 10,
    alignSelf: "center",
    fontFamily: "Poppins_Regular"
  },
  button2: {
    borderRadius: 30,
    width: 175,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
    backgroundColor: '#0000b3',
    fontFamily: "Poppins_Regular"

  },
  text3: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Poppins_Regular"
  },
})

export default LoginScreen;