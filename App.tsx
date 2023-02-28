import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import Headers from './src/components/headers';
import {normalize} from './src/utils/dimensions';

import {menuData} from './src/utils/constants';
import ListHeader from './src/components/listHeader';

import KeyShortcutsRender from './src/components/keyShortcutsRender';

import localImages from './src/utils/localImages';

type ArrayKeysType = {rightIcon: any; label: string; leftIcon: any};

type RenderItemTypes = {item: {keys: Array<ArrayKeysType>; heading: string}};

const App = () => {
  const onRender = useCallback(({item}: RenderItemTypes) => {
    return <KeyShortcutsRender heading={item?.heading} data={item?.keys} />;
  }, []);

  const _listHeader = useCallback(() => {
    return (
      <>
        <ListHeader
          backgroundSource={localImages.profileBackground}
          label={'Ram Prasad'}
          phoneNumber={'8786678399'}
        />
        <ListHeader
          leftIconContainerStyle={styles.leftIconContainerStyle}
          label={'About community'}
          labelStyle={styles.labelStyle}
          headerContainer={styles.headerContainer}
        />
      </>
    );
  }, []);

  const handleLogout = useCallback(() => {
    console.log('Logg');
  }, []);

  const _listFooter = useCallback(() => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleLogout}
        style={styles.logoutButtonStyle}>
        <Text style={styles.logoutTextStyle}>Logout</Text>
      </TouchableOpacity>
    );
  }, [handleLogout]);

  return (
    <View style={styles.parentContainerStyle}>
      <Headers />

      <FlatList
        data={menuData}
        bounces={false}
        style={styles.containerStyles}
        contentContainerStyle={styles.flatListContainerStyle}
        renderItem={onRender}
        ListHeaderComponent={_listHeader}
        ListFooterComponent={_listFooter}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(App);

const styles = StyleSheet.create({
  containerStyles: {
    paddingVertical: normalize(20),
    backgroundColor: '#F5F7F9',
  },
  headerContainer: {
    backgroundColor: 'white',
    marginTop: normalize(16),
  },
  flatListContainerStyle: {paddingBottom: normalize(30)},
  labelStyle: {color: '#333E49', fontSize: normalize(14)},
  leftIconContainerStyle: {height: normalize(36), width: normalize(36)},
  logoutButtonStyle: {
    borderWidth: 1,
    alignItems: 'center',
    height: normalize(50),
    borderColor: '#1661AD',
    marginTop: normalize(40),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: normalize(8),
    marginBottom: normalize(20),
    marginHorizontal: normalize(20),
  },
  logoutTextStyle: {color: '#1661AD', fontSize: normalize(15)},
  parentContainerStyle: {flex: 1, backgroundColor: '#F5F7F9'},
});
