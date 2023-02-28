import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize, vw} from '../utils/dimensions';
import localImages from '../utils/localImages';

type Props = {
  phoneNumber?: string;
  label?: string;
  headerContainer?: any;
  labelStyle?: any;
  backgroundSource?: any;
  leftIconContainerStyle?: any;
};

const ListHeader = ({
  label,
  phoneNumber,
  headerContainer,
  backgroundSource,
  labelStyle,
  leftIconContainerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.userProfileContainer, headerContainer]}>
      {backgroundSource && (
        <Image
          style={styles.backgroundImageStyle}
          resizeMode={'contain'}
          source={backgroundSource}
        />
      )}
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
    borderRadius: normalize(8),
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(16),
    alignSelf: 'center',
    marginHorizontal: normalize(16),
    paddingHorizontal: normalize(16),
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
  backgroundImageStyle: {
    height: vw(142),
    width: vw(391),
    position: 'absolute',
    zIndex: -1,
    left: normalize(-22),
    top: normalize(-27),
  },
});
