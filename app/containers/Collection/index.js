import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { HeaderBar } from '../../components/HeaderBar';
import Toast from 'react-native-toast-message';
const RNFS = require('react-native-fs');

export const Collection = props => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const updateMenuState = isOpen => {
    // navigation.navigate('DrawerScreen');
    Toast.show({
      text1: '进入个人页面',
      text2: '进入个人页面',
    });
  };
  const getImage = () => {
    console.log('预览图片');
    var path = RNFS.DocumentDirectoryPath;
    console.log(path);
  };
  return (
    <View style={styles.container}>
      <HeaderBar search={true} value={value} onChange={e => setValue(e)} openLayout={() => updateMenuState(true)} />
      <Text>文件夹</Text>
      <Text>文件夹</Text>
      <Text>文件夹</Text>
      <Button onPress={getImage} title="获取图片" />
    </View>
  );
};
