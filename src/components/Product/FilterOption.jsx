import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { TextInput, Button, Menu, Divider } from "react-native-paper";
import tw from "twrnc";

const FilterOption = ({ visible, onClose, header, headertext, buttonText }) => {
  const [slideAnimation] = useState(new Animated.Value(0));
  const [price, setPrice] = useState(0);
  const [weekDuration, setWeekDuration] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      slideIn();
    }
  }, [visible]);

  const slideIn = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose(); // Call onClose callback after animation completes
    });
  };

  const slideTransform = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [400, 0],
        }),
      },
    ],
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleWeekDurationSelect = (duration) => {
    setWeekDuration(duration);
    setMenuVisible(false);
  };

  return (
    <Animated.View
      style={[
        tw`absolute bottom-0 left-0 right-0 bg-gray-900 p-4 rounded-t-3xl border-[#FAFF07] border mx-1`,
        slideTransform,
      ]}
    >
      <View style={tw`items-center`}>
        <Text style={tw`text-lg font-bold mb-2 text-black`}>{header}</Text>
        <Text style={tw`text-black`}>Price: ${price}</Text>

        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
              style={tw`bg-white py-3 rounded-xl mt-2 w-full`}
            >
              <Text style={tw`text-black px-4`}>
                {weekDuration ? weekDuration : "Select Week Duration"}
              </Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => handleWeekDurationSelect("1 week")}
            title="1 week"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("2 weeks")}
            title="2 weeks"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("3 weeks")}
            title="3 weeks"
          />
        </Menu>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
              style={tw`bg-white py-3 rounded-xl mt-2 w-full`}
            >
              <Text style={tw`text-black px-4`}>
                {weekDuration ? weekDuration : "Select Week Duration"}
              </Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => handleWeekDurationSelect("1 week")}
            title="1 week"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("2 weeks")}
            title="2 weeks"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("3 weeks")}
            title="3 weeks"
          />
        </Menu>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
              style={tw`bg-white py-3 rounded-xl mt-2 w-full`}
            >
              <Text style={tw`text-black px-4`}>
                {weekDuration ? weekDuration : "Select Week Duration"}
              </Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => handleWeekDurationSelect("1 week")}
            title="1 week"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("2 weeks")}
            title="2 weeks"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("3 weeks")}
            title="3 weeks"
          />
        </Menu>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
              style={tw`bg-white py-3 rounded-xl mt-2 w-full`}
            >
              <Text style={tw`text-black px-4`}>
                {weekDuration ? weekDuration : "Select Week Duration"}
              </Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => handleWeekDurationSelect("1 week")}
            title="1 week"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("2 weeks")}
            title="2 weeks"
          />
          <Menu.Item
            onPress={() => handleWeekDurationSelect("3 weeks")}
            title="3 weeks"
          />
        </Menu>
        <TouchableOpacity
          onPress={slideOut}
          style={tw`w-full mt-4 bg-yellow-400 py-3 rounded-xl`}
        >
          <Text style={tw`text-center font-bold text-black`}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default FilterOption;
