import SpaceComponent from '@components/SpaceComponent';
import {appInfo} from '@constants/appInfo';
import {colors} from '@constants/colors';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      imageStyle={{flex: 1}}
      source={require('@assets/image/splash-img.png')}>
      <Image
        source={require('@assets/image/logo.png')}
        style={{width: appInfo.sizes.WIDTH * 0.7, resizeMode: 'contain'}}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={colors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
