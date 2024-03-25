import { View, Text, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import ExerciseModal from '../exercise_modal';

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
        return response.data; //return the response data
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
};
        
export default function Exercise() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
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
    

    // const handleChangeText = (text) => {
    //     setSearchTerm(text); //update search term
    //     if (text.trim() === '') {
    //         //clear search results when the search term is empty
    //         setSearchResults([]);
    //         return;
    //     }
    //     handleSearch(); 
    // }; 

    const handleExerciseSelect = (exercise) => {
        setSelectedExercise(exercise);
        setModalVisible(true);
        };
    
        const handleCloseModal = () => {
        setModalVisible(false);
        };

        
    //onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)}
    //<View key={index}  className = 'flex-row items-center border-b-gray-800 border-b-2'>
    return(
        <View className='bg-gray-900 flex-1'>
            <Text style={{fontSize: hp(3)}} className='text-white font-bold mt-20 ml-5'>Exercises</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: hp(5) }} className = 'm-5 bg-white rounded-xl p-2'>
                <Icon size={hp(2.5)} color={'gray'} name="search-outline"></Icon>
                <TextInput style={{}} className='' placeholder="Search for exercise111" autoCapitalize='none' onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)} returnKeyType="done" />
                
            </View>

            <Text style={{fontSize: hp(1.8)}} className='text-white font-bold ml-5 mb-1'>Search Result:</Text>

            <ScrollView>
                {searchResults.map((result, index) => (
                    <TouchableOpacity key={index} onPress={() => handleExerciseSelect(result)} className = 'flex-row items-center bg-gray-800 rounded-xl m-1'>
                        <Image className = 'w-20 h-20 mr-2 rounded-lg m-2'
                            source={{ uri: result.gifUrl }}
                    
                        />
                        <View className = 'm-2 flex-1'>
                            <Text style={{ fontSize: hp(2), flex: 1, flexWrap: 'wrap'}} className='text-white justify-start font-bold'>{result.name}</Text>
                            <Text style={{ fontSize: hp(1.8), flex: 1, flexWrap: 'wrap'}} className='text-gray-400 align-text-bottom'>{result.bodyPart}</Text>
                            
                        </View>
                        
                    </TouchableOpacity>
                ))}

                <ExerciseModal exercise={selectedExercise} isVisible={modalVisible} onClose={handleCloseModal} />
            </ScrollView>

        </View>
        
        
    );
}