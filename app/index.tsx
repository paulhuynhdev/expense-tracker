import { View, Text, Button } from 'react-native';
import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

const Page = () => {
  //   const navigation = useNavigation();

  //   const onToggle = () => {
  //     navigation.dispatch(DrawerActions.toggleDrawer());
  //   };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Expense</Text>
      {/* <Button title="Toggle Drawer" onPress={() => onToggle()} /> */}
    </View>
  );
};
export default Page;
