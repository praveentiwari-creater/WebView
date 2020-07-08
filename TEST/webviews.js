import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class webviews extends Component {
  render() {
    return (
      <WebView
     // source={{ html: '<h1>Hello world</h1>' }}
        source={{ uri: 'https://www.youtube.com/' }}
     
        style={{ marginTop: 20 }}
      />
    );
  }
}
export default webviews;


// import React from 'react';
// import {View,Text} from 'react-native';
// export default class webviews extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text style={{fontSize:30}}>
//           webview page testing 1
//         </Text>
//       </View>
//     )
//   }
// }

// https://www.google.com/
// https://www.youtube.com/