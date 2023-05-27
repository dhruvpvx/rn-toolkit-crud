import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Container } from '../containers';
import { Colors, Fonts } from '../../assets';
import { SelectModal } from '../modal';
import { Button } from '../common';

const GENDERS = ['Male', 'Female', 'Other'];
const STATUSES = ['Active', 'Inactive'];

const UserDetailsForm = (props) => {
  const [userDetails, setUserDetails] = React.useState({
    name: '',
    email: '',
    status: '',
    gender: '',
    ...props.user,
  });

  const updateUser = (key, value) => {
    setUserDetails((prev) => ({ ...prev, [key]: value }));
  };

  const renderInput = (placeholder, key) => {
    return (
      <TextInput
        placeholderTextColor={Colors.PLACE_HOLDER_COLOR}
        style={styles.input}
        value={userDetails[key]}
        placeholder={placeholder}
        onChangeText={(text) => updateUser(key, text)}
        keyboardType={key === 'email' ? 'email-address' : 'default'}
      />
    );
  };

  const onPress = () => {
    props.onSubmit(userDetails);
  };

  return (
    <Container ph={20}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>User Details</Text>
        {renderInput('Name', 'name')}
        {renderInput('Email', 'email')}
        <SelectModal
          value={userDetails.gender}
          placeholder="Gender"
          onChange={(value) => updateUser('gender', value)}
          items={GENDERS}
        />
        <SelectModal
          placeholder="Status"
          value={userDetails.status}
          onChange={(value) => updateUser('status', value)}
          items={STATUSES}
        />
        <Button
          loading={props.loading}
          onPress={onPress}
          title={props.btnTitle}
        />
      </View>
    </Container>
  );
};

export default UserDetailsForm;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Fonts.bold(22),
    marginBottom: 20,
  },
  input: {
    width: '88%',
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 10,
    paddingHorizontal: 15,
    ...Fonts.medium(14),
    color: 'black',
  },
});
