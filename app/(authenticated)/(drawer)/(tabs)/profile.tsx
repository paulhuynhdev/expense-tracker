import { View, Text, Button } from 'react-native';
import React from 'react';

const Page = () => {
  async function fetchHello() {
    const response = await fetch('/hello');
    const data = await response.json();
    alert('Hello ' + data.hello);
  }

  return <Button onPress={() => fetchHello()} title="Fetch hello" />;
};

export default Page;
