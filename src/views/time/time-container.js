import React from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

const TimeContainer = props => {
    const [text, setText] = React.useState('');
    return (
        <View>
            <Text>Hello</Text>
            <Button title={"Start"} onPress={() => props.startTime()}/>
            <Text>{'Time' + props.time}</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                       value={text}
                       onChangeText={text => setText(text)}/>
            <Button title={"Send"} onPress={() => props.sendText(text)}/>
        </View>
    );
};

TimeContainer.propTypes = {
    time: PropTypes.string,
    startTime: PropTypes.func,
    sendText: PropTypes.func
};

export default TimeContainer;