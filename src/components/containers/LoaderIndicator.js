import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../assets';

const LoaderIndicator = (props) => {
  return props.loading ? (
    <ActivityIndicator
      size={props.size || 'large'}
      color={props.color || Colors.RED}
    />
  ) : props.text ? (
    <Text style={props.style}>{props.text}</Text>
  ) : props.renderComponent ? (
    props.renderComponent()
  ) : null;
};

export default LoaderIndicator;

const styles = StyleSheet.create({});
