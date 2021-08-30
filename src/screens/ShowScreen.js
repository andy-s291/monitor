import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Spacer from '../components/Spacer';

const ShowScreen = () => {
  // Load fonts
  const [loaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
    Poppins_Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.screen}>
      {/* Buat context */}
      <View style={styles.row}>
        <Text style={styles.header}>
          Information
        </Text>
        <Text style={styles.header}>
          History
        </Text>
      </View>

      <Text style={styles.content}>
        Patient Name           :  Budi
      </Text>

      <Spacer />

      <Text style={styles.content}>
        Organ Volume         :  64,4mL
      </Text>

      <Spacer />

      <Text style={styles.content}>
        Infuse Volume          :  489mL
      </Text>

      <Spacer />

      <Text style={styles.content}>
        Body Temperature  :  37°C
      </Text>

      <Spacer />

      <Text style={styles.content}>
        Heart Rate                 :  82 BPM
      </Text>

      <Spacer />

      <Text style={styles.content}>
        Infuse Condition      :  OK
      </Text>

      {/* Tamabah button, tinggal tambah function */}
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.button_text}>
          Request Hospital Discharge
        </Text>
      </TouchableOpacity>

      <Image source={require('../../assets/byonLogo.png')} style={styles.logo} />

    </SafeAreaView>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    title: '',
    headerStyle: {
      backgroundColor: '#001133'
    },
    // membuat button untuk balik home page
    headerLeft: () => (
      <Button
        icon={<FontAwesome5 name="chevron-left" size={24} color="white" />}
        title="Dahlia - DA01"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        type='clear'
        onPress={() => navigation.navigate('AllData')}
      />
    )
  };
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginLeft: 10,
    color: "white",
    fontFamily: "Poppins_Bold",
  },
  content: {
    fontSize: 25,
    marginLeft: 10,
    color: "white",
    fontFamily: "Poppins_Regular",
  },
  screen: {
    backgroundColor: '#001133',
    flex: 1,
    fontFamily: "Poppins_Bold"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  button2: {
    borderRadius: 30,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
    backgroundColor: '#002b80',
    fontFamily: "Poppins_Bold"

  },
  button_text: {
    color: 'white',
    fontSize:18,
    fontFamily: "Poppins_Regular"
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Poppins_Bold"
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontFamily: "Poppins_Bold",
    marginLeft: 10
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
  logo: {
    height: "5%",
    width: "50%",
    alignSelf: 'center',
    marginTop: 30
  }
});

export default ShowScreen;