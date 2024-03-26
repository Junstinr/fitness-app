import { Modal, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter, Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
// const rapidAPIKEY = '223816c35emsh98bca59eda01aaep171e8ejsna0109b6826b8';
const rapidAPIKEY = '768cc6b6e1msh4d4147d73e810f4p1510c3jsnf70c3064de51';

const baseURL = 'https://exercisedb.p.rapidapi.com/exercises/name/';

const apiCall = async (url) => {
    try {
        const options = {
            method: 'GET',
            url,
            params: {limit: '10'},
            headers: {
                'X-RapidAPI-Key': rapidAPIKEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
};

const SearchExercise = ({ isVisible, onClose, onDone }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedExercises, setSelectedExercises] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);


    const handleSearch = async (searchTerm) => {
        console.log("Search Term: ", searchTerm)
        try {
            const lowercaseSearchTerm = searchTerm.toLowerCase();
            
            const data = await apiCall(baseURL + lowercaseSearchTerm);
            setSearchResults(data);
 
        } catch (error) {
            console.error('Error in handleSearch:', error);
        }
    };

    const handleChangeText = (text) => {
        setSearchTerm(text.trim());
        if (text.trim() === '') {
            setSearchResults([]);
            return;
        }
        handleSearch();
    };

    const handleExerciseSelect = (exercise) => {
        const isSelected = selectedExercises.some((selectedExercise) => selectedExercise.id === exercise.id);
        if (isSelected) {
            setSelectedExercises(selectedExercises.filter((selectedExercise) => selectedExercise.id !== exercise.id));
        } else {
            setSelectedExercises([...selectedExercises, exercise]);
        }
    };

    const handleDone = () => {
        onDone(selectedExercises);
        onClose();
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View className='flex-1 bg-gray-800 mt-36 mb-16 mr-5 ml-5 p-2 rounded-3xl shadow-2xl shadow-black'>
                <TouchableOpacity onPress={onClose}>
                    <Text style={{ fontSize: hp(1.8) }} className='m-2 text-gray-300 font-bold'>Close</Text>
                </TouchableOpacity>
    
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: hp(5) }} className='m-5 bg-white rounded-xl p-2'>
                    <Icon size={hp(2.5)} color={'gray'} name="search-outline"></Icon>
                    <TextInput style={{}} className='' placeholder="Search for exercise" autoCapitalize='none' onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)} returnKeyType="done" />
                </View>
    
                <Text style={{ fontSize: hp(1.8) }} className='text-white font-bold ml-5 mb-1'>Search Result:</Text>
    
                <ScrollView>
                    {searchResults.map((result, index) => (
                        <TouchableOpacity key={index} onPress={() => handleExerciseSelect(result)} className='flex-row items-center bg-gray-800 rounded-xl m-1'>
                            <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 5, marginRight: 10, backgroundColor: selectedExercises.includes(result) ? '#ff4651' : '#fff' }} />

                            <Image className='w-20 h-20 mr-2 rounded-lg m-2' source={{ uri: result.gifUrl }} />
                            <View className='m-2 flex-1'>
                                <Text style={{ fontSize: hp(2), flex: 1, flexWrap: 'wrap' }} className='text-white justify-start font-bold'>{result.name}</Text>
                                <Text style={{ fontSize: hp(1.8), flex: 1, flexWrap: 'wrap' }} className='text-gray-400 align-text-bottom'>{result.bodyPart}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
    
                <TouchableOpacity onPress={handleDone} className='bg-green-500 m-5 p-2 rounded-lg items-center'>
                    <Text className='text-white font-bold'>Done</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );

};

export default SearchExercise;
