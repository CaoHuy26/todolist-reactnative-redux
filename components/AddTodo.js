import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import todoActions from '../actions/todoActions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      newTodo: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder='Enter new to do'
          onChangeText={(text) => this.setState({newTodo: text})}
          value={this.state.newTodo}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => {
            this.props.onClickAdd(this.state.newTodo);
            this.setState({
              newTodo: ''
            })
          }}
        >
          <Image
            source={require('../icons/icon-button-add.png')}
            style={styles.imageButtonAdd}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10
  },
  buttonAdd: {
    marginLeft: 10
  },
  imageButtonAdd: {
    width: 40,
    height: 40
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: newTodo => dispatch(todoActions.addNewTodo(newTodo))
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);