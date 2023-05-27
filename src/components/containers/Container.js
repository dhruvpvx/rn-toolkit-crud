import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../assets';

const Container = (props) => {
  const style = [
    styles.container,
    { paddingHorizontal: props.ph || 0 },
    props.style,
  ];
  return (
    <View {...props} style={style}>
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
