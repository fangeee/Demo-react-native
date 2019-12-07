import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';


const GoalInput = props => {
    const [enterdGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enterdText) => {
        setEnteredGoal(enterdText);
      };

    const addGoalHandler = () =>{
      props.onAddGoal(enterdGoal);
      setEnteredGoal('');
    };


    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your Goal'
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enterdGoal}
          />
          <View style={styles.buttonContainer}>
          <Button title='CANCEL' color="red" onPress={props.onCancel}/>
          <Button title='ADD' onPress={props.onAddGoal.bind(this, enterdGoal)} />
          </View>
          
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        input: {
          width: '80%',
          borderColor: 'red',
          borderWidth: 1,
          padding: 5,
          marginBottom: 10,
         
        },
        buttonContainer : {
          flexDirection: 'row',
          justifyContent: "space-around",
          width: '60%'
        }
});

export default GoalInput;