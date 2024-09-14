import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack, Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'News feed xx' }} />
    </Stack>
  );
};

export default _layout;
