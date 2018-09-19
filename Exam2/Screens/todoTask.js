import React from 'react';
import { StyleSheet, Text, View, Alert,TouchableOpacity, ScrollView,TextInput ,KeyboardAvoidingView} from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Note from './notes.js';


export default class todoTask extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            noteArray: [],
            noteText:'',
        };
    }
    render(){

        let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}
                    checkMethod={()=>this.toggleCheck(key)}
                    />
        })
        return(
            <Container>
                <Header style={styles.headerStyle}>
                <Body>
                    <Title>Todo Tasks</Title>
                </Body>
                </Header>

                <ScrollView style={StyleSheet.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                <TextInput
                     style={styles.textInput}
                     placeholder='>Tarea'
                     onChangeText={(noteText)=> this.setState({noteText})}
                     value={this.state.noteText}
                     placeholderTextColor='white'
                     underlineColorAndroid='transparent'>
                </TextInput>
                </View>
                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                

                
        
                

            </Container>      
            
            
        )
    }

     addNote=()=>{
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'note': this.state.noteText,
                'checked':this.setState.checked=true
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({noteText:''});
            this.setState({checked:false});
        }
    }

    toggleCheck = (id) => {
        
        let newList = this.state.noteArray;
        let index = newList.findIndex(x => x.id == id);
        if (newList[index].checked) {
          newList[index].checked = false;
        } else {
          newList[index].checked = true;
        }
    
        this.setState({ noteArray: this.state.noteArray });
       
      };    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
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
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});