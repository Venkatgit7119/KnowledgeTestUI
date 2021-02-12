import React, {Component} from 'react';
import { StyleSheet,ActivityIndicator, Text, View, ScrollView, Button, ImageBackground , CheckBox} from 'react-native';
import { Input } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Cookies  from 'js-cookie';
import localStorage from 'localStorage';


class Success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  static navigationOptions = ({ navigation }) => {

    return {
      header: () => (
        <View
          style={{
            height: 45,
            marginTop: 20,
            backgroundColor: 'green',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
           Success
          </Text>
        </View>
      ),
    };
  };

  componentDidMount() {
  
     this.setState({ data: localStorage.getItem('Questions5')});
     this.setState({ isLoading: false });
    var count=1,correct=0;
      while(count<=10)
     {
        if(localStorage.getItem('score'+count) ==1)
        {
          correct++;
        }
        console.log('score'+count+ '  '+localStorage.getItem('score'+count));
        count++;
     } 

     localStorage.setItem('correct',correct);
    
    }
  
    componentWillUnmount() {
  
      console.log('unmount fifth Page');

    }

    render() {
      const { navigate } = this.props.navigation;
      const { data, isLoading } = this.state;
   
       return (
         <ScrollView>
            {isLoading ? <ActivityIndicator/> : (
         <View style={styles.background}>
           
  <Text style={styles.Guidelines}>
                     Great!!! You have scored {localStorage.getItem('correct')} out of 10 
                </Text>
               
  
              
          
        </View>
                )}
        </ScrollView>
       );
     }


 }
 
 

 const styles = StyleSheet.create({
   background: {
      flex: 1,
      fontWeight: 'bold',
      backgroundColor: '#ffffff',
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
    fontSize: 28,
    textAlign: 'left',    
    marginLeft: 8,
  },


   buttonContainer: {  
    marginTop: 5,
    marginHorizontal : 100

  
  }, 

  dottedLine: {  
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
  
  }, 
 });

 export default Success