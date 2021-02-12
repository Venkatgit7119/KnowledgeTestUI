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
class FirstPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      radiovalue: 1
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
            Question 1:  
          </Text>
        </View>
      ),
    };
  };

  componentDidMount() { 
  
     this.setState({ data: localStorage.getItem('Questions1')});
     this.setState({ isLoading: false });
     this.setState({radiovalue:localStorage.getItem('Answers11')});
     
    
    }
  
    componentWillUnmount() {
    console.log('unmount First Page');
     
    }

    onSubmit()
    {
      console.log(this.state.radiovalue);
      if(localStorage.getItem('CorrectAnswer1') ==  this.state.radiovalue)
      {
      localStorage.setItem("score1",1);
      
      }
      this.props.navigation.navigate('SecondPage');
    }

    render() {

      //this.OnLoad();
      const { navigate } = this.props.navigation;
      const { data, isLoading } = this.state;


      var radio_props = [
        {label: localStorage.getItem('Answers11'), value: localStorage.getItem('Answers11') },
        {label: localStorage.getItem('Answers12'), value: localStorage.getItem('Answers12') },
        {label: localStorage.getItem('Answers13'), value: localStorage.getItem('Answers13') },
        {label: localStorage.getItem('Answers14'), value: localStorage.getItem('Answers14') },
      ];
  

       return (
         <ScrollView>
            {isLoading ? <ActivityIndicator/> : (
         <View style={styles.background}>
                
           {/*   <ImageBackground source = {require('./images/OIP4.jpg')}  
        style={{width: '100%', height: '100%'}}> */}
  
  <Text style={styles.Guidelines}>
                      {data}
                </Text>
                <RadioForm
            radio_props={radio_props}
            initial={0}  
            onPress={(value) => {this.setState({radiovalue:value})}}
          />
          <Text>{this.state.radiovalue}</Text>
                <View style={styles.buttonContainer}>  
                      <Button  
                             //onPress={() => this.props.navigation.navigate('SecondPage')}  
                             onPress={() => this.onSubmit()}
                          title="Save And Next"   color="#009933"
                      />  
                  </View>  
            {/*  </ImageBackground> */}
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
    marginTop: 10,
    marginHorizontal : 100

  
  }, 

  dottedLine: {  
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
  
  }, 
 });

 export default FirstPage