import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';


const GoalInput = props => {
    const [enterdGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enterdText) => {
        setEnteredGoal(enterdText);
      };


    return (
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your Goal'
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enterdGoal}
          />
        <Button title='ADD' onPress={props.onAddGoal.bind(this, enterdGoal)}/>
      </View>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        },
        input: {
          borderColor: 'red',
          borderWidth: 1,
          width: '80%',
        },
});

export default GoalInput;