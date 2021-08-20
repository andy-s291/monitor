// import react native dan import lain yang dibutuhkan 
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { Badge, withBadge } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// membuat component Home Screen
const HomeScreen = ({ navigation }) => {

  //set switch state dan buat function untuk switch
  const [isEnabled, setIsEnabled] = useState(false);
  // setIsEnabled(previousState => !previousState);

  var touchProps = {
    activeOpacity: 1,
    style: isEnabled ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onPress: () => setIsEnabled(previousState => !previousState),                 // <-- "onPress" is apparently required
  };

  //import font
  const [loaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
    Poppins_Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  };

  return (
    //membuat background screen
    <SafeAreaView style={styles.screen}>
      {/*membuat switch sama apply styling*/}
      <View style={styles.switch}>
        <TouchableHighlight {...touchProps}>
          <Text></Text>
        </TouchableHighlight>
        {isEnabled ? <Text style={styles.btnText}>On-Shift</Text> : <Text style={styles.btnText}>Off-Shift</Text>}
      </View>

      {/* Tambah logo */}
      <Image source={require('../../assets/byonLogo.png')} style={styles.logo} />

      {/* Membuat Emergency button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Emergency')}>

        {/* Tamabah Badge */}
        <Badge
          containerStyle={{ position: 'absolute', top: -15, right: 10 }}
          value="2"
          status="error"
          badgeStyle={{ height: 35, width: 35, borderRadius: 20 }}
          textStyle={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}
        />

        <MaterialCommunityIcons name="alarm-light-outline" size={24} color="#001133" />
        <Text style={styles.text}>Emergency</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllData')}>
        <Entypo name="database" size={24} color="#001133" />
        <Text style={styles.text}>All Data</Text>
      </TouchableOpacity>

      {/* Membuat create issue button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateIssue')}>
        <AntDesign name="exclamationcircle" size={24} color="black" />
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
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 35,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    marginLeft: 5,
    color: "#001133",
    fontFamily: "Poppins_Bold",
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
  },
  btnNormal: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 400,
    height: 50,
    width: 50,
  },
  btnPress: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 400,
    height: 50,
    width: 50,
  },
  btnText: {
    fontFamily: "Poppins_Regular",
    color: "white",
    fontSize: 15,
    marginTop: 5,
  }
});

//export home screen
export default HomeScreen;