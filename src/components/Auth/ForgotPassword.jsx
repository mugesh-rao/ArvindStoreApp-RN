import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import tailwind from "twrnc";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

const ForgotPassword = () => {
  const navigate = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#F3F4F6] p-6`}>
      <View style={tw`absolute top-30 flex-1 justify-center items-center `}>
        <Text style={tw`text-3xl font-bold mb-4 text-black `}>
          Forgot Password
        </Text>
        <Text style={tw`text-center mb-6 text-black `}>
          Please enter your email!
        </Text>
      </View>
      <TextInput
        style={tw`bg-gray-100  w-full text-black  border border-[#ea698b] rounded-lg mb-4 px-4 py-3`}
        placeholder="Email"
      />
      <TouchableOpacity onPress={() => navigate.navigate("Login")}>
        <Text style={tw`text-gray-400`}>Back to Login in</Text>
      </TouchableOpacity>
      <LinearGradient
        colors={["#ea698b", "#d55d92", "#c05299"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={tw`rounded-lg mt-10 mb-4`}
      >
        <TouchableOpacity
          style={tw`w-full rounded-lg py-3 px-26`}
          onPress={() => navigate.navigate("VerifyMail")}
        >
          <Text style={tw`text-center text-lg px-4 font-bold text-black`}>
            Send
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ForgotPassword;
