import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { HeaderBar } from '../../components/HeaderBar';

export const User = props => {
  const navigation = useNavigation();

  const toastPress = () => {
    console.log('触发Toast点击事件');
  };

  const updateMenuState = isOpen => {
    // navigation.navigate('DrawerScreen');
    Toast.show({
      text1: '进入个人页面',
      text2: '进入个人页面',
    });
  };
  const changeMenuState = isOpen => {
    console.log('打开侧边栏');
    navigation.navigate('Help');
  };
  return (
    <View style={styles.container}>
      <Toast onPress={toastPress} />
      <HeaderBar openLayout={() => updateMenuState(true)} />
      <View style={styles.root}>
        <TouchableOpacity onPress={changeMenuState}>
          <Text style={styles.font}>通过分享进入应用程序</Text>
          <Text style={styles.font}>即可打开举报窗口 👋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
