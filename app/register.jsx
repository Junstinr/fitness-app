import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Animated,{ FadeInUp, FadeInDown, BounceOut } from 'react-native-reanimated';

export default function Register() {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //function to insert a new record (user registration)
  const insertRecord = () => {
    if (username.length === 0 || password.length === 0) {
      alert("Required field is missing!");
    } 
    else {
      var insertAPIURL = "http://localhost/fitness-app/api/register.php";
      var headers = {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      };
      var Data={
        username: username,
        password: password
      };

      //use the fetch API to make a POST request to the registration API
      fetch(insertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      }) 
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === "success"){
          router.push('')
        }
      })
      .catch(error => console.error('Error:', error));

    }
  };

  return (
    <View className="bg-gray-900 flex-1 items-center justify-center">
      <View style={{ borderRadius: Math.min(hp(10.5), wp(23)) / 2, overflow: 'hidden' }}>
        <Animated.Image entering={FadeInUp.delay(100).duration(100).springify()} style={{aspectRatio: 1, height: hp(10.5), width: wp(23)}} className=" mb-5" source={require('../assets/images/logo.png')} />
      </View>

      <Animated.Text entering={FadeInUp.delay(200).duration(200).springify()}  style={{fontSize: hp(3)}} className="text-white font-bold"> SIGN UP </Animated.Text>
      <Animated.Text entering={FadeInUp.delay(200).duration(200).springify()}  style={{fontSize: hp(2)}} className="text-white mb-20"> FOR YOUR ACCOUNT</Animated.Text>
    
    <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()}>
    <TextInput style={{width: wp(50)}} className="bg-white rounded-md p-2 mb-2"
        placeholder={"Username"}
        keyboardType={"default"} 
        onChangeText={(username) => setUsername(username)}
      />
    </Animated.View>
      
        
    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()}>
        <TextInput style={{width: wp(50)}} className="bg-white rounded-md p-2 mb-2"
            placeholder={"Password"}
            keyboardType={"default"} 
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
        />
    </Animated.View>

    <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()} exiting={BounceOut.springify()}>
        <TouchableOpacity style={{backgroundColor: "#ff4651"}} className="bg-red-500 rounded-md mb-20" onPress={insertRecord}>
            <Text style={{fontSize: hp(2), width: wp(50)}} className="font-bold text-white p-2 text-center">SIGN UP</Text>
        </TouchableOpacity>
    </Animated.View>
      

      <Animated.View entering={FadeInDown.delay(1000).duration(1000).springify()} exiting={BounceOut.springify()}>
        <Text className="text-white mb-2">Already have an account?</Text>
        <TouchableOpacity onPress={()=>router.push('')}>
          <Text style={{fontSize: hp(1.8), color: "#ff4651"}} className="text-red-500 font-bold text-center">Login</Text>
        </TouchableOpacity>
      </Animated.View>

    </View>
    
    
  
  );
}
