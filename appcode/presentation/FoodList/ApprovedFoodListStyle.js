import { StyleSheet } from 'react-native';
import globalStyle from '../../utils/GlobalStyle';
const styles = StyleSheet.create({

  cross_button_style: {
    width: 24,
    height: 24,
    marginTop: 20
  },

  message_button_style: {
    width: 50,
    height: 50,
  },

  message_button_container: {
    position: 'absolute',
    right: 18,
    top: 30,
  },

  page_title_text_style: {
    fontSize: 24, marginVertical: 30
  },

  inputComponent: {
    ...globalStyle.width,
    ...globalStyle.input_field_padding,
    ...globalStyle.input_field_border,
    height: 50,
  }
});

export default styles;
