import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import WorkoutModal from '../workout_modal'


export default function Workout() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModel = () => {
        setModalVisible(true);
      };
    
      const handleCloseModal = () => {
        setModalVisible(false);
      };


    return(
        <View className='bg-gray-900 flex-1'>
            <Text style={{fontSize: hp(2)}} className='text-white font-bold mt-20 ml-5'>Quick Start</Text>
            <View style={{alignItems: 'center', justifyContent:'center'}}>
                <TouchableOpacity style={{backgroundColor: "#ff4651", width: wp(70)}} className="bg-red-500 rounded-md p-2 mt-5 mb-5" onPress={() => handleOpenModel()} >
                    <Text style={{fontSize: hp(2)}} className='text-white text-center font-bold'>Create a New Template</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View className='flex-row justify-between border-t-4 border-t-gray-800 rounded-md m-2 p-2 items-center'>
                    <Text style={{fontSize: hp(3), color: 'white'}} className='font-bold'>My Templates</Text>
                    <TouchableOpacity className='items-center bg-gray-800 p-1 rounded-md flex-row'> 
                         <Icon name="add-outline" size={20} color={'#ef4444'}/>
                        <Text style={{fontSize: hp(1.8)}} className='text-red-500'>Template</Text>
                    </TouchableOpacity>
                </View>
                

                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}} className=' p-3 gap-3'>
                    <TouchableOpacity style={{height: hp(20), width: wp(45)}} className='bg-gray-800 rounded-2xl p-4 shadow-md shadow-gray-950'>
                        <View className='flex-row justify-between items-center'>
                            <Text style={{fontSize: hp(2)}} className='text-white font-bold'>Leg Day</Text>
                            <TouchableOpacity>
                                <Icon name="create-outline" size={25} color={'#ef4444'}/>
                            </TouchableOpacity>
                        </View>
                        
                        <Text></Text>

                        <Text style={{fontSize: hp(1.7)}} className='text-white'>Seated Leg Press Machine, Seated Leg Curl Machine, Leg Extension Machine ...</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{height: hp(20), width: wp(45)}} className='bg-gray-800 rounded-2xl p-4 shadow-md shadow-gray-950'>
                        <View className='flex-row justify-between items-center'>
                            <Text style={{fontSize: hp(2)}} className='text-white font-bold'>Pull Day</Text>
                            <TouchableOpacity>
                                <Icon name="create-outline" size={25} color={'#ef4444'}/>
                            </TouchableOpacity>
                        </View>
                        
                        <Text></Text>

                        <Text style={{fontSize: hp(1.7)}} className='text-white'>Seated Leg Press Machine, Seated Leg Curl Machine, Leg Extension Machine ...</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{height: hp(20), width: wp(45)}} className='bg-gray-800 rounded-2xl p-4 shadow-md shadow-gray-950'>
                        <View className='flex-row justify-between items-center'>
                            <Text style={{fontSize: hp(2)}} className='text-white font-bold'>Pull Day</Text>
                            <TouchableOpacity>
                                <Icon name="create-outline" size={25} color={'#ef4444'}/>
                            </TouchableOpacity>
                        </View>
                        
                        <Text></Text>

                        <Text style={{fontSize: hp(1.7)}} className='text-white'>Seated Leg Press Machine, Seated Leg Curl Machine, Leg Extension Machine ...</Text>
                    </TouchableOpacity>

                    <WorkoutModal exercise='' isVisible={modalVisible} onClose={handleCloseModal} />

                   
                </View>
            </View>

            
        </View>
    );
}