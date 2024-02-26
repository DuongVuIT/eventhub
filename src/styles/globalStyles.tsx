import {colors} from '@constants/colors';
import {fontFamily} from '@constants/fontFamily';
import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.text,
  },
});
