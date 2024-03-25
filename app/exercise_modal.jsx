import React from 'react';
import { Modal, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ExerciseModal = ({ exercise, isVisible, onClose }) => {
  if (!exercise) {
    return null; // Render nothing if exercise is null
  }

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View className='flex-1 bg-gray-800 mt-36 mb-16 mr-5 ml-5 p-2 rounded-3xl shadow-2xl shadow-black'>
        <ScrollView>
          <TouchableOpacity onPress={onClose}>
            <Text style={{ fontSize: hp(1.8)}} className = 'm-2 text-gray-300 font-bold'>Close</Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: hp(2.2)}} className = 'text-white font-bold mb-2'>{exercise.name}</Text>
            <Image className = 'w-60 h-60 mb-2 rounded-lg'
              source={{ uri: exercise.gifUrl }}
            />
            <View className='items-start'>
              <Text style={{ fontSize: hp(1.8) }} className = 'text-white font-bold m-2'>Instructions:</Text>
              {exercise.instructions.map((instruction, index) => (
                <View key={index} className = 'flex-row items-start m-2'>
                  <Text style={{ fontSize: hp(1.6) }} className = 'mr-2 text-gray-300'>{index + 1}.</Text>
                  <Text style={{ fontSize: hp(1.6) }} className = 'flex-1 text-gray-300'>{instruction}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
    
  );
};

export default ExerciseModal;
