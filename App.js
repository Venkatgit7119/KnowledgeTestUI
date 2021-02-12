import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomePage from './js/HomePage.js'
import CheckMineGuidelines from './js/CheckMineGuidelines.js'
import CheckOthersGuidelines from './js/CheckOthersGuidelines.js'
import Launch from './js/Launch.js'
import FirstPage from './js/FirstPage.js'
import SecondPage from './js/SecondPage.js'
import ThirdPage from './js/ThirdPage.js'
import FourthPage from './js/FourthPage.js'
import FifthPage from './js/FifthPage.js'
import SixthPage from './js/SixthPage.js'
import SeventhPage from './js/SeventhPage.js'
import EighthPage from './js/EighthPage.js'
import NinethPage from './js/NinethPage.js'
import TenthPage from './js/TenthPage.js'
import Success from './js/Success.js'

const AppNavigator = createStackNavigator(  
   {  
       Home: HomePage,  
       CheckMineGuidelines: CheckMineGuidelines ,
       CheckOthersGuidelines: CheckOthersGuidelines,
       Launch: Launch,
       FirstPage: FirstPage,
       SecondPage: SecondPage ,
       ThirdPage: ThirdPage ,
       FourthPage: FourthPage ,
       FifthPage: FifthPage ,
       SixthPage: SixthPage ,
       SeventhPage: SeventhPage ,
       EighthPage: EighthPage ,
       NinethPage: NinethPage ,
       TenthPage: TenthPage ,
       Success:Success
     
   },  
   {  
       initialRouteName: "Home"  
   },  
   {
    defaultNavigationOptions: {
    gesturesEnabled: false,
    }

   }
);  
 
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
   render() {  
       return <AppContainer />;  
   }  
} 