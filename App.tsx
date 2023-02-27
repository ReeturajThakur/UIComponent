import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import Headers from './src/components/headers';
import {normalize} from './src/utils/dimensions';

import {menuData} from './src/modules/menu/screens/constants';
import ListHeader from './src/components/listHeader';

import KeyShortcutsRender from './src/components/keyShortcutsRender';
import SettingRender from './src/components/settingRender';
import ContactRender from './src/components/contactRender';

const App = () => {
  const onRender = ({item}: any) => {
    switch (item?.heading) {
      case 'Key ShortCuts':
        return <KeyShortcutsRender data={item?.keys} />;
      case 'Settings':
        return <SettingRender data={item?.keys} />;
      case 'Contact':
        return <ContactRender data={item?.keys} />;
    }
    return null;
  };

  const _listHeader = useCallback(() => {
    return (
      <>
        <ListHeader label={'Ram Prasad'} phoneNumber={'8786678399'} />
        <ListHeader
          leftIconContainerStyle={styles.leftIconContainerStyle}
          label={'About community'}
          labelStyle={styles.labelStyle}
          headerContainer={styles.headerContainer}
        />
      </>
    );
  }, []);

  return (
    <View style={styles.parentContainerStyle}>
      <Headers />
      <FlatList
        data={menuData}
        bounces={false}
        style={styles.containerStyles}
        contentContainerStyle={{paddingBottom: normalize(60)}}
        renderItem={onRender}
        ListHeaderComponent={_listHeader}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.logoutButtonStyle}>
        <Text style={styles.logoutTextStyle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(App);

const styles = StyleSheet.create({
  containerStyles: {
    // flex: 1,
    padding: normalize(20),
    backgroundColor: '#F5F7F9',
  },
  headerContainer: {
    backgroundColor: 'white',
    marginTop: normalize(16),
  },
  labelStyle: {color: '#333E49', fontSize: normalize(14)},
  leftIconContainerStyle: {height: normalize(36), width: normalize(36)},
  logoutButtonStyle: {
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(20),
    marginBottom: normalize(20),
    backgroundColor: 'white',
    borderColor: '#1661AD',
    borderWidth: 1,
    borderRadius: normalize(8),
  },
  logoutTextStyle: {color: '#1661AD', fontSize: normalize(15)},
  parentContainerStyle: {flex: 1, backgroundColor: '#F5F7F9'},
});
