import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import Headers from './src/components/headers';
import {normalize} from './src/utils/dimensions';
import localImages from './src/utils/localImages';
import RenderList from './src/components/renderList';
import {menuData} from './src/modules/menu/screens/constants';
import ListHeader from './src/components/listHeader';

const App = () => {
  const onRender = ({item}: any) => {
    console.log('item', item);

    return <RenderList />;
  };

  const _listHeader = useCallback(() => {
    return (
      <>
        <ListHeader label={'Ram Prasad'} phoneNumber={'8786678399'} />
        <ListHeader label={'About community'} />
      </>
    );
  }, []);

  return (
    <>
      <Headers />

      <FlatList
        data={menuData}
        bounces={false}
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
});
