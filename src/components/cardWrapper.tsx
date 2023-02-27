import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {normalize} from '../utils/dimensions';

type Props = {
  children: any;
  isDisable?: boolean;
  marginTop?: number;
  marginBottom?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: any;
  customStyle?: any;
  minHight?: string | number;
  onPress?: () => void;
};

function CustomCardWrapper({
  children,
  isDisable,
  marginTop,
  marginBottom,
  borderWidth,
  borderColor,
  customStyle,
  minHight,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisable}
      activeOpacity={0.8}
      style={[
        styles.cardContainer,
        {
          marginTop: marginTop,
          marginBottom: marginBottom,
          borderWidth: borderWidth,
          borderColor: borderColor,
          minHeight: minHight,
        },
        customStyle,
      ]}>
      {children}
    </TouchableOpacity>
  );
}

export default React.memo(CustomCardWrapper);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',

    paddingHorizontal: normalize(16),
    borderRadius: normalize(8),
  },
});
