import React from 'react';
import { Link, Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Alert, TouchableOpacity } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useAuth } from '@/context/AuthContext';

const Layout = () => {
  const { onLogout } = useAuth();
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: Colors.primary,
        headerRight: () => (
          // <Link href={'/'} replace asChild>
          <TouchableOpacity onPress={onLogout}>
            <Ionicons name="log-out-outline" size={24} color={'#fff'} />
          </TouchableOpacity>
          // </Link>
        ),
        headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'My Home Feed',
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="action"
        options={{
          tabBarLabel: 'Action',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="alert-circle-outline" size={size} color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert('Action', 'This is an action tab!');
          },
        })}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
