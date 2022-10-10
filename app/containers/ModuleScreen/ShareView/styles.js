import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const DarkBlue = '#30a2c4';
const White = '#ffffff';

export const styles = StyleSheet.create({
  currentView: {
    width: '100%',
    height: '50%',
  },
  titleView: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  contextView: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  touchOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchButton: {
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    width: '90%',
    backgroundColor: '#14a2a2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  touchText: {
    color: '#fff',
    fontSize: 15,
  },
  webView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000E2E',
  },
  webViewTouch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webViewText: { fontSize: 32, color: '#070d33' },
  viewImage: {
    width: 300,
    height: 200,
  },
  pickerView: {
    padding: 10,
  },
  placeholder: {
    color: '#666666',
  },
  controlView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
