import React, { Component } from 'react';
import {
    Share,
    Text,
    TouchableOpacity,View,options
} from 'react-native';
//import Share from 'react-native-share';
// import ShareImages from 'react-native-files-share';

const shareOptions = {
    title: 'Title',
   
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject'
};





// const content = {


    
//     message: 'ICON_PLUS_BASE64',
//     //or: message: 'file:///data/0/tmp/..........',
//   //  title: 'share',
//     url: ICON_PLUS_BASE64,
//     };
//   //  const option = { dialogTitle: 'title title title' };
   
    
//    const ICON_PLUS_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';

export default class SharePage extends React.Component {

     shareSingleImage = async () => {
        const shareOptions = {
          title: 'Share file',
          url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          failOnCancel: false,
        };
    
        try {
          const ShareResponse = await Share.share(shareOptions);
          setResult(JSON.stringify(ShareResponse, null, 2));
        } catch (error) {
          console.log('Error =>', error);
          setResult('error: '.concat(getErrorString(error)));
        }
      };

    onSharePress = () => Share.share(shareOptions);

    shareImage=()=> Share.share(content);
        //, option);
    // {
    //     ShareImages.show({
    //         images: ['3hG2424HYu23...', 'Hy234hhj234g...'], // list images base64 or pdf base64
    //         exclude: [''],
    //         isPDF: true | false
    //       });
        // Share.share({
        //      url = 'www.example.com/',
        //     image: 'data:<data_type>/<file_extension>;base64,<base64_data>',
        // });
    // }


    

    render() {
        return (
            <View>
            <TouchableOpacity onPress={this.onSharePress} style={{
                backgroundColor: 'green',
                borderWidth: 2, justifyContent: 'center', alignItems: 'center', marginTop: 200, marginLeft: 150,
                width: 120, height: 40, borderRadius: 20
            }} >
                <Text style={{ fontSize: 20 }}>Share data</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.shareSingleImage} style={{
                backgroundColor: 'green',
                borderWidth: 2, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 150,
                width: 120, height: 40, borderRadius: 20
            }} >
                <Text style={{ fontSize: 20, color: 'red' }}>Share Image</Text>
            </TouchableOpacity>
            </View>
    );
    }
}


// import React from 'react';
// import { View, Text } from 'react-native';
// export default class SharePage extends React.Component {
//      render(){
//         return (
//             <View>
//                 <Text>
//                     SharePage
//                 </Text>
//             </View>
//         )
//     }
// }