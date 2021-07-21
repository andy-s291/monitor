//import react dan yang lain yang dibutuhkan
import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { Text, StyleSheet, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

//membuat create issue screen
const CreateIssueScreen = ({ navigation }) => {

  //set keterangan state
  const [keterangan, setKeterangan] = useState('');

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
          <Entypo name="attachment" size={24} color="white" style={styles.picture} />
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
  text: {
    fontSize: 40,
    marginLeft: 20,
    color: "white",
    fontWeight: 'bold'
  },
  label: {
    fontSize: 25,
    color: "white",
    fontWeight: 'bold',
    marginLeft: 20
  },
  label2: {
    fontSize: 25,
    color: "white",
    fontWeight: 'bold',
    marginLeft: 5
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
    fontWeight: 'bold'
  },
  input: {
    height: 150,
    width: '90%',
    borderRadius: 20,
    margin: 20
  },
  picture: {
    marginLeft: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  file: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    marginLeft: 40
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
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  logo: {
    height: "5%",
    width: "50%",
    alignSelf: 'center',
    bottom: -130
  }
});

//export create issue
export default CreateIssueScreen;