import React ,{useState}from 'react';


import { View,Text ,StyleSheet} from "react-native"
import { getDeviceId, getDeviceName, getDeviceNameSync } from 'react-native-device-info';
import {useSelector} from 'react-redux';

const PlatformScreen = props =>{

    const [name, setname] = useState();
    const displayname = useSelector(state => 
        state.names.name
    )
   getDeviceName().then(data =>
      setname(data)
   );
    console.log(" ======  "+ JSON.stringify(name))
    return(
        <View style={styles.container}>
            <Text style ={styles.nameText}>{displayname}</Text>
                <Text style = {styles.deviceText}> {name}</Text>
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
    deviceText:{
        color:'#fff',
        fontSize:24,
        alignSelf:'center',
        alignContent:'center',
        margin:10
    },
})
export default PlatformScreen;
