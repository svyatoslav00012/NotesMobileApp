import React, {Component} from 'react';
import {TextInput, View, Button, Text} from "react-native";
import Theme from "../constants/Theme";

class CreateNote extends Component {
    static navigationOptions = {
        title: 'Create note',
    };

    state = {
        title: '',
        content: '',
    };

    render() {


        const addNote = this.props.navigation.getParam('addNote', () => {});

        return (
            <View style={Theme.screenContainer}>
                <Text>Title</Text>
                <TextInput style={Theme.textInput}
                           editable
                           maxLength={20}
                           onChangeText={text => this.setState({title: text})}
                           value={this.state.title}/>
                <Text>Content</Text>
                <TextInput style={Theme.textInput}
                           editable
                           multiline
                           onChangeText={text => this.setState({content: text})}
                           value={this.state.content}/>
                <Button title="Add" onPress={() => addNote(this.state)}/>
            </View>
        );
    }
}

export default CreateNote;