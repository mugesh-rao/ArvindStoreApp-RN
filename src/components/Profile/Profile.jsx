import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';


const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigation();
  const handleSave = () => {
    // Handle save functionality
  };

  return (
    <ScrollView style={tw`flex-1 bg-black`}>
      <LinearGradient colors={['#47126b','#973aa8','#ac46a1','#d55d92','#ea698b','#ea6961']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={tw`rounded-b-3xl p-4`}> 
       <View
         style={tw`flex-1 justify-center rounded-b-3xl items-center py-4 px-6`}>
         <TouchableOpacity
           style={tw`absolute top-6 left-0 border border-[#ea698b] bg-black p-3 rounded-full`}
           onPress={() => navigate.goBack()}>
           <Image
             source={require('../../asset/Icons/previous.png')}
             style={tw`w-6 h-6`}
           />
         </TouchableOpacity>
          <View style={tw``}>
           <Image
             source={require('../../asset/profile.png')}
             style={tw`w-26 h-26 border border-black mt-6 rounded-full`}
             />
           </View>
         <Text style={tw`text-lg text-white font-semibold`}>Adhira sri</Text>
         <Text style={tw`text-sm text-white`}>Chennai, Tamil Nadu</Text>
        </View>
      </LinearGradient>

      <View style={tw`px-6 pt-2`}>
        <Text style={tw`text-white mt-4 mb-2 text-base `}>Full Name</Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          style={tw`bg-gray-900 border border-[#973aa8] rounded-lg mb-1`}
        />
        <Text style={tw`text-white mt-2 mb-2 text-base`}>DOB</Text>
        <TextInput
          value={dob}
          onChangeText={setDob}
          style={tw`bg-gray-900 border border-[#973aa8] rounded-lg mb-1`}
        />
        <Text style={tw`text-white mt-2 mb-2 text-base mb-1`}>Gender</Text>
        <View style={tw`flex-row items-center mb-1`}>
          <Checkbox.Android
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
            color="#973aa8"
          />
          <Text style={tw`text-white mr-4`}>Male</Text>
          <Checkbox.Android
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
            color="#973aa8"
          />
          <Text style={tw`text-white text-sm`}>Female</Text>
        </View>
        <Text style={tw`text-white mt-2 mb-2 text-base`}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={tw`bg-gray-900 border border-[#973aa8] rounded-lg mb-1`}
        />
        <Text style={tw`text-white mt-2 mb-2 text-base`}>Mobile Number</Text>
        <TextInput
          value={mobileNumber}
          onChangeText={setMobileNumber}
          style={tw`bg-gray-900 border border-[#973aa8] rounded-lg mb-1`}
        />
        <Text style={tw`text-white mt-2 mb-2 text-base`}>Location</Text>
        <TextInput
          value={location}
          onChangeText={setLocation}
          style={tw`bg-gray-900 border border-[#973aa8] rounded-lg mb-1`}
        />
      </View>
      <View style={tw`flex-1 justify-end items-center mt-6 `}>
      <LinearGradient colors={['#ea698b', '#d55d92', '#c05299']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={tw`rounded-xl px-16 mb-20`}>
        <TouchableOpacity
          style={tw`rounded-xl py-3 px-4`}
          onPress={handleSave}>
          <Text style={tw`text-black text-lg mb-2`}>Save</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Profile;
