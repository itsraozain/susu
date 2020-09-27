import React from 'react';
import { Text, View, Button } from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="Signup"
        onPress={() => navigation.navigate('signup')}
      />
    </View>
  );
};

export default SignIn;
