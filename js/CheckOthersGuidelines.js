import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

class CheckOthersGuidelines extends Component {

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
            Test Others Knowledge check!!!
          </Text>
        </View>
      ),
    };
  };

   render() {
    const { navigate } = this.props.navigation;
     return (
       <View style={styles.background}>
           <Text style={styles.GuideHeading}>GuideLines: Please read it carefully Hello </Text>
           <Text style={styles.Guidelines}>1. Each question carries one mark </Text>
  
      </View>
     );
   }
 }
 

 const styles = StyleSheet.create({

  GuideHeading: {
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',   
    fontWeight: 'bold', 
  },

  
  Guidelines: {
   marginTop: 20,
   color: 'black',
   fontSize: 18,
   textAlign: 'left',    
   marginLeft: 8,
 },

   background: {
      flex: 1,
      fontWeight: 'bold',
      backgroundColor: '#B5AE4E',
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
      margin: 20  
  }, 
 });

 export default CheckOthersGuidelines