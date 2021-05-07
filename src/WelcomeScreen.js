import React from 'react';
import { View,TextInput ,StyleSheet, Button,Keyboard} from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {setName} from './actions/NameAction';

const WellComScreem = props =>{

     const [name, setname] = useState("");

    const dispatch = useDispatch();
   const handleClick  = () => {
       if(name.length > 0)
       {
      dispatch(setName(name));
        // alert('Button clicked!');
        // props.navigation.push('VarientScreen');
        props.navigation.navigate( "varientScreen");
       }
       else{
           alert("enter valid name")
       }
      } 
    
    return(
        <View style={styles.mainView}>
            <TextInput
           onChangeText={(username) => setname(username)}
    value={name}
  style={styles.input}
  placeholder="Your name"
  maxLength={20}
  onBlur={Keyboard.dismiss}
/>
       <View style = {{height:20}}></View>
       <Button style={styles.button}
       title ="next"
       onPress={handleClick}></Button>
        </View>
    )
}


const styles = StyleSheet.create({

    mainView:{
        flex:1,  
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center'
    },
    input: {

        borderWidth : 1,
    
        borderColor : '#c1c1c1',
    
        borderRadius : 3,
    
        width : 200,
    
        height : 35,
    
        padding : 10,
    
        margin : 10,
    
        color: '#000',
    
      },
      button:{
          width:200,
          margin:10,
      }
     

});
export default WellComScreem;
