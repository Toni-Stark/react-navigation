import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { HeaderBar } from '../../components/HeaderBar';
import Toast from 'react-native-toast-message';

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
  return (
    <View style={styles.container}>
      <HeaderBar search={true} value={value} onChange={e => setValue(e)} openLayout={() => updateMenuState(true)} />
      <Text>文件夹</Text>
      <Text>文件夹</Text>
      <Text>文件夹</Text>
    </View>
  );
};
