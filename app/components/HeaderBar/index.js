import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import images from 'images';

export const HeaderBar = props => {
  return (
    <>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={props.openLayout}>
          <FastImage style={styles.image} source={images.user} />
        </TouchableWithoutFeedback>
        {props?.search ? (
          <View style={styles.searchView}>
            <TextInput
              style={styles.input}
              onChangeText={props.onChange}
              value={props.value}
              placeholder="查找收藏词条"
            />
          </View>
        ) : (
          <Text style={styles.title}>数据面板</Text>
        )}
        <View>
          <FastImage style={styles.image} source={images.share} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00D1DE',
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    borderStyle: 'solid',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: 17,
    color: '#ffffff',
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 60,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 28,
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 50,
    paddingHorizontal: 10,
    overflow: 'hidden',
    borderColor: '#D4D8DA',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 2,
    backgroundColor: '#EEF3F4',
  },
  input: {
    flex: 1,
    backgroundColor: '#EEF3F4',
    paddingVertical: 2,
  },
});
