import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Constants/Dimensions';
import {COLORS} from '../Constants/COLORS';
import {STYLES} from '../Constants/Styles';

const UserLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password,setPassword] =useState<string>('');
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../Assets/Images/Model.png')}
      />
      <View style={styles.overlay}>
        <TextInput
          style={styles.textContainer}
          placeholder="Email"
          placeholderTextColor={COLORS.transparentBlack7}
          onChangeText={email => setEmail(email)}></TextInput>

        <TextInput
          style={styles.textContainer}
          placeholder="Password"
          placeholderTextColor={COLORS.transparentBlack7}
          onChangeText={password => setPassword(password)}></TextInput>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            style={STYLES.filledButton}
            onPress={() => {
              console.log('button clicked');
              // navigation.navigate('UserLogin');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
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
  textContainer: {
    backgroundColor: COLORS.white,
    width: SCREEN_WIDTH * 0.8,
    height: 60,
    borderRadius: 100,
    paddingLeft: 25,
    marginTop: 40,
  },
});
export default UserLogin;
