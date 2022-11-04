import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { StackBar } from '../../components/StackBar';

let list_data = [
  {
    title: 'F22R',
    mac: 'EF:39:16:32:92:F7',
    point: '-89',
    id: '37',
  },
  {
    title: 'Fccd',
    mac: 'EF:39:16:32:92:F5',
    point: '-53',
    id: '32',
  },
  {
    title: 'F234R',
    mac: 'EF:39:16:32:92:33',
    point: '-32',
    id: '30',
  },
  {
    title: 'F22R',
    mac: 'EF:39:16:32:92:F7',
    point: '-89',
    id: '33',
  },
  {
    title: 'Fccd',
    mac: 'EF:39:16:32:92:F5',
    point: '-53',
    id: '29',
  },
  {
    title: 'F234R',
    mac: 'EF:39:16:32:92:33',
    point: '-32',
    id: '28',
  },
  {
    title: 'F22R',
    mac: 'EF:39:16:32:92:F7',
    point: '-89',
    id: '272',
  },
  {
    title: 'Fccd',
    mac: 'EF:39:16:32:92:F5',
    point: '-53',
    id: '26',
  },
  {
    title: 'F234R',
    mac: 'EF:39:16:32:92:33',
    point: '-32',
    id: '25',
  },
  {
    title: 'F22R',
    mac: 'EF:39:16:32:92:F7',
    point: '-89',
    id: '24',
  },
  {
    title: 'Fccd',
    mac: 'EF:39:16:32:92:F5',
    point: '-53',
    id: '23',
  },
  {
    title: 'F234R',
    mac: 'EF:39:16:32:92:33',
    point: '-32',
    id: '22',
  },
];

export const BlueTooth = props => {
  const navigation = useNavigation();
  const [devicesList, setDevicesList] = useState(list_data);
  const [refresh, setRefresh] = useState(false);

  const toastPress = () => {
    console.log(23423);
  };
  const backScreen = () => {
    navigation.goBack();
  };
  const openHelp = () => {
    console.log('帮助');
  };
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.toothItem}>
        <View style={styles.toothLabel}>
          <Text style={styles.toothTitle}>{item.title}</Text>
          <Text style={styles.toothMac}>{item.mac}</Text>
        </View>
        <Text style={styles.toothPoint}>{item.point}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Toast onPress={toastPress} />
      <StackBar onBack={backScreen} onHelp={openHelp} />
      <View style={styles.toothRoot}>
        <FlatList
          refreshing={refresh}
          data={devicesList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onRefresh={onRefresh}
        />
      </View>
    </View>
  );
};
