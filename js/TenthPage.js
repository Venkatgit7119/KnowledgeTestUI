import React, {Component} from 'react';
import { StyleSheet,ActivityIndicator, Text, View, ScrollView, Button, ImageBackground , CheckBox} from 'react-native';
import { Input } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Cookies  from 'js-cookie';
import localStorage from 'localStorage';


class TenthPage extends Component {
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
            Question 10:
          </Text>
        </View>
      ),
    };
  };

  componentDidMount() {
  
     this.setState({ data: localStorage.getItem('Questions5')});
     this.setState({ isLoading: false });
     this.setState({radiovalue:localStorage.getItem('Answers101')});
    
    }
  
    componentWillUnmount() {
  
      console.log('unmount fifth Page');

    }

    onSubmit()
    {
      console.log(this.state.radiovalue);
      if(localStorage.getItem('CorrectAnswer10') ==  this.state.radiovalue)
      {
      localStorage.setItem("score10",1);
      
      }
      this.props.navigation.navigate('Success');
    }

    render() {
      const { navigate } = this.props.navigation;
      const { data, isLoading } = this.state;
     
    
      var radio_props = [
        {label: localStorage.getItem('Answers101'), value: localStorage.getItem('Answers101') },
        {label: localStorage.getItem('Answers102'), value: localStorage.getItem('Answers102') },
        {label: localStorage.getItem('Answers103'), value: localStorage.getItem('Answers103') },
        {label: localStorage.getItem('Answers104'), value: localStorage.getItem('Answers104') },
      ];
  
       return (
         <ScrollView>
            {isLoading ? <ActivityIndicator/> : (
         <View style={styles.background}>
           
  <Text style={styles.Guidelines}>
                      {data}
                </Text>
                <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({radiovalue:value})}}
          />
  
                <View style={styles.buttonContainer}>  
                      <Button  
                               onPress={() => this.onSubmit()}
                          title="Submit"   color="#009933"
                      />  
                  </View>  
          
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
    fontSize: 18,
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

 export default TenthPage