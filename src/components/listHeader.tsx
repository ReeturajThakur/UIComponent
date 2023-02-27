import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import localImages from '../utils/localImages';

type Props = {phoneNumber?: string; label?: string};

const ListHeader = ({label, phoneNumber}: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.userProfileContainer}>
      <View style={styles.userIcon}>
        <Image
          style={styles.userIconStyle}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
        />
      </View>
      <View style={styles.userDetailsContainerStyle}>
        {label && (
          <Text numberOfLines={1} style={styles.userNameStyles}>
            {label}
          </Text>
        )}
        {phoneNumber && (
          <Text numberOfLines={1} style={styles.userNumberStyles}>
            {phoneNumber}
          </Text>
        )}
      </View>
      <Image source={localImages.arrow} />
    </TouchableOpacity>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  userProfileContainer: {
    flexDirection: 'row',
    backgroundColor: '#165FAA',
    borderRadius: normalize(12),
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
  userIcon: {
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
});
