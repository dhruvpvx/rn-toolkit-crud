import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useThunk } from '../../hooks';
import { AsyncThunks } from '../../redux';
import { useSelector } from 'react-redux';
import { Container, UserListCell } from '../../components';
import { AppImages, Colors } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const users = useSelector((state) => {
    return state.UsersSlice.users;
  });
  const [getUsers] = useThunk(AsyncThunks.getUsers);
  const navigation = useNavigation();

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  const renderItem = ({ item }) => {
    return <UserListCell user={item} />;
  };

  const goToAddUser = () => {
    navigation.navigate('AddUserScreen');
  };

  const addNewUser = () => {
    return (
      <TouchableOpacity onPress={goToAddUser} style={styles.addNewButton}>
        <Image source={AppImages.plusButton} style={styles.addIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <FlatList
        keyExtractor={(i) => i.id}
        data={users}
        renderItem={renderItem}
      />
      {addNewUser()}
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addNewButton: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: Colors.BLACK,
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
