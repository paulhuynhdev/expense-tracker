import 'react-native-gesture-handler';

import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: '#5363df',
          drawerActiveTintColor: '#fff',
          headerTintColor: '#fff',
          drawerLabelStyle: { marginLeft: -20 },
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: 'Expense Tracker',
            headerTitleAlign: 'center',
            drawerLabel: 'Expenses',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            headerTitle: 'Categories',
            drawerLabel: 'Categories',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            headerTitle: 'Settings',
            drawerLabel: 'Settings',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DrawerLayout;
