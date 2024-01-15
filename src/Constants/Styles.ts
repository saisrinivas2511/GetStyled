import {StyleSheet} from 'react-native';
import { COLORS } from './COLORS';
import { SCREEN_WIDTH } from './Dimensions';

export const STYLES=StyleSheet.create({
 transparentButton: {
    marginTop: '5%',
    backgroundColor: COLORS.transparentBlack5,
    padding: 20,
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.lightGreen,
    borderWidth: 2,
},
 filledButton:{ 
    marginTop: '5%',   
    backgroundColor: COLORS.lightGreen,
    padding: 20,
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,}
})