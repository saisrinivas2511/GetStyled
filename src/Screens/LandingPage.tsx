import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Constants/Dimensions';
import {COLORS} from '../Constants/COLORS';
import {STYLES} from '../Constants/Styles';

const Login = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../Assets/Images/Model.png')}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>Login To {'\n'}Greatness</Text>
        <TouchableOpacity
          style={STYLES.transparentButton}
          onPress={() => {
            navigation.navigate('UserLogin');
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: '5%',
            color: 'white',
            justifyContent: 'center',
            marginLeft: '40%',
          }}>
          or
        </Text>
        <TouchableOpacity
          style={STYLES.filledButton}
          onPress={() => {
            navigation.navigate('UserSignUp');
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    marginTop: SCREEN_HEIGHT * 0.45,
    marginLeft: SCREEN_WIDTH * 0.1,
    // alignItems: 'center',
  },
  text: {
    color: 'white', // Set text color
    fontSize: 60, // Set text size
    fontWeight: 'bold', // Set text weight (if needed)
  },
});

export default Login;
