import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Touchable,
} from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

const OTPLogin = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  // ... (rest of your functions)

  const handleLogin = () => {
    setModalVisible(true); // Toggle the modal visibility
    // ... (rest of your login logic)
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-[#F3F4F6]`}>
      <Text style={tw`text-black text-3xl mt-18 mb-4`}>Verify Code</Text>
      <Text style={tw`text-[#47126b] text-2xl mt-15 mb-4`}>
        Code sent to given email verify go create the account
      </Text>
      <View style={tw`flex-1 flex-row flex justify-center items-center`}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={tw`w-14 h-14 mx-1 text-center rounded-xl bg-gray-700 border-gray-700 text-black border font-bold focus:outline-none focus:border-yellow-600`}
            maxLength={1}
            value={value}
            keyboardType="numeric"
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyDown(e, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={tw`text-[#ea698b] text-2xl mt-20 mb-20 mb-4`}>
          Resend verification code!
        </Text>
      </TouchableOpacity>

      <View style={tw`pb-20 mt-20 items-center w-full`}>
        <LinearGradient
          colors={["#ea698b", "#d55d92", "#c05299"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={tw`rounded-xl px-16 mb-4`}
        >
          <TouchableOpacity
            style={tw`rounded-xl px-16`}
            onPress={handleLogin} // This triggers the modal to open
          >
            <Text style={tw`text-black text-lg text-center font-bold py-4`}>
              Verify
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* The modal component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View
          style={tw`flex-1 items-center justify-center bg-[#F3F4F6] bg-opacity-60`}
        >
          <View style={tw`w-3/4 bg-gray-900 p-6 rounded-xl`}>
            <Text style={tw`text-black text-2xl text-center mb-4 font-bold`}>
              Congratulations
            </Text>
            <Text style={tw`text-black text-xl text-center mb-4`}>
              Your account is set!
            </Text>
            <Text style={tw`text-gray-400 text-xl text-center mb-6`}>
              Press save to store credentials
            </Text>
            <LinearGradient
              colors={["#ea698b", "#d55d92", "#c05299"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={tw`rounded-xl px-16 mb-4`}
            >
              <TouchableOpacity
                style={tw`rounded-xl px-10`}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("HomeTab");
                }}
              >
                <Text style={tw`text-black text-lg text-center font-bold py-4`}>
                  SAVE
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OTPLogin;
