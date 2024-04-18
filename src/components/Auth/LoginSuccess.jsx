import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

const LoginSuccess = () => {
  const navigate = useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center bg-[#F3F4F6] p-6`}>
      <Image
        source={{
          url: "https://cdni.iconscout.com/illustration/premium/thumb/successfully-completed-3833924-3241772.png",
        }}
        style={tw`w-72 h-72 `}
      />

      <Text style={tw`text-3xl font-bold mb-4 text-black `}>Successful</Text>
      <Text style={tw`text-center mb-6 text-black`}>
        Welcome back, [username]! You have successfully logged into your
        account.
      </Text>
      <View style={tw`absolute bottom-0 mb-10 w-full`}>
        <LinearGradient
          colors={["#ea698b", "#d55d92", "#c05299"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={tw`rounded-lg mb-4`}
        >
          <TouchableOpacity
            style={tw`w-full bg-transparent rounded-lg py-4 px-5`}
            onPress={() => navigate.navigate("HomeTab")}
          >
            <Text style={tw`text-black text-center text-lg font-bold`}>
              Dashboard
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={tw`w-full border border-gray-800 bg-gray-800 rounded-lg py-4 px-6 `}
          onPress={() => navigate.navigate("Settings")}
        >
          <Text style={tw`text-[#ea698b] text-lg text-center font-bold`}>
            Account Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSuccess;
