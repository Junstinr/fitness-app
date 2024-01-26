import {View, Text} from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

export default function _layout(){
    return(
        <><Stack
            screenOptions={{
                headerShown: false
            }} />

        </>
    )
        }