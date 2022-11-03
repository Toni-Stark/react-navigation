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
  },
  font: {
    fontSize: 30,
    color: DarkBlue,
    textAlign: 'center',
  },
  canvasStyle: {
    height: '30%',
    width: '100%',
    backgroundColor: '#00D1DE',
  },
  linkBlue: {
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FF002F',
  },
  labelData: {
    color: '#ffffff',
    fontSize: 15,
  },
  tabView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 26,
    height: 26,
  },
  linkOpacity: {
    width: '100%',
  },
});
