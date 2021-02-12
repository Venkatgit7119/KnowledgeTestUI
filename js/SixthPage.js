import React, {Component} from 'react';
import { StyleSheet,ActivityIndicator, Text, View, ScrollView, Button, ImageBackground , CheckBox} from 'react-native';
import { Input } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Cookies  from 'js-cookie';
import localStorage from 'localStorage';


class SixthPage extends Component {
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
            Question 6:
          </Text>
        </View>
      ),
    };
  };

  componentDidMount() {
  
     this.setState({ data: localStorage.getItem('Questions6')});
     this.setState({ isLoading: false });
     this.setState({radiovalue:localStorage.getItem('Answers61')});
    
    }
  
    componentWillUnmount() {
  
      console.log('unmount sixth Page');

    }

    onSubmit()
    {
      console.log(this.state.radiovalue);
      if(localStorage.getItem('CorrectAnswer6') ==  this.state.radiovalue)
      {
      localStorage.setItem("score6",1);
      
      }
      this.props.navigation.navigate('SeventhPage');
    }

    render() {
      const { navigate } = this.props.navigation;
      const { data, isLoading } = this.state;
    

      var radio_props = [
        {label: localStorage.getItem('Answers61'), value: localStorage.getItem('Answers61') },
        {label: localStorage.getItem('Answers62'), value: localStorage.getItem('Answers62') },
        {label: localStorage.getItem('Answers63'), value: localStorage.getItem('Answers63') },
        {label: localStorage.getItem('Answers64'), value: localStorage.getItem('Answers64') },
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
                          title="Save And Next"   color="#009933"
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

 export default SixthPage