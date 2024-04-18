import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

const SignOrLog = () => {
  const navigate = useNavigation();

  return (
    <View style={tw`flex-1 `}>
      {/* Top half with bg-[#F3F4F6] */}
      <View style={tw`flex-1 items-center justify-center bg-[#F3F4F6] p-6`}>
        <Text style={tw`text-5xl mt-1 font-bold mb-4 text-black`}>Login</Text>
        <Text style={tw`text-2xl text-center mt-10 mb-6 text-black`}>
          to learn english abroad!
        </Text>
        <LinearGradient
          colors={["#ea698b", "#d55d92", "#c05299"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={tw`rounded-lg mb-4 `}
        >
          <TouchableOpacity
            style={tw`w-full bg-transparent rounded-xl py-4 px-20`}
            onPress={() => navigate.navigate("Login")}
          >
            <Text style={tw`text-black text-center text-lg font-bold`}>
              Log In
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Bottom half with bg-[#47126b] */}
      <View style={tw`flex-1 items-center justify-center bg-[#47126b] p-6`}>
        <Text style={tw`text-5xl mt-1 font-bold mb-4 text-black`}>
          Create an Account
        </Text>
        <Text style={tw`text-2xl text-center mt-10 mb-1 text-black`}>
          Sign up
        </Text>
        <Text style={tw`text-2xl text-center mb-10 text-black`}>
          If you still don't have an Account
        </Text>

        <TouchableOpacity
          style={tw`border border-gray-800 bg-[#F3F4F6] rounded-xl py-4 px-20 `}
          onPress={() => navigate.navigate("SignUp")}
        >
          <Text style={tw`text-[#ea698b] text-lg text-center font-bold`}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignOrLog;
