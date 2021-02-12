import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground , Image } from 'react-native';
import Blink from './Blink.js'

class HomePage extends Component {

static navigationOptions = ({ navigation }) => {

  return {
    header: () => (
      <View
        style={{
          height: 45,
          marginTop: 20,
          backgroundColor: 'blue',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Knowledge Check Up
        </Text>
      </View>
    ),
  };
};

   render() {
    const { navigate } = this.props.navigation;
     return (
    
       <View style={styles.background}>
         <ImageBackground source = {require('./images/OIP2.jpg')}  
      style={{width: '100%', height: '100%'}}>
                <View style={styles.buttonContainer}>  
                    <Button  
                           onPress={() => this.props.navigation.navigate('CheckMineGuidelines')}  
                        title="Check Mine !!!!"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={() => this.props.navigation.navigate('CheckOthersGuidelines')}  
                        title="Check for Others !!!!"  
                        color="#009933" />  
                  </View>
                  <Blink text='Knowledge Test' />
                  </ImageBackground>
       </View>
     
     );
   }
 }
 

 const styles = StyleSheet.create({
   background: {
      flex: 1,
      fontWeight: 'bold',
      backgroundColor: '#9FA8DA',
    },

   bigblue: {
     color: 'blue',
     fontWeight: 'bold',
     fontSize: 30,
   },
   knowledgeTest: {
     marginTop: 150,
     color: 'red',
     fontSize: 30,
     textAlign: 'center',
     textAlignVertical: 'center',
     
   },
   buttonContainer: {  
      margin: 40  
  }, 
 });

 export default HomePage