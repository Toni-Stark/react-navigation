import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { HeaderBar } from '../../components/HeaderBar';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

export const Home = props => {
  const navigation = useNavigation();

  useEffect(() => {
    ReceiveSharingIntent.getReceivedFiles(
      files => {
        console.log('log-----------------');
        // console.log(files);
        console.log('log-----------------');
        navigation.navigate('ShareView', { files: files });
        //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
      },
      error => {
        console.log(error);
      },
      'ShareMedia', // share url protocol (must be unique to your app, suggest using your apple bundle id)
    );
    return () => {
      ReceiveSharingIntent.clearReceivedFiles();
    };
  }, [navigation]);

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
    // navigation.navigate('Help');
    navigation.navigate('ShareView', {});
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
