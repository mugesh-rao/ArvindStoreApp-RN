import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Filter = () => {
  const navigate = useNavigation();
  const handleIconPress = () => {
    console.log("Icon pressed!");
  };

  return (
    <View style={tailwind`flex-1 bg-[#F3F4F6]`}>
      <View style={tailwind`flex-1 justify-center items-center`}>
        <View
          style={tailwind`border border-white mb-5 mt-5 rounded-lg w-96 p-2 flex-row items-center`}
        >
          <Image
            source={require("../../asset/Icons/Flag_of_the_United_Kingdom.png")}
            style={tailwind`w-20 h-20 rounded-full mr-4`}
          />
          <View>
            <Text style={tailwind`text-black text-xl font-bold`}>
              English for Business
            </Text>
            <Text style={tailwind`text-black font-semibold`}>
              [No.] Hours per week
            </Text>
            <Text style={tailwind`text-black font-semibold`}>[No.] Weeks</Text>
          </View>
          <View style={tailwind`flex-1 items-end justify-center`}>
            <TouchableOpacity onPress={handleIconPress}>
              <Ionicons name="heart" size={24} color="#d55d92" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={tailwind`border border-white mb-5 rounded-lg w-96 p-2 flex-row items-center`}
        >
          <Image
            source={require("../../asset/Icons/Flag_of_the_United_Kingdom.png")}
            style={tailwind`w-20 h-20 rounded-full mr-4`}
          />
          <View>
            <Text style={tailwind`text-black text-xl font-bold`}>
              English for Business
            </Text>
            <Text style={tailwind`text-black font-semibold`}>
              [No.] Hours per week
            </Text>
            <Text style={tailwind`text-black font-semibold`}>[No.] Weeks</Text>
          </View>
          <View style={tailwind`flex-1 items-end justify-center`}>
            <TouchableOpacity onPress={handleIconPress}>
              <Ionicons name="heart" size={24} color="#d55d92" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={tailwind`border border-white rounded-lg w-96 p-2 flex-row items-center`}
        >
          <Image
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
            style={tailwind`w-20 h-20 rounded-full mr-4`}
          />
          <View>
            <Text style={tailwind`text-black text-xl font-bold`}>
              English for Business
            </Text>
            <Text style={tailwind`text-black font-semibold`}>
              [No.] Hours per week
            </Text>
            <Text style={tailwind`text-black font-semibold`}>[No.] Weeks</Text>
          </View>
          <View style={tailwind`flex-1 items-end justify-center`}>
            <TouchableOpacity onPress={handleIconPress}>
              <Ionicons name="heart" size={24} color="#d55d92" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={tailwind`items-center mb-5 mt-5`}>
        <LinearGradient
          colors={["#ea698b", "#d55d92", "#c05299"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={tailwind`rounded-xl shadow-lg px-20 py-4.5`}
        >
          <TouchableOpacity
            style={tailwind`bg-transparent items-center justify-center`}
            onPress={() => navigate.navigate("")}
          >
            <Text style={tailwind`text-base font-bold text-black`}>
              View All
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View style={tailwind`flex justify-center items-center`}>
        <Image
          source="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
          style={tailwind`w-180 h-40 mb-4`}
        />
      </View>

      <View style={tailwind`items-center pb-20`}>
        <LinearGradient
          colors={["#ea698b", "#d55d92", "#c05299"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={tailwind`rounded-xl shadow-lg px-20 py-4.5`}
        >
          <TouchableOpacity
            style={tailwind`bg-transparent items-center justify-center`}
            onPress={() => navigate.navigate("Course")}
          >
            <Text style={tailwind`text-base font-bold text-black`}>
              CONTINUE
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Filter;
