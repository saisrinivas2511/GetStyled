import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Constants/Dimensions';

const UserSignUp = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../Assets/Images/Model.png')}
      />
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
export default UserSignUp;
