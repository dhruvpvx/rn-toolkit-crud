import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Container, UserDetailsForm } from '../../components';
import { useThunk } from '../../hooks';
import { AsyncThunks } from '../../redux';
import { useNavigation } from '@react-navigation/native';

const AddUserScreen = () => {
  const [addUser, status] = useThunk(AsyncThunks.addUser);
  const navigation = useNavigation();

  const onSubmit = (values) => {
    addUser(values)
      .then((res) => {
        navigation.goBack();
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <Container>
      <UserDetailsForm
        btnTitle="Create"
        onSubmit={onSubmit}
        loading={status.loading}
      />
    </Container>
  );
};

export default AddUserScreen;

const styles = StyleSheet.create({});
