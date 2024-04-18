import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Simulating a delay of 4 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("Onboarding2");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigation]);

  const handleGetStarted = () => {
    setIsLoading(true);
  };

  return (
    <View style={tailwind`flex-1 items-center justify-between bg-[#47126b]`}>
      <View
        style={tailwind`flex items-center justify-center mt-16 rounded-2xl bg-opacity-10`}
      >
        <Image
          source={require("../../asset/Onboardings.png")}
          style={tailwind`w-92 h-92 right-1 `}
        />
      </View>
      <View style={tailwind`px-4`}>
        <Text style={tailwind`text-3xl font-bold text-black text-center mb-4`}>
          Explore Term Time
        </Text>
        <Text style={tailwind`text-sm text-black text-center `}>
          We're excited to have you on board. Our app is designed to provide you
          with a seamless and personalized experience. Let's get started!
        </Text>
      </View>
      <View>
        <LinearGradient
          colors={["#ea698b", "#d55d92", "#c05299"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={tailwind`rounded-xl mb-20 shadow-lg `}
        >
          <TouchableOpacity
            style={tailwind`bg-transparent text-black py-4.5 px-20 rounded-xl items-center justify-center`}
            onPress={handleGetStarted}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Text style={tailwind`text-base font-bold`}>Get Started</Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Onboarding;
