// import React dan yang lainnya
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// membuat mock date variable
var currDate = new Date();

//List untuk months
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//mock data untuk emergency patients
const emergency_patients = [
  {
    name: 'Melati',
    id: 'ME02',
    date: currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear() + "\n" + currDate.getHours() + ":" + currDate.getMinutes()
  },
  {
    name: 'Mawar',
    id: 'MA01',
    date: currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear() + "\n" + currDate.getHours() + ":" + currDate.getMinutes()
  }
]

//mock data untuk patients
const patients = [
  {
    name: 'Melati',
    id: 'ME02',
    date: currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear() + "\n" + currDate.getHours() + ":" + currDate.getMinutes()
  },
  {
    name: 'Mawar',
    id: 'MA01',
    date: currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear() + "\n" + currDate.getHours() + ":" + currDate.getMinutes()
  },
  {
    name: 'Dahlia',
    id: 'DA01',
    date: currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear() + "\n" + currDate.getHours() + ":" + currDate.getMinutes()
  },
  {
    name: 'Dahlia',
    id: 'DA02',
    date: currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear() + "\n" + currDate.getHours() + ":" + currDate.getMinutes()
  }
]

// membuat emergency screen
const AllDataScreen = ({ navigation }) => {

  //import poppins regular font
  const [loaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  //function untuk check if emergency patient
  function patientExists(id) {
    return emergency_patients.some(function (el) {
      return el.id === id;
    });
  }

  return (
    // membuat list 
    <SafeAreaView style={styles.screen}>
      <FlatList
        keyExtractor={patient => patient.id}
        data={patients}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show')}>
              <View style={styles.row}>

                {/* condition untuk display for emergency patients */}
                {patientExists(item.id) ?
                  <Text style={styles.emergency_title}>{item.name} - {item.id}</Text>
                  : <Text style={styles.normal_title}>{item.name} - {item.id}</Text>}

                {patientExists(item.id) ?
                  <Text style={styles.emergency_title}>{item.date}</Text>
                  : <Text style={styles.normal_title}>{item.date}</Text>}
              </View>
            </TouchableOpacity>
          )
        }}
      />
      {/*Logo */}
      <Image source={require('../../assets/byonLogo.png')} style={styles.logo} />
    </SafeAreaView>
  );
};

// membuat header left
AllDataScreen.navigationOptions = ({ navigation }) => {
  return {
    title: '',
    headerStyle: {
      backgroundColor: '#001133'
    },
    // membuat button untuk balik home page
    headerLeft: () => (
      <Button
        icon={<FontAwesome5 name="chevron-left" size={24} color="white" />}
        title="All Data"
        buttonStyle={styles.button}
        titleStyle={styles.text}
        type='clear'
        onPress={() => navigation.navigate('Home')}
      />
    )
  };
};

// membuat styles
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginLeft: 10,
    color: "white",
    fontFamily: "Poppins_Bold"
  },
  screen: {
    backgroundColor: '#001133',
    flex: 1,
    fontFamily: "Poppins_Bold"
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },

  emergency_title: {
    fontSize: 18,
    color: 'red',
    fontFamily: "Poppins_Bold"
  },
  normal_title: {
    fontSize: 18,
    color: 'white',
    fontFamily: "Poppins_Bold"
  },
  ModalBackground1: {
    backgroundColor: 'white',
    height: '50%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center'
  },
  ModalBackground2: {
    backgroundColor: 'red',
    height: '30%',
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    alignItems: 'center'
  },
  ModalHeaderText1: {
    fontSize: 24,
    color: 'white',
    marginTop: 15,
    fontFamily: "Poppins_Bold"

  },
  ModalHeaderText2: {
    fontSize: 20,
    color: 'white',
    fontSize: 24,
    fontFamily: "Poppins_Bold"

  },
  ModalBodyText1: {
    color: 'red',
    fontSize: 30,
    fontFamily: "Poppins_Bold"

  },
  ModalBodyText2: {
    color: 'red',
    fontSize: 15,
    fontFamily: "Poppins_Bold"

  },
  logo: {
    height: "5%",
    width: "50%",
    alignSelf: 'center',
    bottom: 50
  },
  icon: {
    height: 110,
    width: 125,
    marginTop: 20
  }
});

// export emergency screen
export default AllDataScreen;