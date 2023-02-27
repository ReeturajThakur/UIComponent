import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
type LinePropsType = {
  lineStyle: ViewStyle;
};
const Seperator = (props: LinePropsType) => {
  const {lineStyle} = props;
  return (
    <View style={styles.container}>
      <View style={lineStyle} />
    </View>
  );
};

export default React.memo(Seperator);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
