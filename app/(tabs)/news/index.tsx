import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Link href="/(tabs)/news/42" asChild>
        <Button title="Go to 42" />
      </Link>
    </View>
  );
};

export default index;
