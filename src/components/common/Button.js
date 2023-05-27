import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors, Fonts } from '../../assets';
import { LoaderIndicator } from '../containers';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button(props.color)]}
    >
      <LoaderIndicator
        loading={props.loading}
        color={Colors.WHITE}
        size={20}
        text={props.title}
        style={styles.btnText}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (color) => ({
    width: '88%',
    height: 50,
    backgroundColor: color || Colors.BLUE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  btnText: {
    ...Fonts.semiBold(16),
    color: Colors.WHITE,
  },
});
