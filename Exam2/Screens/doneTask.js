import React from 'react';
import { StyleSheet, Text, WebView, ScrollView, Dimensions } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



export default class doneTask extends React.Component {
    render(){
        return(
            <Container>
                <Header style={styles.headerStyle}>
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
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerStyle: {
        backgroundColor: '#082EAF'
    }
  });