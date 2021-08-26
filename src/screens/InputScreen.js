import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, TextInput, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const InputScreen = ({ }) => {
  const [vitals, setVitals] = useState('');
  const [infuse, setInfuse] = useState('');
  const [oxygen, setOxygen] = useState();

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
          <View style={styles.container}>
            <RNPickerSelect
              placeholder={{ label: "No. device", value: null }}
              onValueChange={(value) => setOxygen(value)}
              items={[
                { label: "01", value: "1" },
                { label: "02", value: "2" },
                { label: "03", value: "3" },
              ]}
            />
          </View>
        </View>

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

InputScreen.navigationOptions = ({ navigation }) => {
  // header styling
  return {
    title: '',
    headerStyle: {
      backgroundColor: 'red'
    },

    // membuat button untuk balik ke home page
    headerLeft: () => (
      <Button
        icon={<FontAwesome5 name="chevron-left" size={24} color="white" />}
        title="Room Mawar MA01"
        buttonStyle={styles.button}
        titleStyle={styles.text}
        type='clear'
        onPress={() => navigation.navigate('Emergency')}
      />

    )
  };
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
  picker: {
    height: 40,
    width: '50%',
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20
  },
  picker_item: {
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    fontFamily: "Poppins_Regular",
  },
  picker_item_android: {
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    fontFamily: "Poppins_Regular",
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

  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
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
  container : {
    height: 40,
    width: '50%',
    borderRadius: 10,
    margin:20,
    backgroundColor : "#fff",
    alignItems      : "center",
    justifyContent  : "center",
},
})

export default InputScreen;