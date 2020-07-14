import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
            <View><Text >{display}</Text>
            <CheckBox value={checkboxValue} onValueChange={this.toggleUser}/></View>
            
        );
    }
}
