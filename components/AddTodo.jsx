import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Alert, TouchableOpacity } from 'react-native'

const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState()

  const addNewTodo = (input) => {
    if (input) {
      if (input.length > 2) {
        setTodos((state) => {
          return [
            { text: input, key: Math.random().toString() },
            ...state
          ]
        });
        setInput('')
      } else {
        Alert.alert('OOPS!', 'Todos must be over 2 chars long', [
          { text: 'Understood', onPress: () => { console.log('alert closed') } }
        ])
      }
    }
  }

  return (
    <View>
      <TextInput
        value={input}
        placeholder='New todo...'
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.button} onPress={() => addNewTodo(input)}>
        <Text style={styles.text}>Add todo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    marginTop: 16,
    padding: 15,
    backgroundColor: 'coral',
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
