import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Todo extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.todo}</Text>
        
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => {
            return;
          }}
        >
         <Text>{this.props.isComplete ? "✅" : null}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 18,
    marginLeft: 50,
    marginRight: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 20,
    padding: 10
  }
});

export default Todo;