import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    // add this
    Animated,
    Image
   } from 'react-native'
   import Swipeable from 'react-native-gesture-handler/Swipeable';
   import { RectButton } from 'react-native-gesture-handler';
class AnimatedButton  extends Component
{
   
    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [ -20, 0, 0, 1],
        });    
    return( <RectButton style={styles.leftAction} onPress={() => console.log('Pressed')}>
          <View
            style={{ height: 50,width:'80%',
             backgroundColor: '#33bbff',
            alignSelf:'center',
            borderRadius:5,
            flexDirection:'row' }}>
                <Image  style = {{width:50,
                height:50,alignSelf:'flex-start'}}
                source={require('./../../assets/diamond.png')} />  
            <Animated.Text
              style={{
                color: 'white',
                paddingHorizontal: 10,
                fontWeight: '600',
                alignSelf:'center',
              }}
              >
              Left Action
            </Animated.Text>
          </View>
   </RectButton>)
}

    render(){
        return (
            <Swipeable style={styles.rectButton} 
            renderLeftActions={this.renderLeftActions}>
            <RectButton style={styles.rectButton}>
            </RectButton>
            </Swipeable>
            );
        };
        
 }
   
var styles = StyleSheet.create({
    leftAction: {
        width:"100%",
        height:50,
        justifyContent: 'center',
        borderRadius:10
        },
        actionText: {
        color: 'black',
        fontSize: 16,
        },
        rectButton: {
        width:'100%',
        height: 50,
        backgroundColor: 'blue',
        },
  });

  export default AnimatedButton;