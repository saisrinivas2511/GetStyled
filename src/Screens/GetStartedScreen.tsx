import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Lottie from 'lottie-react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../Constants/COLORS';

const {height} = Dimensions.get('window');
const walkthroughTitleList = [
  {
    id: 1,
    title: 'Fashion at Your Fingertips',
    desc: 'Curate, Explore, Elevate',
    icon: (
      <Lottie
        source={require('../Assets/Animations/StyledStudio.json')}
        autoPlay
      />
    ),
  },
  {
    id: 2,
    title: 'Wear the Future',
    desc: 'Your Closet, Redefined',
    icon: (
      <Lottie
        source={require('../Assets/Animations/modelWalk.json')}
        autoPlay
      />
    ),
  },
];
export default function GetStartedScreen() {
  const navigation = useNavigation();
  return (
    <View testID="getStartedScreen" style={[styler.container]}>
      <Swiper
        showsButtons={false}
        loop={false}
        activeDotColor="#495d63"
        activeDotStyle={{
          width: 15,
          height: 15,
          marginTop: 30,
          borderRadius: 7,
          marginRight: 10,
          marginLeft: 10,
        }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 7,
          marginTop: 30,
          backgroundColor: 'white',
          borderColor: '#495d63',
          borderWidth: 1,
          marginRight: 10,
          marginLeft: 10,
        }}
        paginationStyle={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: height / 13,
        }}>
        {walkthroughTitleList.map(item => {
          return (
            <View key={item.id} style={[styler.slide]}>
              {item.icon}
              <Text style={[styler.title]}>{item.title}</Text>
              <Text style={[styler.desc]}>{item.desc}</Text>
              {item.id === walkthroughTitleList.length && (
                <TouchableOpacity
                  testID="login"
                  style={styler.touchablebtn}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={styler.touchableText}>Get Started</Text>
                  <Icons name="arrow-forward-ios" size={15} color={'white'} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </Swiper>
    </View>
  );
}
const styler = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#98b6b1',
    backgroundColor: COLORS.lightGray,
  },
  slide: {
    flex: 1,
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#98b6b1',
    backgroundColor: COLORS.lightGray,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    marginTop: 400,
    fontSize: 25,
    marginVertical: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  touchableText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    justifyContent: 'center',
  },
  touchablebtn: {
    height: 59,
    width: 320,
    // backgroundColor: '#495D63',
    backgroundColor: COLORS.lightGreen,
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});
