import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Container, UserImage } from '../../components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppImages, Colors, Fonts } from '../../assets';
import { useThunk } from '../../hooks';
import { AsyncThunks } from '../../redux';

const UserDetailsScreen = () => {
  const [deleteUser, status] = useThunk(AsyncThunks.deleteUser);
  const { user } = useRoute().params;
  const isActive = user.status === 'active';
  const statusImage = isActive ? AppImages.blueCheck : AppImages.redCross;

  const detailCell = (title, value) => {
    return (
      <View style={styles.detailsCell}>
        <Text style={Fonts.regular(14)}>{title}</Text>
        <Text style={Fonts.semiBold(16)}>{value}</Text>
      </View>
    );
  };

  const navigation = useNavigation();

  const onEdit = () => {
    navigation.navigate('EditUserScreen', { user });
  };

  const onDelete = () => {
    Alert.alert(
      'Delete User',
      'Are you sure you want to delete this user?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            deleteUser(user.id).then(() => {
              navigation.goBack();
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container ph={20} style={styles.container}>
      <UserImage gender={user.gender} />
      <View style={styles.userNameContainer}>
        <View style={styles.statusAndName}>
          <Text style={Fonts.semiBold(22)}>{user.name}</Text>
          <Image source={statusImage} style={styles.statusIcon} />
        </View>
        <Text style={Fonts.medium(14)}>{user.email}</Text>
      </View>
      <View style={styles.userDetailsContainer}>
        {detailCell('Unique ID', user.id)}
        {detailCell('Gender', user.gender)}
      </View>
      <View style={styles.btnsContainer}>
        <Button onPress={onEdit} color={Colors.MODAL_BG} title="Edit" />
        <Button
          onPress={onDelete}
          color={Colors.RED}
          title="Delete"
          loading={status.loading}
        />
      </View>
    </Container>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  btnsContainer: {
    width: '100%',
    aspectRatio: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  userNameContainer: {
    width: '100%',
    aspectRatio: 5,
    justifyContent: 'center',
  },
  userDetailsContainer: {
    width: '100%',
    aspectRatio: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsCell: {
    alignItems: 'center',
  },
  statusAndName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
