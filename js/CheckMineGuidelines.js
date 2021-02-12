import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button , ImageBackground} from 'react-native';
import localStorage from 'localStorage';

class CheckMineGuidelines extends Component {

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
            Test my Knowledge!!!
          </Text>
        </View>
      ),
    };
  };

  
  componentDidMount() {
    //localStorage.clear();
    
  }

  componentWillUnmount() {
    //GET request 
    localStorage.clear();
    localStorage.setItem('QCount', '0');
    fetch('http://ec2-18-222-254-178.us-east-2.compute.amazonaws.com:2020/getAllUsers', {
        method: 'GET'
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        const commentsjson = JSON.stringify(responseJson);

        JSON.parse(commentsjson, (key, value) => {

          if (key == 'comments') {
            this.setState({ data: value});
            this.setState({ isLoading: false });
            localStorage.setItem('Questions1', value);
          }
          
        });
      
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });
  }
   render() {
    const { navigate } = this.props.navigation;
     return (
       <View style={styles.background}>
           <ImageBackground source = {require('./images/OIP4.jpg')}  
      style={{width: '100%', height: '100%'}}>
           <Text style={styles.GuideHeading}>GuideLines: Please read it carefully </Text>
           <Text style={styles.Guidelines}>1. Each question carries one mark </Text>
           <Text style={styles.Guidelines}>2. No negative marks </Text>
           <Text style={styles.Guidelines}>3. 2 minutes for each questions </Text>
           <Text style={styles.Guidelines}>4. Cannot go back to change the answers submitted  </Text>
           <Text style={styles.Guidelines}>5. Questions may or may not have options , So please follow the
           instructions in each questions </Text>
         
         
           <View style={styles.buttonContainer}>  
                    <Button  
                           onPress={() => this.props.navigation.navigate('Launch')}  
                        title="Start My Quiz"   color="#009933"
                    /> 
                   
                </View>  
                </ImageBackground>
      </View>
     );     

   }  

 }
 

 const styles = StyleSheet.create({
   background: {
      flex: 1,
      fontWeight: 'bold',
      backgroundColor: '#B5AE4E',
    },

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


   buttonContainer: {  
      margin: 20  
  }, 
 });

 export default CheckMineGuidelines