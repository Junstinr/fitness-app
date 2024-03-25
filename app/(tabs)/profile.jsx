import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
//import { BarChart } from "react-native-gifted-charts";
import {LinearGradient} from 'expo-linear-gradient';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const Profile = () => {
  const data = {
      labels: ["12/24", "12/18", "12/25", "1/11", "1/22", "1/23"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `#ef4444`, // optional
          strokeWidth: 1 // optional
        }
      ],
      legend: ["Workouts History"] // Title
    };

  const chartConfig={
    backgroundGradientFrom: "#1f2937",
    backgroundGradientTo: "#1f2937",
    fillShadowGradientFrom: '#ef4444',
    fillShadowGradientTo: '#ef4444',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ef4444"
    }
  }

  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch("http://localhost/fitness-app/api/profile.php", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);


  return(
      <View className='bg-gray-900 flex-1 p-5'>
          <Text style={{fontSize: hp(3), color: 'white'}} className='font-bold mt-20'>Profile</Text>
          
          <View className='mt-10 bg-gray-800 flex-row justify-between p-4 items-center rounded-lg shadow-sm shadow-gray-950'>
              
              <View className='flex-row'>
                  <TouchableOpacity >
                      <Icon name="person-circle-outline" size={hp(5)} color='white'></Icon>
                  </TouchableOpacity>
                  <View className='ml-4'>
                      <Text style={{fontSize: hp(2)}} className='text-white font-bold'>{username}</Text>
                      <Text style={{fontSize: hp(1.7)}} className='text-white'>13 Workouts</Text>
                  </View>
                  
              </View>
              <TouchableOpacity>
                  <Icon name='chevron-forward-outline' size={hp(3)} color='#ef4444'></Icon>
              </TouchableOpacity>
              
          </View>

          <View className='mt-10 shadow-md shadow-gray-950'>
              <LineChart
              data={data}
              width={wp(90)}
              height={hp(29)}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
              style={{
                  marginVertical: 8,
                  borderRadius: 16
              }}
              />
          </View>
         
      </View>
  );
}



export default Profile;