import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Icon from 'react-native-vector-icons/Ionicons';

export default function _layout() {
    return(
        <Tabs>
            <Tabs.Screen name='profile' options={{
                headerTitle: 'Profile',
                tabBarLabel: 'Profile',
                tabBarIcon: () => <Icon name="person" size={30} />
            }} />

            <Tabs.Screen name='workout' options={{
                headerTitle: 'Workout',
                tabBarLabel: 'Workout',
                tabBarIcon: () => <Icon name="barbell" size={30} />
            }} />

            <Tabs.Screen name='exercises' options={{
                headerTitle: 'Exercises',
                tabBarLabel: 'Exercises',
                tabBarIcon: () => <Icon name="list" size={30} />
            }} />
        </Tabs>
    )
}