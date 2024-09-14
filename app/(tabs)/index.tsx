import Basic from '@/components/Basic';
import SafeBox from '@/components/SafeBox';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
} from 'react-native';

export default function HomeScreen() {
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    <View style={container}>
      <Text style={text}>{`${height} ${width} ${scale} ${fontScale}`}</Text>
      <Text style={text}>{Platform.OS === 'android' && 'this is android'}</Text>
      <Basic />

      <View style={{ width: width / 2, backgroundColor: 'green' }}>
        <Text>aa</Text>
      </View>
      <SafeBox />
    </View>
  );
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
});

const lists = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);
