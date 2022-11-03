import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { HeaderBar } from '../../components/HeaderBar';
import FastImage from 'react-native-fast-image';
import images from 'images';

export const BlueTooth = props => {
  const navigation = useNavigation();
  const linkBlueTooth = () => {
    navigation.navigate('');
  };
  const toastPress = () => {
    console.log(23423);
  };
  const updateMenuState = () => {
    console.log(23423);
  };

  return (
    <View style={styles.container}>
      <Toast onPress={toastPress} />
      <HeaderBar openLayout={() => updateMenuState(true)} />
      <View style={styles.root}>
        <View>
          <View>
            <Text>F22R</Text>
            <Text>EF:39:16:32:92:F7</Text>
          </View>
          <Text>-89</Text>
        </View>
      </View>
    </View>
  );
};
