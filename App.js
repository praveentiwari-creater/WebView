import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import webviews from './TEST/webviews';
import Ratings from './TEST/Ratings';
import SharePage from './TEST/SharePage';
import Making_the_Bottom_sheet_modal from './TEST/Making_the_Bottom_sheet_modal';
import Show_html_text from './TEST/Show_html_text';
import Promocode_Paytm1 from './TEST/Promocode_Paytm1';
import Promocode_Paytm2 from './TEST/Promocode_Paytm2';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="TAB" component={TAB} options={{headerShown:true}}/>
       
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

TAB = () => {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="SharePage" component={SharePage} />
      <Drawer.Screen name="webviews" component={webviews} />
      <Drawer.Screen name="Ratings" component={Ratings} />
      <Drawer.Screen name="Making_the_Bottom_sheet_modal" component={Making_the_Bottom_sheet_modal} />
      <Drawer.Screen name="Show_html_text" component={Show_html_text} />
      <Drawer.Screen name="Promocode_Paytm1" component={Promocode_Paytm1} />
      <Drawer.Screen name="Promocode_Paytm2" component={Promocode_Paytm2} />
    </Drawer.Navigator>
  )
}