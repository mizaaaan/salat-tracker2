import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';

import HomeScreen from './src/screens/HomeScreen';
import QiblaScreen from './src/screens/QiblaScreen';
import StreakScreen from './src/screens/StreakScreen';
import { Colors } from './src/constants/colors';

// Handle notifications when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon }) => (
  <Text style={{ fontSize: 22 }}>{icon}</Text>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.card,
            borderTopColor: Colors.border,
            borderTopWidth: 1,
            height: 88,
            paddingBottom: 24,
            paddingTop: 10,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.textSecondary,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            letterSpacing: 0.3,
          },
        }}
      >
        <Tab.Screen
          name="Prayer Times"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <TabIcon icon="🕌" color={color} />,
          }}
        />
        <Tab.Screen
          name="Qibla"
          component={QiblaScreen}
          options={{
            tabBarIcon: ({ color }) => <TabIcon icon="🧭" color={color} />,
          }}
        />
        <Tab.Screen
          name="Streak"
          component={StreakScreen}
          options={{
            tabBarIcon: ({ color }) => <TabIcon icon="🔥" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
