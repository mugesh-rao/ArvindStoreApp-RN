import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const VerifyMail = () => {
  const navigate = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#F3F4F6] p-6`}>
      <Text style={tw`text-4xl font-bold mb-4 text-black`}>
        Check Your Email
      </Text>
      <Image
        source="https://cdni.iconscout.com/illustration/premium/thumb/successfully-completed-3833924-3241772.png"
        style={tw`w-50 h-50 mb-4`}
      />
      <Text style={tw`text-center text-xl mb-6 text-black`}>
        We have sent the reset password to the email address
        mugeshraoego@gmail.com.
      </Text>

      <View>
        <LinearGradient
          colors={["#ea698b", "#d55d92", "#c05299"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={tw`rounded-xl mt-7 mb-10 shadow-lg `}
        >
          <TouchableOpacity
            style={tw`bg-transparent text-black py-4.5 px-20 rounded-xl items-center justify-center`}
          >
            <Text style={tw` text-center font-bold text-black`}>
              Open Your Mail
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View>
        <TouchableOpacity
          style={tw`border border-[#ea698b] rounded-xl py-4.5 px-20 mb-4`}
          onPress={() => navigate.navigate("Login")}
        >
          <Text style={tw`text-[#ea698b] text-center mt-0.2 mb-0.2 font-bold`}>
            Back to Login!
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center mt-5 text-black`}>
        You have not received the email? Resend
      </Text>
    </View>
  );
};

export default VerifyMail;
