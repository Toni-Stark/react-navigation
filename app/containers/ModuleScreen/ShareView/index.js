import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { RegSharePath } from '../../../utils/tools';
import WebView from 'react-native-webview';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';
import Toast from 'react-native-toast-message';

const DarkBlue = '#30a2c4';
const White = '#ffffff';
export const ShareView = ({ route }) => {
  const window = useWindowDimensions();
  const screenHeight = Dimensions.get('screen');
  const [shareFile, setShareFile] = useState(undefined);
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['fake', 'swindle']);
  const [items, setItems] = useState([
    { label: '虚假信息', value: 'fake' },
    { label: '虚假新闻', value: 'news', parent: 'fake' },
    { label: '虚假论坛', value: 'talk', parent: 'fake' },

    { label: '诈骗信息', value: 'swindle' },
    { label: '诈骗钱财', value: 'money', parent: 'swindle' },

    { label: '煽动舆论', value: 'stirOpinion' },
  ]);

  useEffect(() => {
    console.log(route.params.files);
    setShareFile(route.params.files);
  }, [route.params.files]);

  const InTheLocal = useCallback(() => {
    Toast.show({
      text1: '存入本地',
      text2: shareFile,
    });
  }, [shareFile]);

  const useSourceOrView = useMemo(() => {
    let source = shareFile?.length > current ? shareFile[current] : {};
    console.log('log-----------', source);
    if (source?.fileName) {
      console.log('file:///storage/emulated/0' + source.filePath);
      return (
        <View>
          <Image
            style={styles.viewImage}
            source={{
              uri: 'storage/emulated/0/' + source.filePath,
            }}
          />
        </View>
      );
    } else {
      let options = {
        uri: source.text ? RegSharePath(source.text) : source.weblink,
      };
      if (options.uri) {
        return <WebView source={options} onLoad={() => {}} style={styles.webView} />;
      } else {
        return (
          <TouchableOpacity style={styles.webViewTouch}>
            <Text style={styles.webViewText}>ReactNative</Text>
          </TouchableOpacity>
        );
      }
    }
  }, [current, shareFile]);

  const usePicker = useMemo(() => {
    return (
      <View style={styles.pickerView}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          multiple={true}
          mode="BADGE"
          badgeDotColors={['#e76f51', '#00b4d8', '#e9c46a', '#e76f51', '#8ac926', '#00b4d8', '#e9c46a']}
          placeholder="请选择举报类型"
          placeholderStyle={styles.placeholder}
        />
      </View>
    );
  }, [items, open, value]);

  const currentContext = useMemo(() => {
    return (
      <SafeAreaView
        style={{
          width: window.width,
          height: screenHeight.height,
          paddingTop: 35,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <View style={styles.currentView}>
          <View style={styles.contextView}>{useSourceOrView}</View>
        </View>
        {usePicker}
        <View style={styles.controlView}>
          <TouchableOpacity style={styles.touchOpacity} onPress={() => InTheLocal()}>
            <View style={styles.touchButton}>
              <Text style={styles.touchText}>收藏</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchOpacity}>
            <View style={styles.touchButton}>
              <Text style={styles.touchText}>提交</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Toast />
      </SafeAreaView>
    );
  }, [InTheLocal, screenHeight.height, usePicker, useSourceOrView, window.width]);

  return <KeyboardAvoidingView behavior="position">{currentContext}</KeyboardAvoidingView>;
};
