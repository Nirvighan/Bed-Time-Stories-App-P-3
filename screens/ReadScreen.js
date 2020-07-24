import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import AppHeader from '../AppHeader';
import image1 from '../screen1img.png';

export default class ReadScreen extends React.Component
{
    render()
    {
        return(
            <View  style = {{width:'100%', height:'100%'}}
            >
                <AppHeader/>
                <Text style = {styles.text}>WELCOME TO READ SCREEN</Text>
                <Image
                style = {styles.image}
                source ={image1} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{

        
        fontSize:30,
        marginTop:50,
        alignSelf:'center',
        color:'#B71C1C'
        
        
    },

    image:
    {
        width: '20%',
    height: '35%',
    alignSelf:'center',
    marginTop:30
    }
})

