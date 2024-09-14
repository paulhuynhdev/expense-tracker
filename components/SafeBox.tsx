import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeBox = () => {
  const { bottom, top, right, left } = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: 'green',
        bottom,
        position: 'absolute',
        width: '100%',
        height: 50,
      }}
    >
      <Text>SafeBox</Text>
    </View>
  );
};

export default SafeBox;
