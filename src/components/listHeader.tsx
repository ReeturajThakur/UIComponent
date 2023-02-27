import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import localImages from '../utils/localImages';

type Props = {
  phoneNumber?: string;
  label?: string;
  headerContainer?: any;
  labelStyle?: any;
  leftIconContainerStyle?: any;
};

const ListHeader = ({
  label,
  phoneNumber,
  headerContainer,
  labelStyle,
  leftIconContainerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.userProfileContainer, headerContainer]}>
      <View style={[styles.leftIconDefaultContainer, leftIconContainerStyle]}>
        <Image
          style={styles.userIconStyle}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
        />
      </View>
      <View style={styles.userDetailsContainerStyle}>
        {label && (
          <Text numberOfLines={1} style={[styles.userNameStyles, labelStyle]}>
            {label}
          </Text>
        )}
        {phoneNumber && (
          <Text numberOfLines={1} style={styles.userNumberStyles}>
            {phoneNumber}
          </Text>
        )}
      </View>
      <Image source={localImages.arrow} style={styles.rightIconStyle} />
    </TouchableOpacity>
  );
};

export default React.memo(ListHeader);

const styles = StyleSheet.create({
  userProfileContainer: {
    flexDirection: 'row',
    backgroundColor: '#165FAA',
    borderRadius: normalize(8),
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(20),
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userIconStyle: {
    height: '100%',
    width: '100%',
  },
  leftIconDefaultContainer: {
    height: normalize(44),
    width: normalize(44),
  },
  userDetailsContainerStyle: {
    marginHorizontal: normalize(14),
    width: 0,
    flex: 1,
  },
  userNameStyles: {
    color: '#FFFFFF',
    fontSize: normalize(14),
  },
  userNumberStyles: {
    color: '#FFFFFF',
    fontSize: normalize(12),
    marginTop: normalize(4),
  },
  rightIconStyle: {
    width: normalize(24),
    height: normalize(24),
  },
});
