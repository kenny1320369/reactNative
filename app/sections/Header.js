import React from 'react';
import { StyleSheet, Text, View, Platform,Image } from 'react-native';
import { CheckBox } from 'react-native'

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false
        };
    }
    toggleUser = () =>{
        this.setState(previousState =>{
            return {
                isLoggedIn: !previousState.isLoggedIn
            };
        });
    }

    render(){
        let display=this.state.isLoggedIn ? "Sample User" : this.props.message;
        let checkboxValue=this.state.isLoggedIn;
        return(
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    resizeMode='contain'
                    source={require('./img/wiki.png')}/>
                <Text 
                style={styles.headtext}
                onPress={this.toggleUser
                }>{display}</Text>
                {/* <CheckBox value={checkboxValue} onValueChange={this.toggleUser}/> */}
                </View>
            
        );
    }
}

const styles=StyleSheet.create({
    headtext:{
        textAlign:'right',
        color:'#ffffff',
        fontSize: 20
    },
    headStyle: {
        paddingBottom:10,
        paddingTop:30,
        paddingRight: 10,
        backgroundColor: Platform.OS ==='android'? '#31e981':'#35605a',
        flex:1,
        flexDirection:'row'
    },
    logoStyle:{
        flex:1,
        width:10,
        height:50,
    }
    
});
