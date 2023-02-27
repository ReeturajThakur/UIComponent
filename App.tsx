import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Headers from './src/components/headers';
import {normalize} from './src/utils/dimensions';
import RenderList from './src/components/renderList';

const App = () => {
  const onRender = ({item}: any) => {
    return <RenderList />;
  };

  const _listHeader = () => {
    return (
      <TouchableOpacity style={styles.userProfileContainer}>
        <View style={styles.userIcon}>
          <Image
            style={styles.userIconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
          />
        </View>
        <View style={styles.userDetailsContainerStyle}>
          <Text numberOfLines={1} style={styles.userNameStyles}>
            Ramakar Prasad Ramakar Prasad Ramakar Prasad Ramakar Prasad
          </Text>
          <Text numberOfLines={1} style={styles.userNumberStyles}>
            {'7878787878787'}
          </Text>
        </View>
        <Image source={{}} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Headers />

      <FlatList
        data={[1, 2, 1, 1, 1, 1]}
        style={styles.containerStyles}
        renderItem={onRender}
        ListHeaderComponent={_listHeader}
      />
    </>
  );
};

export default React.memo(App);

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    padding: normalize(20),
    backgroundColor: '#F5F7F9',
  },
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
