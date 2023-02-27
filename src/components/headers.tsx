import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';

const Headers = () => {
  return (
    <View style={styles.headerContainerStyle}>
      <Text style={styles.headerTextStyle}>Menu</Text>
    </View>
  );
};

export default React.memo(Headers);

const styles = StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: '#FFFFFF',
    marginTop: normalize(50),
    height: normalize(56),
    paddingHorizontal: normalize(20),
    justifyContent: 'center',
  },
  headerTextStyle: {
    color: '#333E49',
    fontSize: normalize(18),
  },
});
