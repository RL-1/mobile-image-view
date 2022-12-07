import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageOpen} from './ImageOpen';

const styles = StyleSheet.create({
  touchSale: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginBottom: 16,
    borderRadius: 16,
  },
  review__image: {
    width: '40%',
  },
  review__content: {
    flexDirection: 'row',
    width: '110%',
  },
  subtext: {
    marginTop: 4,
    width: '70%',
    color: '#757575',
  },
});
export const ImageItem = ({name, message, imageSmall, imageFull}) => {
  const [cutText, setCutText] = useState(60);
  const handlePress = () => {
    setCutText(cutText === 60 ? message.length : 60);
  };
  return (
    <TouchableOpacity onPress={message && handlePress} style={styles.touchSale}>
      <View style={styles.flex}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.review__content}>
        {message && (
          <Text style={styles.subtext}>
            {message.slice(0, cutText)}
            {cutText === 60 && '...'}
          </Text>
        )}
        <TouchableOpacity>
          <ImageOpen imageSmall={imageSmall} imageFull={imageSmall} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
