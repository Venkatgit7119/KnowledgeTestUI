import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button , ImageBackground} from 'react-native';
import localStorage from 'localStorage';

class Launch extends Component {

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
            Launching....!!!
          </Text>
        </View>
      ),
    };
  };

  


  componentDidMount() {

    //GET request 
    //alert('start');
    localStorage.clear();
    localStorage.setItem('QCount', '0');
    var defaultjson=0;
    fetch('http://ec2-18-222-254-178.us-east-2.compute.amazonaws.com:2020/getUsers?name=default', {
      method: 'GET'
  })
  .then((response) => response.json())
  //If response is in json then in success
  .then((responseJson) => {

     defaultjson = JSON.stringify(responseJson);

     if(defaultjson == '1')
     {
      
      fetch('http://ec2-18-222-254-178.us-east-2.compute.amazonaws.com:2020/getQuestionsAndAnswers?topic=0', {
        method: 'GET'
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        const commentsjson = JSON.stringify(responseJson);
        
        var topicjsonData = JSON.parse(commentsjson);

        localStorage.setItem('TopicId', topicjsonData.topicId);
        localStorage.setItem('Topic', topicjsonData.topic);

        //Retrieve and set Questions from topic Json
        var questionsData = JSON.stringify(topicjsonData.questionsList);  
        var questionsjsonData = JSON.parse(questionsData); 
        var count=1;
        var correctcount=1;
        questionsjsonData.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {
           
            if (key == 'questions') {
              this.setState({ data: value});
              this.setState({ isLoading: false });
  
              localStorage.setItem('Questions'+count, value);

              count++;
                     
            }
            if (key == 'correctAnswers') {
              this.setState({ data: value});
              this.setState({ isLoading: false });
  
              localStorage.setItem('CorrectAnswer'+correctcount, value);

              correctcount++;
                     
            }

           });
        });


        //Retrieve and set Answers from topic Json
        var answerData = JSON.stringify(topicjsonData.answerList);  
        var answersjsonData = JSON.parse(answerData); 
        var questionsIdCount;
        var answerIdCount=1;
        answersjsonData.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {

            if (key == 'questionsid') {

              /*if(questionsIdCount!=value)
              {
                answerIdCount=1;
              }*/
              questionsIdCount=value;
          

            }
           
            if (key == 'answers') {
              answerIdCount=1;
              console.log('Answers  '+questionsIdCount +' ' +answerIdCount+ '  '+localStorage.getItem('Answers'+questionsIdCount+answerIdCount))
              while(answerIdCount<=4)
              {
                if(localStorage.getItem('Answers'+questionsIdCount+answerIdCount)==null)
                {
                  localStorage.setItem('Answers'+questionsIdCount +answerIdCount, value);
                  answerIdCount=4;
                }

                answerIdCount++;
              }
              
                     
            }
           });
        });


        //Set Correct Answers
       // localStorage.setItem('CorrectAnswer','930.31 million');

        

      })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });
     }
    
  })
  //If response is not in json then in error
  .catch((error) => {
      //Error 
      alert(JSON.stringify(error));
      console.error(error);
  });

  console.log("access storage "+localStorage.getItem('access'));

  if(localStorage.getItem('access') == '1')
  {

    

  }

  }
   render() {
    const { navigate } = this.props.navigation;
     return (
       <View style={styles.background}>
            <ImageBackground source = {require('./images/OIP3.jpg')}  
      style={{width: '100%', height: '100%'}}> 
           <Text style={styles.GuideHeading}>Topic </Text>
           <Text style={styles.Guidelines}>1. Each question carries one mark </Text>
       
         
         
           <View style={styles.buttonContainer}>  
                    <Button  
                           onPress={() => this.props.navigation.navigate('FirstPage')}  
                        title="Play"   color="#009933"
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
      margin: 20  
  }, 
 });

 export default Launch