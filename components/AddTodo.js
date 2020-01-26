import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      newTodo: ''
    }
  }
  
  _onPressButton = () => {
    alert(this.state.newTodo);
    this.setState({
      newTodo: ''
    })
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
          onPress={this._onPressButton}
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
})