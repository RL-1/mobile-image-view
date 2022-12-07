import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.js';
export function ImageViewer({navigation, route}) {
  const {image} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.close}>
          <View style={styles.button_close}>
            <Text style={styles.icon_close}>x</Text>
          </View>
        </TouchableOpacity>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </SafeAreaView>
  );
}
