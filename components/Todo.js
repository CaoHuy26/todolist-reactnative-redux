import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import todoActions from '../actions/todoActions';
import { connect } from 'react-redux';

class Todo extends React.Component {
  
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.toggleTodo(this.props.id)
        }}
      >
        <View style={styles.container}>
          <Text 
            style={this.props.isComplete ? styles.done : null}
          >
            {this.props.todo}
          </Text>
         <Text style={{marginLeft: 20}}>{this.props.isComplete ? "✅" : null}</Text>
        </View>
      </TouchableOpacity>
      
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
  },
  done: {
    opacity: 0.5,
    textDecorationLine: 'line-through'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(todoActions.toggleTodo(id))
  }
};

export default connect(null, mapDispatchToProps)(Todo);