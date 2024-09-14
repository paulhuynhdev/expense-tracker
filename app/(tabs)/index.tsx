import { StyleSheet, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/profile" asChild>
        <Button title="Go to profile" />
      </Link>

      <Link href="/feed" asChild>
        <Button title="Go to feed" />
      </Link>

      <Link href="/detail/42" asChild>
        <Button title="Go Detail 42" />
      </Link>

      <Link href="/detail/1337" asChild>
        <Button title="Go Detail 1337" />
      </Link>

      <Link href="/drawer" asChild replace>
        <Button title="Go Drawer" />
      </Link>

      <Link href="/(tabs)/explore" asChild>
        <Button title="Go To Tab" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
