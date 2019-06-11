import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Notes from "./src/screens/Notes";
import CreateNote from "./src/screens/CreateNote";

const MainNavigator = createStackNavigator({
        notes: Notes,
        createNote: CreateNote
    },
    {
        initialRouteName: 'notes'
    });

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
