import React from "react";
import {Button, FlatList, View} from "react-native";
import Theme from "../constants/Theme";
import Note from "../components/Note";

const notes = [];

for (let i = 1; i <= 3; ++i)
    notes.push({
        key: 'id_' + i,
        title: 'title' + i,
        content: 'content' + i,
    });

export default class Notes extends React.Component {

    static navigationOptions = {
        title: 'Notes',
    };

    constructor(props) {
        super(props);
        this.state = {notes: notes};
    }

    addNote = (note) => notes.push(note);

    render() {
        return (<View style={Theme.screenContainer}>
            <FlatList data={this.state.notes}
                      renderItem={({item}) => <Note note={item}/>}
                      keyExtractor={(note) => note.key}/>
            <Button onPress={() =>
                this.props.navigation.navigate('createNote',
                    {addNote: this.addNote})}
                    title='+'
                    style={{...Theme.addButton, ...Theme.addButtonText}}/>
        </View>);
    }
}