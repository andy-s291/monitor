import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const ShowScreen = ({ navigation }) => {

  const [loaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.row}>
        <Text style={styles.text}>
          Information
        </Text>
        <Text style={styles.text}>
          History
        </Text>
      </View>

      <Text style={styles.text}>
        Patient Name      : Budi
      </Text>
      <Text style={styles.text}>
        Organ Volume      : 64,4mL
      </Text>
      <Text style={styles.text}>
        Infuse Volume     : 489mL
      </Text>
      <Text style={styles.text}>
        Body Temperature  : 37°C
      </Text>
      <Text style={styles.text}>
        Heart Rate        : 82 BPM
      </Text>
      <Text style={styles.text}>
        Infuse Condition  : OK
      </Text>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.text2}>
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginLeft: 10,
    color: "white",
    fontFamily: "Poppins_Bold",
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
});

export default ShowScreen;