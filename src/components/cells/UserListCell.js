import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AppImages, Colors, Fonts } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const UserListCell = ({ user }) => {
  const isMale = user.gender === 'male';
  const isActive = user.status === 'active';
  const navigation = useNavigation();

  const goToUser = () => {
    navigation.navigate('UserDetailsScreen', { user });
  };

  return (
    <TouchableOpacity onPress={goToUser} style={styles.cell(isMale)}>
      <Text style={Fonts.semiBold(16)}>{user.name}</Text>
      {isActive && <View style={styles.redDot} />}
      <Image source={AppImages.rightArrow} style={styles.rightArrow} />
    </TouchableOpacity>
  );
};

export default UserListCell;

const styles = StyleSheet.create({
  cell: (isMale) => ({
    width: '91%',
    aspectRatio: 5.5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: isMale ? Colors.GREEN : Colors.PINK,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  }),
  redDot: {
    width: 7,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: Colors.RED,
    position: 'absolute',
    left: 10,
    top: 10,
  },
  rightArrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
