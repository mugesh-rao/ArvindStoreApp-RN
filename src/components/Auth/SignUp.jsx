import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Checkbox,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

const SignUp = () => {
  const navigate = useNavigation();

  return (
    <View
      style={tw`flex-1 justify-center items-center bg-white p-6 bg-[#F3F4F6]`}
    >
      <Text style={tw`text-2xl font-bold mb-4 text-black`}>
        Create an Account
      </Text>
      <Text style={tw`text-center mb-6 text-black`}>To get started!</Text>
      <TextInput
        style={tw`bg-white w-full text-black border border-[#ea698b] rounded-lg mb-4 px-4 py-3`}
        placeholder="First Name"
      />
      <TextInput
        style={tw`bg-white w-full text-black border border-[#ea698b] rounded-lg mb-4 px-4 py-3`}
        placeholder="Last Name"
      />

      <TextInput
        style={tw`bg-white w-full text-black border border-[#ea698b] rounded-lg mb-4 px-4 py-3`}
        placeholder="Email"
      />

      <TextInput
        style={tw`bg-white w-full text-black   border border-[#ea698b] rounded-lg mb-4 px-4 py-3`}
        placeholder="Password"
        secureTextEntry
      />
      <View style={tw`flex flex-row justify-between mb-4 w-full items-center`}>
        <View style={tw`flex flex-row items-center`}>
          <View style={tw`w-4 h-4 border border-gray-300 rounded mr-2`} />
          <Text style={tw`text-gray-600`}>Remember me</Text>
        </View>
      </View>
      <LinearGradient
        colors={["#ea698b", "#d55d92", "#c05299"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={tw`rounded-xl mb-2 shadow-lg `}
      >
        <TouchableOpacity
          style={tw`w-full rounded-lg py-3 px-26 `}
          onPress={() => navigate.navigate("OTPLogin")}
        >
          <Text style={tw`text-black text-center text-base font-bold`}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={tw`text-center mb-2`}>Or continue with</Text>
      <View style={tw`flex flex-row justify-center`}>
        <TouchableOpacity
          style={tw`bg-[#c05298]  border-4 rounded-full p-4 mx-2`}
        >
          <Image
            source={require("../../asset/Auth/apple.png")}
            style={tw`w-8 h-8`}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-[#ea698b] border-4 rounded-full p-4 mx-2`}
        >
          <Image
            source={require("../../asset/Auth/google.png")}
            style={tw`w-8 h-8`}
          />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-gray-600 mt-4`}>Sign up</Text>
    </View>
  );
};

export default SignUp;
