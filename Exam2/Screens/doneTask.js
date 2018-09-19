import React from 'react';
import { StyleSheet, Text, WebView, ScrollView, Dimensions } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



export default class doneTask extends React.Component {
    render(){
        return(
            <Container>
                <Header style={styles.header}>
                <Body>
                    <Title>Done Tasks</Title>
                </Body>
                </Header>
                

                
                

            </Container>      
            
            
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#637B80',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },

});