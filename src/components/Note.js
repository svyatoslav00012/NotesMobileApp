import React from "react";
import {TouchableHighlight, Text, View, Alert} from "react-native";
import Theme from "../constants/Theme";

export default class Note extends React.Component {

    render() {
        return (
            <TouchableHighlight onPress={() => {}} style={Theme.noteContainer}>
                <View>
                    <Text style={Theme.noteTitle}>{this.props.note.title}</Text>
                    <Text style={Theme.noteContent}>{this.props.note.content}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}