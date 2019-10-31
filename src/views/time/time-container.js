import React from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const TimeContainer = props => (
    <View>
        <Text>Hello</Text>
        <Button title={"Start"} onPress={() => props.startTime()}/>
        <Text>{'Time' + props.time}</Text>
    </View>
);

TimeContainer.propTypes = {
    time: PropTypes.string,
    startTime: PropTypes.func
};

export default TimeContainer;