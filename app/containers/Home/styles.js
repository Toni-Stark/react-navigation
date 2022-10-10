import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const DarkBlue = '#30a2c4';
const White = '#ffffff';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White,
  },
  drawerContainer: {},
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  font: {
    fontSize: 30,
    color: DarkBlue,
    textAlign: 'center',
  },
});
