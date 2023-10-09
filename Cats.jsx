import React from 'react';
import {Text, View} from 'react-native';

const Cats = ({weight, hunger, thirst}) => {
    //для нескольких функций 
    return (
    <View>
        <Text> weight: {weight} </Text>
        <Text> hunger: {hunger} </Text>
        <Text> thirst: {thirst} </Text>
    </View>
    );

};

export default Cats;
