import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toothRoot: {
    flex: 1,
  },
  toothItem: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    borderBottomStyle: 'solid',
  },
  toothLabel: {},
  toothTitle: {
    fontSize: 16,
  },
  toothMac: {
    fontSize: 13,
    marginTop: 4,
    color: '#9e9e9e',
  },
  toothPoint: {
    fontSize: 16,
    color: '#00D1DE',
  },
});
