import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '@constants/colors';
import {fontFamily} from '@constants/fontFamily';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
  numberOfLine?: number;
}

const TextComponent = (props: Props) => {
  const {text, size, color, flex, font, numberOfLine, styles, title} = props;
  const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;
  return (
    <Text
      numberOfLines={numberOfLine}
      style={[
        globalStyles.text,
        {
          color: color ?? colors.text,
          flex: flex ?? 0,
          fontSize: size ? size : title ? 24 : fontSizeDefault,
          fontFamily: font
            ? font
            : title
            ? fontFamily.medium
            : fontFamily.regular,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});
