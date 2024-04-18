import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import tailwind from "twrnc";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const navigate = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#F3F4F6] p-6`}>
      <View style={tw`absolute top-30 flex-1 justify-center items-center `}>
        <Text style={tw`text-2xl font-bold mb-4 text-black `}>Welcome</Text>
        <Text style={tw`text-center mb-2 text-black `}>
          Welcome back! Please enter your login credentials below to access your
          account.
        </Text>
      </View>
      <TextInput
        style={tw`bg-gray-100  w-full text-black  border border-[#ea698b] rounded-lg mb-4 px-4 py-3`}
        placeholder="Email"
      />
      <TextInput
        style={tw` text-black bg-gray-100 w-full border border-[#ea698b] rounded-lg mb-4 px-4 py-3`}
        placeholder="Password"
        secureTextEntry
      />
      <View style={tw`flex flex-row justify-between items-center mb-4 w-full`}>
        <View style={tailwind`flex flex-row gap-2 items-center`}>
          <Checkbox
            style={tw`w-4 h-4 rounded `}
            label="Rember Me"
            status="checked"
          />
          <Text style={tw`text-gray-400`}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={() => navigate.navigate("ForgotPassword")}>
          <Text style={tw`text-gray-400`}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#ea698b", "#d55d92", "#c05299"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={tw`rounded-lg mb-4`}
      >
        <TouchableOpacity
          style={tw`w-full rounded-lg py-3 px-26`}
          onPress={() => navigate.navigate("HomeTab")}
        >
          <Text style={tw`text-center text-lg px-4 font-bold text-black`}>
            Login
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={tw`absolute bottom-25 w-full`}>
        <Text style={tw`text-center mb-2 text-black mt-8`}>
          Or continue with
        </Text>
        <View style={tw`flex flex-row justify-center my-3 `}>
          <TouchableOpacity style={tw`bg-[#c05298] rounded-full p-4 mx-2`}>
            <Image
              source={require("../../asset/Auth/apple.png")}
              style={tw`w-8 h-8`}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-[#ea698b] rounded-full p-4 mx-2`}>
            <Image
              source={require("../../asset/Auth/google.png")}
              style={tw`w-8 h-8`}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
