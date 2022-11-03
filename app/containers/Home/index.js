import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { HeaderBar } from '../../components/HeaderBar';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';
import images from 'images';

export const Home = props => {
  const navigation = useNavigation();

  useEffect(() => {
    ReceiveSharingIntent.getReceivedFiles(
      files => {
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

  const linkBlueTooth = () => {
    navigation.navigate('BlueTooth', {});
  };
  return (
    <View style={styles.container}>
      <Toast onPress={toastPress} />
      <HeaderBar openLayout={() => updateMenuState(true)} />
      <View style={styles.root}>
        <View style={styles.canvasStyle}></View>
        <TouchableOpacity style={styles.linkOpacity} onPress={linkBlueTooth}>
          <View style={styles.linkBlue}>
            <View style={styles.tabView}>
              <FastImage style={styles.image} source={images.devices} />
              <Text style={styles.labelData}>设备未连接</Text>
            </View>
            <View style={styles.tabView}>
              <Text style={styles.labelData}>点击连接设备</Text>
              <FastImage style={styles.image} source={images.right} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
