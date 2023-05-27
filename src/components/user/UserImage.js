import { Image, Platform, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LoaderIndicator } from '../containers';
import { ApiManager } from '../../api';

const UserImage = ({ gender }) => {
  const [userImage, setUserImage] = useState('');

  const fetchImage = async () => {
    try {
      const res = await ApiManager.getRandomImage(gender);
      setUserImage(res.data.results[0].picture.large);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <View style={styles.userImage}>
      <LoaderIndicator
        loading={!userImage}
        renderComponent={() => (
          <Image
            source={{ uri: userImage }}
            resizeMode="contain"
            style={styles.userImage}
          />
        )}
      />
    </View>
  );
};

export default UserImage;

const styles = StyleSheet.create({
  userImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});
