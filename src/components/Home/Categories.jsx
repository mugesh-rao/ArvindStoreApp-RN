import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import tailwind from "twrnc";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const CategoryItem = ({ item }) => (
  <TouchableOpacity
    style={tw`
      p-2
      rounded-lg
      bg-white
      mt-1
    `}
  >
    <View style={tw`p-4 flex-1 items-center`}>
      <Image source={{ uri: item.flag }} style={tw`w-20 h-20 rounded-full`} />
      <Text style={tw`text-black mt-2 text-center`}>{item.country}</Text>
    </View>
  </TouchableOpacity>
);

const UniversityItem = ({ item }) => (
  <TouchableOpacity style={tw`p-2 rounded-full bg-white`}>
    <View style={tw`p-4 flex-1 items-center`}>
      <Image source={{ uri: item.logo }} style={tw`w-20 h-20 rounded-full`} />
      <Text style={tw`text-black text-center mt-3`}>{item.university}</Text>
    </View>
  </TouchableOpacity>
);

const Categories = () => {
  const countries = [
    {
      id: "1",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png",
      country: "UK",
    },
    {
      id: "2",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/640px-Flag_of_the_United_States.png",
      country: "USA",
    },
    {
      id: "3",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png",
      country: "Australia",
    },
    {
      id: "4",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Flag_of_Canada.png",
      country: "Canada",
    },
  ];

  const universities = [
    {
      id: "1",
      logo: "https://yleuk.com/wp-content/uploads/2017/11/NCG-logo-twitter.jpg",
      university: "New College\nGroup",
    },
    {
      id: "2",
      logo: "https://yt3.googleusercontent.com/ytc/AGIKgqNU_aYNhU-EKPnZ6Oth6G8C-lVV7jP-PlVDxWWuog=s900-c-k-c0x00ffffff-no-rj",
      university: "Wimbledom",
    },
    {
      id: "3",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle1ZbLd8WH-GJu8jW_y0uuK32CI-GO9I0vq0UC9Unmg&s",
      university: "Conventry\nCollege",
    },
    {
      id: "4",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Madras_University_Seal.svg/1200px-Madras_University_Seal.svg.png",
      university: "University 2",
    },
  ];
  const navigate = useNavigation();

  return (
    <View style={tw`flex-1 p-3 bg-[#F3F4F6]`}>
      <View style={tw`flex flex-row justify-between mb-2 `}>
        <TouchableOpacity
          style={tailwind` mt-7 p-2`}
          onPress={() => navigate.goBack()}
        >
          <Image
            source={require("../../asset/Icons/previous.png")}
            style={tailwind`w-6 h-6 `}
          />
        </TouchableOpacity>
        <Text style={tw`text-black text-xl font-bold mt-8 mb-8`}>
          Categories
        </Text>
        <TouchableOpacity
          style={tailwind`mt-7 p-2`}
          onPress={() => navigate.navigate("Search")}
        >
          <Image
            source={require("../../asset/Icons/magnifying-glass.png")}
            style={tailwind`w-6 h-6`}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row items-center mb-4`}>
        <MaterialCommunityIcons name="trending-up" size={30} color="#ea698b" />
        <Text style={tw`flex-1 text-xl ml-3 font-bold text-black`}>
          Trending Countries
        </Text>
      </View>
      <FlatList
        data={countries}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={tw`flex-row items-center mb-4`}>
        <FontAwesome5 name="fire" size={24} color="#ea698b" />
        <Text style={tw`flex-1 text-xl ml-3 font-bold text-black`}>
          Popular Schools
        </Text>
      </View>
      <FlatList
        data={universities}
        renderItem={({ item }) => <UniversityItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={tw`flex-row items-center mb-4`}>
        <FontAwesome name="line-chart" size={24} color="#ea698b" />
        <Text style={tw`flex-1 text-xl ml-3 font-bold text-black`}>
          Trending Course
        </Text>
      </View>
      <FlatList
        data={universities}
        renderItem={({ item }) => <UniversityItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
