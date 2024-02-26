import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

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
  return (
    <View>
      <Text>TextComponent</Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});
