import { useNavigation } from "@react-navigation/native";

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import tailwind from "twrnc";
import tw from "twrnc";

import { AntDesign } from "@expo/vector-icons";

import { db } from "../../config/FirebaseConfig";
import { collection, onSnapshot, query } from "firebase/firestore";
const CountryCard = ({ item }) => (
  <View style={tw`mr-4`}>
    <Image source={{ uri: item.flag }} style={tw`w-20 h-20 rounded-full`} />
    <Text style={tw`text-center mt-2 text-black`}>{item.countryName}</Text>
  </View>
);



const ProductCard = ({ id, image, name, size, price }) => {
  // Handle the press event for the plus symbol, you might want to implement some functionality to add items to cart
  const handleAddToCart = () => {
    console.log(`Add product with id ${id} to cart`);
    // Add the functionality to handle add to cart
  };

  return (
    <View style={tw`bg-white m-1 rounded-lg overflow-hidden shadow-lg`}>
      <Image source={{ uri: image }} style={tw`h-40 w-full`} resizeMode="cover" />
      <View style={tw`p-3`}>
        <Text style={tw`font-bold text-lg`}>{name}</Text>
        <Text style={tw`text-gray-600 text-sm`}>{size}</Text>
        <View style={tw`flex-row items-center justify-between pt-2`}>
          <Text style={tw`text-lg font-semibold`}>{price}</Text>
          <TouchableOpacity onPress={handleAddToCart} style={tw`rounded-full bg-gray-200 p-2`}>
            <AntDesign name="plus" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productList = [];
      querySnapshot.forEach((doc) => {
        productList.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productList);
    });

    return () => unsubscribe();
  }, []);



  const categories = [
    {
      id: 1,
      countryName: "USA",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    },
    {
      id: 2,
      countryName: "Italy",
      flag: "https://img.freepik.com/premium-vector/italy-flag-official-colors-vector-illustration_601298-4281.jpg?w=2000",
    },
    {
      id: 3,
      countryName: "Africa",
      flag: "https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg",
    },
    {
      id: 4,
      countryName: "India",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png",
    },
    {
      id: 5,
      countryName: "France",
      flag: "https://img.freepik.com/premium-vector/italy-flag-official-colors-vector-illustration_601298-4281.jpg?w=2000",
    },
    // Add more categories as needed
  ];

  return (
    <ScrollView style={tw`flex-1 bg-[#F3F4F6]`}>
      <View style={tw`bg-[#F3F4F6] p-4`}>
        <View style={tw`flex-row items-center justify-between mb-4`}>
          <View style={tw`flex flex-row`}>
            <Image
              source={require("../../asset/Icons/pin.png")}
              style={tailwind`w-5 h-5 mt-1`}
            />
            <Text style={tw`text-black ml-2 text-lg font-bold`}>
              University
            </Text>
          </View>
          <TouchableOpacity
            style={tw`ml-2`}
            onPress={() => navigates.navigate("Categories")}
          >
            <Text style={tw`text-black`}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={categories}
          renderItem={CountryCard}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`pr-4`}
        />
        <View style={tw`flex flex-row my-4`}>
          <Image
            source={require("../../asset/Icons/Courses.png")}
            style={tailwind`w-5 h-5 mt-1`}
          />
          <Text style={tw`text-black ml-2 text-lg font-bold`}>Top Courses</Text>
        </View>
       
        <FlatList
          keyExtractor={(item) => item._id}
          numColumns={2}
          data={products}
          renderItem={({ item }) => (
            <ProductCard
        name={item.name}
        image={item.imageUrl}
        price={item.basePrice}
              onPress={() => handleCoursePress(item)} // Pass the callback function
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
