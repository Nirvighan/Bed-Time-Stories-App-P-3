import React from 'react';
import { StyleSheet, Text, View,TextInput , TouchableOpacity,Image} from 'react-native';
import AppHeader from '../AppHeader';
import image2 from '../assets/image pro bed story.png';

export default class WriteScreen extends React.Component
{

constructor()
{
    super();

    this.state = 
    {
        Titletext:'',
        Storytext:'',
        authortext:''
    }
}



    render()
    {
        return(
            <View style = {{width:'100%', height:'100%'}}
            >
               <AppHeader/>

               <Image
                style = {styles.image}
                source = {image2}
               />
              <Text style = {styles.text}>Write a story</Text>
            
              <TextInput
            style = {styles.inputBox1}
            placeholder = 'Title'
            onChangeText={Titletext => {
                this.setState({ Titletext: Titletext });
              }}
            value = {this.state.Titletext}
            
            
            />

<TextInput
            style = {styles.inputBox2}
            placeholder = 'Story'
            onChangeText={Storytext => {
                this.setState({ Storytext: Storytext });
              }}
            value = {this.state.Storytext}
            
            
            />

<TextInput
            style = {styles.inputBox3}
            placeholder = 'Author'
            onChangeText={authortext => {
                this.setState({ authortext: authortext });
              }}
            value = {this.state.authortext}
            
            
            />

            <TouchableOpacity
             style = {styles.button}
             
            >
                <Text style = {styles.buttonText}>Send</Text>
            </TouchableOpacity>


            
           
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text:{

        
        fontSize:30,
        marginTop:30,
        alignSelf:'center',
        color:'#B71C1C'
        
        
    },

    inputBox1:
    {
      width:380,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:20,
      alignItems:'center',
      borderColor:"#B71C1C"
    },
    inputBox2:
    {
      width:380,
      height:180,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:20,
      alignItems:'center',
      borderColor:"#B71C1C"
    },

    inputBox3:
    {
      width:380,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:20,
      alignItems:'center',
      borderColor:"#B71C1C"
    },

    button:{
        
        width:200,
        borderWidth:1.5,
        borderLeftWidth:0,
        borderRadius:10,
        height:40,
        alignSelf:"center",
        marginTop:20,
        borderColor:"#B71C1C"
    },

    buttonText:{
        fontSize: 20,
        textAlign:'center',
        color:'#B71C1C'
      },

    image:
    {
      width: '10%',
    height: '25%',
    alignSelf:'center',
    marginTop:30,
    backgroundColor:'white'
    }
})
