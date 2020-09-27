import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="Signup"
        onPress={() => navigation.navigate('signup')}
      />
      <TouchableOpacity
        style={{
          width: Dimensions.get('window').width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('signup')}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: 'black',
            height: 30,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
        >
          <Text>SignUp</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
