import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

class Blink extends Component {
   constructor(props) {
     super(props);
     this.state = { isShowingText: true };
 
     // Toggle the state every second
     setInterval(() => (
       this.setState(previousState => (
         { isShowingText: !previousState.isShowingText }
       ))
     ), 3000);
   }
 
   render() {
     if (!this.state.isShowingText) {
     return null;
     }
 
     return (
       <Text style={[styles.red]}>{this.props.text}</Text>
     );
   }
 }

 const styles = StyleSheet.create({
   background: {
      flex: 1,
      fontWeight: 'bold',
      backgroundColor: '#9FA8DA',
    },

   red: {
     color: 'red',
     fontWeight: 'bold',
     fontSize: 30,
     textAlign: 'center',
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

 
 export default Blink