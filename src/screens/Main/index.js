import React, {useEffect} from 'react';
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles.js';
import {ImageItem} from '../../components/ImageItem';
import {getPhotos} from './redux';
import {useDispatch, useSelector} from 'react-redux';
export const Main = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.main);
  useEffect(() => {
    dispatch(getPhotos());
  }, []);
  const renderItem = ({item}) => {
    return (
      <ImageItem
        name={item.user.name}
        message={item.user.bio}
        imageSmall={item.urls.small}
        imageFull={item.urls.full}
      />
    );
  };
  const renderFooter = () => <View style={styles.footerText} />;
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <FlatList
        data={photos.photos}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={styles.flatList}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};
