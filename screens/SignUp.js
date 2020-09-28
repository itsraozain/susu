import React from 'react';
import { Text, View, Button } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Text>SignUp</Text>
      <Button
        title="signin"
        onPress={() => navigation.navigate('signin')}
      />
    </View>
  );
};

export default SignUp;
