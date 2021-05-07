import React,{useState} from 'react';

import { View,Text ,StyleSheet,Image ,TouchableOpacity} from "react-native";
import {useSelector} from 'react-redux';
import arrowRight from './../assets/diamond.png';
import SwipeButton from 'rn-swipe-button';
const VarientScreen = props =>{
    const displayname = useSelector(state => 
        state.names.name
    )

    return(
        <View style={styles.container}>
        <View style = {{flex:2}}>
            <Text style ={styles.nameText}>{displayname}</Text>
            </View>
            <View style = {styles.button_container}>
                <Text style = {styles.varient_lable}>4 veriations of button</Text>
                <TouchableOpacity
         style={styles.trans_button}
         onPress =  { () => alert("transparent pressed")}
       >
         <Text style = {styles.button_text}> press me </Text>
    </TouchableOpacity>
     <TouchableOpacity
         style={styles.gray_button}
         onPress =  { () => alert("gray button pressed")}
       >
         <Text style = {styles.button_text}> press me </Text>
         </TouchableOpacity>
     <TouchableOpacity
         style={[styles.gray_button, {backgroundColor: '#33bbff'}]}
         onPress =  { () => alert("blue button  pressed")}
       >
         <Text style = {[styles.button_text, {color: 'white'}]}> press me </Text>
         </TouchableOpacity>
         <SwipeButton 
           
            enableRightToLeftSwipe
            onSwipeSuccess={() => {
                props.navigation.navigate( "PlatFormScreen");
            }}
            thumbIconBackgroundColor="transparent"
            title="Slide me to continue"
            titleColor = '#33bbff'
            backgroundColor = 'transparent'
            width = '90%'
            thumbIconImageSource={'./../assets/diamond.png'}
            thumbIconBorderColor='white'
            thumbIconBackgroundColor='transparent'
            containerStyle = {styles.gray_button}
            railBackgroundColor = 'transparent'
            railFillBorderColor = 'gray'
            borderRadius= '5'
            railBorderColor = 'white'
            railFillBackgroundColor = '#33bbff'
            railFillBorderColor = 'gray'
            
          />

  
            </View>  
        </View>
    )
}
const styles = StyleSheet.create({

    container :{
        flex:4,
        backgroundColor:"#000",
        flexDirection:'column'
    },
    nameText:{
        color:'#fff',
        fontSize:18,
        alignSelf:'flex-end',
        alignContent:'flex-end',
        margin:10
    },
    button_container:{
        flex:2,
        width:'100%', 
        alignSelf:'center',
        alignItems:'flex-end',
        alignContent:'flex-end'

    },
    varient_lable:{
        color:'yellow',
        margin:10,
        alignSelf:'center'
    },
    trans_button:{
        width:'80%',
       backgroundColor:'transparent',
       alignSelf:'center',
       paddingVertical:20,
    },
    gray_button:{
            marginVertical:10,
            width:'80%',
            height:50,
            alignSelf:'center',
            justifyContent:'center',
            backgroundColor: '#798a92',
            paddingHorizontal: 30,
            paddingVertical:5,
            borderRadius:5,

    },
    button_text:{
        color:'#33bbff',
        alignContent:'center',
        alignSelf:'center',
        textAlign:'center',
    }

    

})

export default VarientScreen;
