import React from 'react';
import { Text, View, Button } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="signin"
        onPress={() => navigation.navigate('signin')}
      />
    </View>
  );
};

export default Profile;
