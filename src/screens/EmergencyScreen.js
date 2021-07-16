// import React dan yang lainnya
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import Modal from 'react-native-modal';

// membuat mock date variable
var currDate = new Date();

// mock data
const patients = [
  {
    name: 'Melati',
    id: 'ME02',
    date: currDate.getDate() + "/" + currDate.getMonth() + "/" + currDate.getFullYear() + " " + currDate.getHours() + ":" + currDate.getMinutes()
  },
  {
    name: 'Mawar',
    id: 'MA01',
    date: currDate.getDate() + "/" + currDate.getMonth() + "/" + currDate.getFullYear() + " " + currDate.getHours() + ":" + currDate.getMinutes()
  }
]

// membuat emergency screen
const EmergencyScreen = ({ navigation }) => {

  // set modal false
  const [isModalVisible, setModalVisible] = useState(false);

  // set toggle modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    // membuat list 
    <SafeAreaView style={styles.screen}>
      <FlatList
        keyExtractor={patient => patient.id}
        data={patients}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => toggleModal()}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.name} - {item.id}</Text>
                <Text style={styles.title}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />

      {/* membuat pop up */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.ModalBackground1}>

          {/* membuat popup header */}
          <View style={styles.ModalBackground2}>
            <Text style={styles.ModalHeaderText1}>Room Name</Text>
            <Text style={styles.ModalHeaderText2}>Id number</Text>
          </View>
          <Image source={require('../../assets/warning-icon.png')} style={styles.icon} />
          <Text style={styles.ModalBodyText1}>WARNING!</Text>
          <Text style={styles.ModalBodyText2}>IV Fluids Almost Runs Out</Text>
        </View>
      </Modal>

      <Image source={require('../../assets/byonLogo.png')} style={styles.logo} />
    </SafeAreaView>
  );
};

// membuat header left
EmergencyScreen.navigationOptions = ({ navigation }) => {
  return {
    title: '',
    headerStyle: {
      backgroundColor: '#001133'
    },
    // membuat button untuk balik home page
    headerLeft: () => (
      <Button
        icon={<FontAwesome5 name="chevron-left" size={24} color="white" />}
        title="Emergency"
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
    fontWeight: 'bold'
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },

  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
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
    fontWeight: 'bold',
    marginTop: 15
  },
  ModalHeaderText2: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
  },
  ModalBodyText1: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 30
  },
  ModalBodyText2: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 15
  },
  logo: {
    height: "5%",
    width: "50%",
    alignSelf: 'center',
    bottom: 50
  },
  icon:{
    height: 120,
    width:120
  }
});

// export emergency screen
export default EmergencyScreen;