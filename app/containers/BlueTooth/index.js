import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { StackBar } from '../../components/StackBar';

export const BlueTooth = props => {
  const navigation = useNavigation();

  const toastPress = () => {
    console.log(23423);
  };
  const backScreen = () => {
    navigation.goBack();
  };
  const openHelp = () => {
    console.log('帮助');
  };
  return (
    <View style={styles.container}>
      <Toast onPress={toastPress} />
      <StackBar onBack={backScreen} onHelp={openHelp} />
      <View style={styles.toothRoot}>
        <TouchableOpacity style={styles.toothItem}>
          <View style={styles.toothLabel}>
            <Text style={styles.toothTitle}>F22R</Text>
            <Text style={styles.toothMac}>EF:39:16:32:92:F7</Text>
          </View>
          <Text style={styles.toothPoint}>-89</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
