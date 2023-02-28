import React from 'react';
import {StyleSheet, View} from 'react-native';
import {normalize} from '../utils/dimensions';

type Props = {
  children: any;
};

function CustomCardWrapper({children}: Props) {
  return <View style={styles.cardContainer}>{children}</View>;
}

export default React.memo(CustomCardWrapper);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginTop: normalize(8),
    paddingHorizontal: normalize(16),
    borderRadius: normalize(8),
    marginHorizontal: normalize(20),
  },
});
