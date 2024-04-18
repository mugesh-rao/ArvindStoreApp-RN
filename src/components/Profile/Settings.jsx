import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import tailwind from 'twrnc';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Modals from './Modal';
import {Switch, TextInput} from 'react-native-paper';
import SliderModal from './SliderModal';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Settings = () => {
  const navigate = useNavigation();

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showNotification, setshowNotification] = useState(false);
  const [showAboutus, setshowAboutus] = useState(false);
  const [showtermandcondition, setshowtermandcondition] = useState(false);
  const [showprivacy, setshowprivacy] = useState(false);

  const handleDeleteOption = () => {
    setShowDeleteConfirmation(true);
  };

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };
  const Notification = () => {
    setshowNotification(true);
  };
  const AboutUs = () => {
    setshowAboutus(true);
  };
  const Termandcondition = () => {
    setshowtermandcondition(true);
  };

  const privacy = () => {
    setshowprivacy(true);
  };

  const handleCancel = () => {
    setShowDeleteConfirmation(false);
    setShowChangePassword(false);
    setshowNotification(false);
    setshowAboutus(false);
    setshowtermandcondition(false);
    setshowprivacy(false);
  };
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <ScrollView style={tw`bg-black`}>
      <View style={tw`flex-1 bg-black p-3`}>
        <View style={tw`flex flex-row justify-between mb-4 `}>
          <TouchableOpacity
            style={tailwind`bg-black rounded-full mt-4 p-3`}
            onPress={() => navigate.goBack()}>
            <Image
              source={require('../../asset/Icons/previous.png')}
              style={tailwind`w-6 h-6 `}
            />
          </TouchableOpacity>
          <Text style={tw`text-white mt-6 font-bold text-xl`}>Settings</Text>
          <TouchableOpacity
            style={tailwind` mt-4 p-3`}
            onPress={() => navigate.navigate('Search')}>
            <Image
              source={require('../../asset/Icons/magnifying-glass.png')}
              style={tailwind`w-6 h-6`}
            />
          </TouchableOpacity>
        </View>
        <LinearGradient colors={['#47126b','#973aa8','#ac46a1','#d55d92','#ea698b','#ea6961']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={tw`rounded-xl`}>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center mb-4 py-3 my-2 rounded-xl shadow-xl`}
          onPress={() => navigate.navigate('Profile')}>
          <View style={tailwind`flex flex-row items-center justify-center`}>
            <Image
              source={require('../../asset/profile.png')}
              style={tailwind`w-16 h-16 mr-2 mx-2 border border-black rounded-full`}
            />
            <Text style={tw`text-white font-semibold text-lg`}>Adhira Sri</Text>
          </View>
          <View style={tw`flex flex-row gap-2`}>
            <View style={tw`bg-black border border-[#d55d92] rounded-full p-2 mr-3`}>
              <Image
                source={require('../../asset/Icons/edit-text.png')}
                style={tailwind`w-6 h-6 `}
              />
            </View>
            <View style={tw`bg-black border border-[#d55d92] rounded-full p-3 mr-3`}>
              <Image
                source={require('../../asset/Icons/bottom.png')}
                style={tailwind`w-4 h-4 `}
              />
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
        <Text style={tw`text-[#ea698b] font-bold mt-4 text-lg mb-4`}>Application</Text>

        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center mb-4 py-3 bg-[#2d3142] my-2 rounded-xl shadow-xl `}
          onPress={handleChangePassword}>
          <View style={tailwind`flex flex-row items-center justify-center`}>
          <Feather name="lock" size={27} color="white" style={tailwind` mr-2 mx-2 `}/>
            <Text style={tw`text-white ml-1`}>Change Password</Text>
          </View>
          <View>
            <Image
              source={require('../../asset/Icons/next.png')}
              style={tailwind`w-5 h-5 mr-2 mx-2 `}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center mb-4 py-3 bg-[#2d3142] my-2 rounded-xl`}
          onPress={Notification}>
          <View style={tailwind`flex flex-row items-center justify-center`}>
          <MaterialCommunityIcons name="bell-ring-outline" size={30} color="white" style={tailwind`mr-2 mx-2 `}/>
            <Text style={tw`text-white ml-1`}>Notification</Text>
          </View>
          <View>
            <Image
              source={require('../../asset/Icons/next.png')}
              style={tailwind`w-5 h-5 mr-2 mx-2 `}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center mb-4 py-3 bg-[#2d3142] my-2 rounded-xl`}
          onPress={handleDeleteOption}>
          <View style={tailwind`flex flex-row items-center justify-center`}>
          <MaterialCommunityIcons name="delete-outline" color="white" size={35} style={tailwind` mr-1 mx-1.5 `}/>
            <Text style={tw`text-white ml-1`}>Delete Account</Text>
          </View>
          <View>
            <Image
              source={require('../../asset/Icons/next.png')}
              style={tailwind`w-5 h-5 mr-2 mx-2 `}
            />
          </View>
        </TouchableOpacity>
        <Text style={tw`text-[#ea698b] text-lg font-bold mt-4 mb-4`}>About</Text>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center mb-4 py-3 bg-[#2d3142] my-2 rounded-xl`}
          onPress={privacy}>
          <View style={tailwind`flex flex-row items-center justify-center`}>
          <AntDesign name="Safety" size={35} color="white" style={tailwind` mr-2 mx-1 `}/>
            <Text style={tw`text-white ml-1`}>Privacy</Text>
          </View>
          <View>
            <Image
              source={require('../../asset/Icons/next.png')}
              style={tailwind`w-5 h-5 mr-2 mx-2 `}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center mb-4 py-3 bg-[#2d3142] my-2 rounded-xl`}
          onPress={Termandcondition}>
          <View style={tailwind`flex flex-row items-center justify-center`}>
          <Image
              source={require('../../asset/Icons/insurance.png')}
              style={tailwind`w-8 h-8 mr-2 mx-2`}
            />
          <Text style={tw`text-white`}>Terms & Condition</Text>
          </View>
          <View>
            <Image
              source={require('../../asset/Icons/next.png')}
              style={tailwind`w-5 h-5 mr-2 mx-2 `}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center mb-4 py-3 bg-[#2d3142] my-2 rounded-xl`}
          onPress={AboutUs}>
          <View style={tailwind`flex flex-row items-center justify-center`}>
          <Entypo name="info-with-circle" size={30} color="white" style={tailwind` mr-2 mx-2 `}/>
            <Text style={tw`text-white ml-1`}>About</Text>
          </View>
          <View>
            <Image
              source={require('../../asset/Icons/next.png')}
              style={tailwind`w-5 h-5 mr-2 mx-2 `}
            />
          </View>
        </TouchableOpacity>
        <View style={tw`flex-1 justify-center `}>
        <LinearGradient colors={['#ea698b', '#d55d92', '#c05299']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={tw`rounded-xl mt-3 px-15 mx-15 mb-2`}>
           <TouchableOpacity
            style={tw`flex flex-row justify-center items-center mt-2 my-2 py-2 rounded-xl`}
            onPress={() => navigate.navigate('Login')}
            >
            <Text style={tw`text-white text-base font-bold`}>Log Out</Text>
            <MaterialCommunityIcons name="logout" size={28} color="black" style={tailwind`ml-2 mx-2`}/>
        </TouchableOpacity>
</LinearGradient>

        </View>
      </View>
    
      <View>
        <>
          {showDeleteConfirmation && (
            <Modals visible={showDeleteConfirmation} onClose={handleCancel}>
              <View style={tw`items-center`}>
                <Text style={tw`text-lg font-bold mb-2 text-white`}>
                  Delete Account
                </Text>
                <Text style={tw`text-gray-500 mb-4 text-white`}>
                  Are You Sure to Delete the Account ?
                </Text>
                <TextInput
                  label="Email"
                  underlineColor="#d55d92"
                  style={tailwind`w-full mx-2 my-4`}
                />
              </View>
              <LinearGradient colors={['#973aa8','#d55d92','#d55d92','#973aa8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={tw`rounded-xl px-6 mb-2`}>
              <TouchableOpacity
                style={tw`p-4 rounded-md`}
                onPress={handleCancel}>
                <Text style={tw` text-black text-center`}>Send</Text>
              </TouchableOpacity>
              </LinearGradient>
            </Modals>
          )}
          {showChangePassword && (
            <Modals visible={showChangePassword} onClose={handleCancel}>
              <View style={tw`items-center`}>
                <Text style={tw`text-lg font-bold mb-2 text-white`}>
                  Change Password
                </Text>
                <Text style={tw`text-gray-500 mb-4 text-white`}>
                  Are You Sure to Change the Password ?
                </Text>
                <TextInput
                  label="Email"
                  underlineColor="red"
                  style={tailwind`w-full mx-2 my-4`}
                />
              </View>
              <LinearGradient colors={['#973aa8','#d55d92','#d55d92','#973aa8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={tw`rounded-xl px-4 mb-2`}>
              <TouchableOpacity
                style={tw`p-4 rounded-md`}
                onPress={handleCancel}>
                <Text style={tw` text-black text-center`}>Send</Text>
              </TouchableOpacity>
              </LinearGradient>
            </Modals>
          )}
          {showNotification && (
            <Modals visible={showNotification} onClose={handleCancel}>
              <View style={tw`items-center`}>
                <Text style={tw`text-lg font-bold mb-2 text-white`}>
                  Enable Notification
                </Text>
                <Switch
                  thumbColor="purple"
                  trackColor={{true: 'yellow', false: 'purple'}}
                  value={isSwitchOn}
                  style={{
                    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                  }}
                  onValueChange={onToggleSwitch}
                />
              </View>
            </Modals>
          )}
          {showAboutus && (
            <SliderModal visible={showAboutus} onClose={handleCancel}>
              <View style={tw`flex-1 justify-center items-center`}>
                <View style={tw`flex flex-row mb-6`}>
                  <Image
                    source={require('../../asset/Icons/2star.png')}
                    style={tailwind`w-10 h-10 mr-2 mx-2`}
                  />
                  <Text style={tw`text-white text-2xl`}>About Us</Text>
                </View>
                <Text style={tw`text-gray-200 `}>
                  We are a team of passionate developers who are committed to
                  building great products. We believe that technology can make
                  the world a better place, and we are excited to be a part of
                  that.
                </Text>
                <Text style={tw`text-gray-200 `}>
                  We are always looking for new ways to improve our products,
                  and we value your feedback. If you have any suggestions,
                  please don't hesitate to contact us.
                </Text>
              </View>
            </SliderModal>
          )}
          {showtermandcondition && (
            <SliderModal visible={showtermandcondition} onClose={handleCancel}>
              <View style={tw`flex-1 justify-center items-center`}>
                <View style={tw`flex flex-row mb-6`}>
                  <Image
                    source={require('../../asset/Icons/terms.png')}
                    style={tailwind`w-10 h-10 mr-2 mx-2`}
                  />
                  <Text style={tw`text-white text-2xl`}>Terms & Condition</Text>
                </View>
                <Text style={tw`text-gray-200 `}>
                  We are a team of passionate developers who are committed to
                  building great products. We believe that technology can make
                  the world a better place, and we are excited to be a part of
                  that.
                </Text>
                <Text style={tw`text-gray-200 `}>
                  We are always looking for new ways to improve our products,
                  and we value your feedback. If you have any suggestions,
                  please don't hesitate to contact us.
                </Text>
              </View>
            </SliderModal>
          )}
          {showprivacy && (
            <SliderModal visible={showprivacy} onClose={handleCancel}>
              <View style={tw`flex-1 justify-center items-center`}>
                <View style={tw`flex flex-row mb-6`}>
                  <Image
                    source={require('../../asset/Icons/insurance.png')}
                    style={tailwind`w-10 h-10 mr-2 mx-2`}
                  />
                  <Text style={tw`text-white text-2xl`}>Privacy Policy</Text>
                </View>
                <Text style={tw`text-gray-200 `}>
                  We are a team of passionate developers who are committed to
                  building great products. We believe that technology can make
                  the world a better place, and we are excited to be a part of
                  that.
                </Text>
                <Text style={tw`text-gray-200 `}>
                  We are always looking for new ways to improve our products,
                  and we value your feedback. If you have any suggestions,
                  please don't hesitate to contact us.
                </Text>
              </View>
            </SliderModal>
          )}
        </>
      </View>
      </ScrollView>
  );
};

export default Settings;
