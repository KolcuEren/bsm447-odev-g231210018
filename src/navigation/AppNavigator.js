import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import ListScreen from '../screens/ListScreen';
import SavedScreen from '../screens/SavedScreen';
import DetailScreen from '../screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            route.name === 'Liste'
              ? focused
                ? 'newspaper'
                : 'newspaper-outline'
              : focused
                ? 'bookmark'
                : 'bookmark-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Liste"
        component={ListScreen}
        options={{ title: 'Python Haberleri' }}
      />
      <Tab.Screen
        name="Kaydedilenler"
        component={SavedScreen}
        options={{ title: 'Kaydedilenler' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detay"
        component={DetailScreen}
        options={{ title: 'Haber Detayı' }}
      />
    </Stack.Navigator>
  );
}
