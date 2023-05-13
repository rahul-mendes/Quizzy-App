import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SignUpScreen = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    }catch (error) {

      setValue({
        ...value,
        error: ''
      })
    }
  }

  return (
    <View style={styles.container}>
      

      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

      <View style={styles.email}>
        <Icon style={styles.icon} name='envelope' size={16} />
        <TextInput
          placeholder='Email'
          style={styles.input}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />
      </View>
        
      <View style={styles.password}>
        <Icon style={styles.icon} name='key' size={16} />
        <TextInput
          placeholder='Password'
          style={styles.input}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          />
      </View>
      <Button title="Sign up" buttonStyle={styles.control} onPress={signUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  email: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  password: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  icon: {
    padding: 10,

  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
  control: {
    marginTop: 10,
    backgroundColor: '#fec625',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default SignUpScreen;