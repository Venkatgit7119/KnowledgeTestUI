import React, {Component} from 'react';
import { StyleSheet,ActivityIndicator, Text, View, ScrollView, Button, ImageBackground , CheckBox} from 'react-native';
import { Input } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Cookies  from 'js-cookie';
import localStorage from 'localStorage';
var radio_props = [
  {label: '930.31 million ', value: 0 },
  {label: '933.46 million ', value: 0 },
  {label: '936.61 million ', value: 1 },
  {label: '939.77 million ', value: 0 }
];

class ThirdPage extends Component {
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
            Question 3:
          </Text>
        </View>
      ),
    };
  };

  componentDidMount() {
   
  
     this.setState({ data: localStorage.getItem('Questions3')});
     this.setState({ isLoading: false });
     this.setState({radiovalue:localStorage.getItem('Answers31')});
    
    }
  
    componentWillUnmount() {
  
      console.log('unmount Third Page');
    }

    onSubmit()
    {
      console.log(this.state.radiovalue);
      if(localStorage.getItem('CorrectAnswer3') ==  this.state.radiovalue)
      {
      localStorage.setItem("score3",1);
      
      }
      this.props.navigation.navigate('FourthPage');
    }

    render() {
      const { navigate } = this.props.navigation;
      const { data, isLoading } = this.state;
     
      var radio_props = [
        {label: localStorage.getItem('Answers31'), value: localStorage.getItem('Answers31') },
        {label: localStorage.getItem('Answers32'), value: localStorage.getItem('Answers32') },
        {label: localStorage.getItem('Answers33'), value: localStorage.getItem('Answers33') },
        {label: localStorage.getItem('Answers34'), value: localStorage.getItem('Answers34') },
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

 export default ThirdPage