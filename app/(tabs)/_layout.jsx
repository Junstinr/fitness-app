import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ff4651',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#1f2937',
          borderTopWidth: 0,
          borderRadius: 10,
          height: 90,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', width: wp(20), justifyContent: 'center', top: 10}}>
              <Icon name="person" size={25} color={color} />
              <Text style={{ color: color }}>Profile</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="workout"
        options={{
          headerTitle: 'Start Workout',
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', width: wp(20), justifyContent: 'center', top: 10}}>
              <Icon name="barbell" size={30} color={color} />
              <Text style={{ color: color }}>Workout</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="exercises"
        options={{
          headerTitle: 'Exercises',
          tabBarLabel: 'Exercises',
          
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', width: wp(20), justifyContent: 'center', top: 10}}>
              <Icon name="list" size={25} color={color} />
              <Text style={{ color: color }}>Exercises</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
