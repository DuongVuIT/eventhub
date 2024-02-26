import {appInfo} from '@constants/appInfo';
import {globalStyles} from '@styles/globalStyles';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';

const OnBroadingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        index={index}>
        <Image
          source={require('@assets/image/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('@assets/image/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('@assets/image/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
      </Swiper>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          position: 'absolute',
          bottom: 20,
          right: 20,
          left: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBroadingScreen;

const styles = StyleSheet.create({});
