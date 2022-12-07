import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Screen} from './Screen';

export const ImageOpen = ({imageSmall, imageFull}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(Screen.ImageViewer, {image: imageFull});
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={{width: 70, height: 70}} source={{uri: imageSmall}} />
    </TouchableOpacity>
  );
};
