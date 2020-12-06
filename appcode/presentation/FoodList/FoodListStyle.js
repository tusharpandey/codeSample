import { StyleSheet } from 'react-native';
import globalStyle from '../../utils/GlobalStyle'
const styles = StyleSheet.create({

  canvas:
    { flex: 1 },

  view: {
    flex: 1
  },

  loaderStyle: {
    position: 'absolute', bottom: 0, top: 0, right: 0, left: 0
  },

  errorState: {
    position: 'absolute',
    bottom: 0, top: 0, right: 0, left: 0,
  },

  buttonContainer: { paddingHorizontal: 20, paddingVertical: 8, height: 100, width: 100 }


});

export default styles;
