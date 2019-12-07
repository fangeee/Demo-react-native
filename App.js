import React, {useState} from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(){
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModel,setIsAddModel] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);

    setIsAddModel(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddModel(false);

  };

  return(
    
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setIsAddModel(true)}/>

      <GoalInput visible={isAddModel} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList 
        data={courseGoals}
        keyExtractor = {(item, index) => item.id} 
        renderItem={itemData => (<GoalItem
                                  id={itemData.item.id} 
                                  onDelete={removeGoalHandler} 
                                  title={itemData.item.value}/>
        )} 
                                  />
    </View>
    
  );


}

const styles = StyleSheet.create({
  screen:{
    padding: 50,
    

  },
  
    
    

});

