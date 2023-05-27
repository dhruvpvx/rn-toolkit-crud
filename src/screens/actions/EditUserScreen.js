import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Container, UserDetailsForm } from '../../components';
import { useThunk } from '../../hooks';
import { AsyncThunks } from '../../redux';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditUserScreen = () => {
  const [editUser, status] = useThunk(AsyncThunks.editUser);
  const navigation = useNavigation();
  const { user } = useRoute().params;

  const onSubmit = (values) => {
    editUser(user.id, values)
      .then((res) => {
        navigation.navigate('HomeScreen');
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <Container>
      <UserDetailsForm
        btnTitle="Update User"
        user={user}
        onSubmit={onSubmit}
        loading={status.loading}
      />
    </Container>
  );
};

export default EditUserScreen;

const styles = StyleSheet.create({});
