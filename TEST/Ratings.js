import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ICONS from '../ICONS/star.png';
const WATER_IMAGE = require('../ICONS/water.png')
console.disableYellowBox = true;
export default class Ratings extends React.Component {
  constructor() {
    super();
    this.state = {
      rate1: null,
      rate2: null,
      rate3: null,
      rate4: null,
      rate5: null,
    }
  }
  //  componentDidUpdate=(prevProps, prevState)=>{
  // if(prevState.rate5 == this.state.rate5){
  //   this.setState({rate5:this.state.rate5+1})
  
  ratingCompleted = (rating) => {
    if (rating == 5) {
      this.setState({ rate5: rating })
      this.setState({rate5:this.state.rate5+1})
      // for (let i = 5; i <= this.state.rate5; i++) {
      //   this.setState({ rate5: i + 1 })
      // }
    }

    if (rating == 4) {
      this.setState({ rate4: rating })
      this.setState({rate4:this.state.rate4+1})
      // for (let j = 4; j <= this.state.rate4; j++) {
      //   this.setState({ rate4: j + 1 })
      // }
    }
    if (rating == 3) {
      this.setState({ rate3: rating })
      this.setState({rate3:this.state.rate3+1})
      // for (let k = 3; k <= this.state.rate3; k++) {
      //   this.setState({ rate3: k + 1 })
      // }
    }
    if (rating == 2) {
      this.setState({ rate2: rating })
      this.setState({rate2:this.state.rate2+1})
      // for (let l = 2; l <= this.state.rate2; l++) {
      //   this.setState({ rate2: l + 1 })
      // }
    }
    if (rating == 1) {
      this.setState({ rate1: rating })
      this.setState({rate1:this.state.rate1+1})
      // for (let m = 1; m <= this.state.rate1; m++) {
      //   this.setState({ rate1: m + 1 })
      //   // rating==this.state.rate5
      // }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ marginTop: 20, flex: 5 }}>
<View style={{flex:7}}>
  <Text style={{marginTop:20,fontSize:20}}>System type</Text>
  <Text style={{marginTop:20,fontSize:20}}>SmartPhone</Text>
  <Text style={{marginTop:20,fontSize:20}}>HybridSlotEType</Text>
  <Text style={{marginTop:20,fontSize:20}}>TouchScreen</Text>
  
</View>

<View style={{flex:3}}>
            <AirbnbRating
              count={5}
              //reviews={["Terrible", "Bad", "Good", "Very Good","Amazing"]}
              defaultRating={1}
              size={30}
              showRating={true}
              ratingCount={5}
              halfStarEnabled={true}
              onFinishRating={this.ratingCompleted} />
              </View>
          </View>

          <View style={{ flex: 5, }}>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 100 }}>
              <Text style={{ fontSize: 20 }} >5</Text>
              <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../ICONS/star.png')} />
              <View style={{width: 200, height: 15, backgroundColor: 'lightgray', borderColor: 'green',
                  borderWidth: 1, marginTop: 8, marginLeft: 10, borderRadius: 20 }}>
                <View style={{ width: (this.state.rate5) / 2, height: 13, backgroundColor: 'green',
                  borderColor: 'green', borderWidth: 1, borderRadius: 20 }}></View>
              </View>
              <Text style={{ fontSize: 20, marginLeft: 10 }}>{this.state.rate5}</Text>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 100 }}>
              <Text style={{ fontSize: 20 }} >4</Text>
              <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../ICONS/star.png')} />
              <View style={{width: 200, height: 15, backgroundColor: 'lightgray', borderColor: 'green',
                  borderWidth: 1, marginTop: 8, marginLeft: 10, borderRadius: 20 }}>
                <View style={{ width: (this.state.rate4) / 2, height: 13, backgroundColor: 'green',
                  borderColor: 'green', borderWidth: 1, borderRadius: 20 }}></View>
              </View>
              <Text style={{ fontSize: 20, marginLeft: 10 }}>{this.state.rate4}</Text>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 100 }}>
              <Text style={{ fontSize: 20 }} >3</Text>
              <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../ICONS/star.png')} />
              <View style={{width: 200, height: 15, backgroundColor: 'lightgray', borderColor: 'green',
                  borderWidth: 1, marginTop: 8, marginLeft: 10, borderRadius: 20 }}>
                <View style={{ width: (this.state.rate3) / 2, height: 13, backgroundColor: 'green',
                  borderColor: 'green', borderWidth: 1, borderRadius: 20 }}></View>
              </View>
              <Text style={{ fontSize: 20, marginLeft: 10 }}>{this.state.rate3}</Text>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 100 }}>
              <Text style={{ fontSize: 20 }} >2</Text>
              <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../ICONS/star.png')} />
              <View style={{width: 200, height: 15, backgroundColor: 'lightgray', borderColor: 'green',
                  borderWidth: 1, marginTop: 8, marginLeft: 10, borderRadius: 20 }}>
                <View style={{ width: (this.state.rate2) / 2, height: 13, backgroundColor: 'blue',
                  borderColor: 'green', borderWidth: 1, borderRadius: 20 }}></View>
              </View>
              <Text style={{ fontSize: 20, marginLeft: 10 }}>{this.state.rate2}</Text>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 100 }}>
              <Text style={{ fontSize: 20 }} >1</Text>
              <Image style={{ width: 20, height: 20, marginTop: 5 }} source={require('../ICONS/star.png')} />
              <View style={{width: 200, height: 15, backgroundColor: 'lightgray', borderColor: 'green',
                  borderWidth: 1, marginTop: 8, marginLeft: 10, borderRadius: 20 }}>
                <View style={{ width: (this.state.rate1) / 2, height: 13, backgroundColor: 'blue',
                  borderColor: 'green', borderWidth: 1, borderRadius: 20 }}></View>
              </View>
              <Text style={{ fontSize: 20, marginLeft: 10 }}>{this.state.rate1}</Text>
            </View>



            <TouchableOpacity onPress={() => this.props.navigation.navigate('page2')} style={{marginTop:50}}>
              <Text style={{ fontSize: 20, color: 'blue' }}>next page</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    )
  }
}