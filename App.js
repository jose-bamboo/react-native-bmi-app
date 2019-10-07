import React, {useState, useEffect} from 'react'
import {
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Switch,
} from 'react-native'
import {Icon} from 'react-native-elements'


const App = () => {
  const [counter, setCounter] = useState("0")
  const [title, setTitle] = useState({
    name: "BMI Calculator",
    loading: false
  })
  // useEffect(() => {
  //   setTitle({loading: true})
  //   setTimeout(() => {
  //     setTitle({
  //       title: "Hello World",
  //       loading: false
  //     })
  //   }, 2000)
  // },[])

  const handleSwitch = () => {
    setTitle({
      name: title.name,
      loading: !title.loading
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>{title.name}</Text>
      <View style={styles.textInput}>
        <TextInput style={{color: 'white'}} placeholder="Height (cm)" placeholderTextColor="gray" underlineColorAndroid="#c5a5ae" keyboardType="decimal-pad" />
        <TextInput style={{color: 'white'}} placeholder="Weight (kg)" placeholderTextColor="gray" underlineColorAndroid="#c5a5ae" keyboardType="decimal-pad"/>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.buttonRed} activeOpacity={0.6}>
          <Text style={{color: 'white'}}>Metric</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonYel} activeOpacity={0.6}>
          <Text style={{color: 'black'}}>Clear</Text>
        </TouchableOpacity>
        <Switch thumbColor="lightblue" value={title.loading} onValueChange={handleSwitch}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#282c34',
    paddingTop: 50,
  },
  textWhite: {
    color: 'white'
  },
  buttonRed: {
    padding: 15,
    backgroundColor: '#dd6047',
    borderRadius: 10/2,
  },
  buttonYel: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10/2,
  },
  textInput: {
    width: '70%',
  },
  btnGroup: {
    marginTop: 40,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '70%',
    padding: 5,
  }
})

export default App