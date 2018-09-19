import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground,Header } from 'react-native'


export default class drawerContentComponents extends React.Component {
    
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    
    return (
        <View style={styles.container}>
           
            <View style={styles.headerContainer}> 
                <Text style={styles.headerText}>Samuel List Tasks</Text>              
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
             
            <View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('todoTask')}>Todo Tasks</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('doneTask')}>Done Tasks</Text>
                </View>
            </View>
            
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor:'#637B80',
        height: '100%'
    },
    headerContainer: {
        height: 50      
    },
    headerText: {
        color: '#fff8f8',
        paddingLeft: 15,
        fontSize: 19,
        fontWeight: 'bold'
    },
    screenContainer: {
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    screenStyle: {
        height: 30,
        marginTop: 2.5,
        flexDirection: 'row',
        alignItems: 'center',  
        
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20,
        color: 'white'  
    },
    headerStyle:{
        height: 220,
        backgroundColor: '#637B80'
    },

});

