import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  content: {
    backgroundColor: 'rgb(243,245,250)',
    height: '100%',
  },
  close: {
    left: windowWidth - 50,
    top: 0,
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
  },
  button_close: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 50,
    width: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  icon_close: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 2,
  },
});
