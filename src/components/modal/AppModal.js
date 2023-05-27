import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../assets';

const AppModal = (props) => {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={props.close}
      transparent
    >
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.container, props.style]}
        onPressOut={props.close}
      >
        {props.children}
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MODAL_BG,
  },
});
