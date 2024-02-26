import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import TextComponent from './TextComponent';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
}
const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    color,
    onPress,
    styles,
    textColor,
    textStyle,
    type,
    iconFlex,
  } = props;
  return (
    <TouchableOpacity>
      {icon && iconFlex === 'left' && icon}
      <TextComponent text={text} styles={textStyle} color={textColor} />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
