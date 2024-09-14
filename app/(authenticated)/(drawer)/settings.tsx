import { View, Text, Button } from 'react-native';
import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';

const Page = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Toggle" onPress={onToggle} />
    </View>
  );
};

export default Page;
