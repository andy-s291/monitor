//import react dan yang lain yang dibutuhkan
import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { Text, StyleSheet, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

//membuat create issue screen
const CreateIssueScreen = ({ navigation }) => {

  //set keterangan state
  const [keterangan, setKeterangan] = useState('');

  //import poppins regular font
  const [loaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.label}>Keterangan </Text>

        {/* membuat textbox */}
        <TextInput
          multiline
          placeholder="Type something here..."
          backgroundColor="white"
          value={keterangan}
          onChangeText={setKeterangan}
          style={styles.input}
        />

        <SafeAreaView style={{ flexDirection: 'row' }}>
          <Entypo name="attachment" size={30} color="white" style={styles.picture} />
          <Text style={styles.label2}>Attachment</Text>
        </SafeAreaView>

        {/* membuat no file attached touchable */}
        <TouchableOpacity >
          <Text style={styles.file}>
            No File attached
          </Text>
        </TouchableOpacity>

        {/* membuat submit button */}
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text2}>
            Submit
          </Text>
        </TouchableOpacity>

        {/* Tambah logo */}
        <Image source={require('../../assets/byonLogo.png')} style={styles.logo} />

      </SafeAreaView>
    </DismissKeyboard>
  );
};

//Membuat Header
CreateIssueScreen.navigationOptions = ({ navigation }) => {
  // header styling
  return {
    title: '',
    headerStyle: {
      backgroundColor: '#001133'
    },

    // membuat button untuk balik ke home page
    headerLeft: () => (
      <Button
        icon={<FontAwesome5 name="chevron-left" size={24} color="white" />}
        title="Create Issue"
        buttonStyle={styles.button}
        titleStyle={styles.text}
        type='clear'
        onPress={() => navigation.navigate('Home')}
      />

    )
  };
};

//membuat styles
const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    color: "white",
    marginLeft: 20,
    fontFamily: "Poppins_Bold"

  },
  label2: {
    fontSize: 25,
    color: "white",
    marginLeft: 5,
    fontFamily: "Poppins_Bold"

  },
  screen: {
    backgroundColor: '#001133',
    flex: 1
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#001133',
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 25,
    marginLeft: 5,
    color: "white",
    fontFamily: "Poppins_Bold"

  },
  input: {
    height: 150,
    width: '90%',
    borderRadius: 20,
    margin: 20,
    fontFamily: "Poppins_Bold"
  },
  picture: {
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  file: {
    fontStyle: 'italic',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    marginLeft: 40,
    fontFamily: "Poppins_Bold"

  },
  button2: {
    borderRadius: 30,
    width: 175,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
    backgroundColor: '#002b80',
    fontFamily: "Poppins_Bold"

  },
  text2: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Poppins_Bold"

  },
  logo: {
    height: "5%",
    width: "50%",
    alignSelf: 'center',
    bottom: -110,

  }
});

//export create issue
export default CreateIssueScreen;