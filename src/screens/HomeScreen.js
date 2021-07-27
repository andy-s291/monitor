// import react native dan import lain yang dibutuhkan 
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { Badge, withBadge } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// membuat component Home Screen
const HomeScreen = ({ navigation }) => {

  //set switch state dan buat function untuk switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  //import font
  const [loaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    //membuat background screen
    <SafeAreaView style={styles.screen}>
      {/*membuat switch sama apply styling*/}
      <View style={styles.switch}>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      {/* Tambah logo */}
      <Image source={require('../../assets/byonLogo.png')} style={styles.logo} />

      {/* Membuat Emergency button */}
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Emergency')}>

        {/* Tamabah Badge */}
        {
          isEnabled ? <Badge
            containerStyle={{ position: 'absolute', top: -15, right: 10 }}
            value="2"
            status="warning"
            badgeStyle={{ height: 35, width: 35, borderRadius: 20 }}
            textStyle={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}
          /> : null
        }

        <MaterialCommunityIcons name="alarm-light-outline" size={24} color="white" />
        <Text style={styles.text}>Emergency</Text>
      </TouchableOpacity>

      {/* Membuat create issue button */}
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('CreateIssue')}>
        <AntDesign name="exclamationcircleo" size={24} color="black" />
        <Text style={styles.text}>Create Issue</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

//Set header jadi false
HomeScreen.navigationOptions = {
  header: () => false
};

//Buat styles untuk components
const styles = StyleSheet.create({
  button1: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 35,
    borderRadius: 10,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  button2: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 35,
    borderRadius: 10,
    backgroundColor: '#00ff00',
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    marginLeft: 5,
    color: "white",
    fontFamily: "Poppins_Bold"
  },
  screen: {
    backgroundColor: '#001133',
    flex: 1
  },
  logo: {
    height: 70,
    width: 300,
    alignSelf: 'center',
    margin: 40
  },
  switch: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'flex-end',
    margin: 30,
  }
});

//export home screen
export default HomeScreen;