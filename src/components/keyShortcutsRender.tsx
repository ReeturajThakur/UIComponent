import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import CardWrapper from './cardWrapper';
import localImages from '../utils/localImages';
import CustomSeperator from './customSeperator';

const KeyShortcutsRender = (data: any) => {
  const onRender = ({item}: any) => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.userProfileContainer]}>
          <View style={[styles.leftIconDefaultContainer]}>
            <Image style={styles.userIconStyle} source={item.rightIcon} />
          </View>
          <View style={styles.userDetailsContainerStyle}>
            <Text numberOfLines={1} style={[styles.userNameStyles]}>
              {item?.label}
            </Text>
          </View>
          <Image source={localImages.arrow} style={styles.rightIconStyle} />
        </TouchableOpacity>
        <CustomSeperator lineStyle={styles.seperatorStyle} />
      </>
    );
  };

  return (
    <>
      <Text style={styles.titleStyle}>{'Key Shortcuts'}</Text>
      <CardWrapper marginTop={normalize(8)}>
        <FlatList
          data={data.data}
          renderItem={onRender}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </CardWrapper>
    </>
  );
};

export default React.memo(KeyShortcutsRender);

const styles = StyleSheet.create({
  userProfileContainer: {
    flexDirection: 'row',
    borderRadius: normalize(12),
    paddingVertical: normalize(16),
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
    // color: '#FFFFFF',
    color: 'black',
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
  titleStyle: {
    marginTop: normalize(20),
    fontSize: normalize(16),
    color: '#333E49',
  },
  seperatorStyle: {height: normalize(0.5), backgroundColor: '#E6E6E6'},
});
