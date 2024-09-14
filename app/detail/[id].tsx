import { View, Text, Button } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';

const detail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>id is: {id}</Text>
      <Button
        title="update params"
        onPress={() => router.setParams({ id: '999' })}
      />
    </View>
  );
};

export default detail;
