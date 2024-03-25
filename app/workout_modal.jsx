import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchWorkout from './search_workout';

const WorkoutModal = ({isVisible, onClose }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedExercises, setSelectedExercises] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
      };
    
    const handleCloseModal = () => {
        setModalVisible(false);
    };

    // const handleSelectExercises = (exercises) => {
    //     setSelectedExercises(exercises);
    //     setShowResult(true);
    //     console.log('Selected Exercises:', selectedExercises);
    // };

    const onFinish = () =>{
        setSelectedExercises([]);
        onClose();
    }

    const handleSelectExercises = (exercises) => {
        const exercisesWithSets = exercises.map(exercise => ({ ...exercise, sets: [] }));
        setSelectedExercises(exercisesWithSets);
        setShowResult(true);
        console.log('Selected Exercises:', exercisesWithSets);
    };
    
    const handleAddSet = (exerciseIndex) => {
        const updatedExercises = [...selectedExercises];
        const newSet = { reps: '' }; 
        updatedExercises[exerciseIndex].sets.push(newSet);
        setSelectedExercises(updatedExercises);
    };
    
    const handleRepsChange = (text, exerciseIndex, setIndex) => {
        const updatedExercises = [...selectedExercises];
        updatedExercises[exerciseIndex].sets[setIndex].reps = text;
        setSelectedExercises(updatedExercises);
    };
    
    
    const handleNameChange = () =>{
        return ""
    }

    return (
        <Modal visible = {isVisible} animationType="slide" transparent={true}>
            <View className='flex-1 bg-gray-800 mt-36 p-2 rounded-3xl shadow-2xl shadow-black'>
                <View className = 'flex-row justify-between p-2'>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={{ fontSize: hp(1.8)}} className = 'm-2 text-gray-300 font-bold'>Close</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onFinish} className = 'bg-green-500 rounded-lg'>
                        <Text style={{fontSize: hp(1.8), width: hp(8)}} className = 'm-2 text-white font-bold text-center'>Finish</Text>
                    </TouchableOpacity>
                </View>
                

                <View  className = 'm-2 bg-gray-800 rounded-xl flex-row '>
                    <TextInput style={{fontSize: hp(2)}} className = 'placeholder-white font-bold mr-3' placeholder="Workout Name" placeholderTextColor="#fff" onChangeText={handleNameChange} returnKeyType="done" />

                    <TouchableOpacity >
                        <Icon name="create-outline" size={25} color={'#ef4444'}/>
                    </TouchableOpacity>
                </View>
                

                <TouchableOpacity className = 'bg-red-500 m-5 p-2 rounded-lg items-center' onPress={() => handleOpenModal()}>
                    <Text className = 'text-white font-bold'>Add Exercises</Text>
                </TouchableOpacity>
                
                <SearchWorkout isVisible={modalVisible} onClose={handleCloseModal} onDone={handleSelectExercises} />

                {showResult && (
                    <View>
                        <ScrollView>
                            {selectedExercises.map((result, index) => (
                                <View key={index} className='m-2'>
                                    <Text style={{ fontSize: hp(2) }} className='text-white font-bold mt-2 mb-2'>{result.name}</Text>
                                    {result.sets.map((set, setIndex) => (
                                        <View key={setIndex} className = 'flex-row justify-between mt-1 mb-1 ml-10 mr-10'>
                                            <View className = ' flex-col justify-between items-center'>
                                                <Text className = 'text-white justify-between font-bold'>Set</Text>
                                                <View className = 'h-6 bg-gray-600 rounded-md w-20 items-center'>
                                                    <Text style={{ fontSize: hp(1.8) }} className='text-white font-bold '>{` ${setIndex + 1} `}</Text>
                                                </View>
                                            </View>
                                            
                                            <View className='flex-col items-center '>
                                                <Text className = 'text-white justify-between font-bold'>Reps</Text>

                                                <TextInput className = 'h-6 p-1 bg-gray-600 w-20 rounded-md text-white text-center'
                                                    placeholderTextColor={'#fff'}

                                                    keyboardType="numeric"
                                                    onChangeText={(text) => handleRepsChange(text, index, setIndex)}
                                                />
                                            </View>
                                            
                                        </View>
                                    ))}
                                    <TouchableOpacity onPress={() => handleAddSet(index)} className='bg-gray-600 mt-2 p-2 rounded-lg items-center'>
                                        <Text className='text-white'>+ Add Set</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                )}

            
            </View>

            


            
        </Modal>
    )
}

export default WorkoutModal;

