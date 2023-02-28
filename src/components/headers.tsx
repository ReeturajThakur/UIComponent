import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  StatusBar,
  Platform,
} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';

const {StatusBarManager} = NativeModules;

const Headers = () => {
  return (
    <View style={styles.headerContainerStyle}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text style={styles.headerTextStyle}>{'Menu'}</Text>
    </View>
  );
};

export default React.memo(Headers);

const styles = StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: '#FFFFFF',
    paddingTop:
      Platform.OS === 'ios'
        ? StatusBarManager?.HEIGHT + normalize(17)
        : normalize(17),
    paddingHorizontal: normalize(20),
    justifyContent: 'center',
  },
  headerTextStyle: {
    color: '#333E49',
    fontSize: normalize(18),
    marginBottom: normalize(17),
  },
});
