import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { id, query } = useLocalSearchParams<{ id: string; query?: string }>();

  return (
    <View>
      <Stack.Screen options={{ title: `List #${id} - Outside` }} />
      <Text>My ID: {id}</Text>
      <Text>My query: {query}</Text>
    </View>
  );
};

export default Page;
