import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import tw from "twrnc";
import FilterOption from "./FilterOption";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform search logic here
    console.log(query);
  };

  const handleBack = () => {
    // Handle back button press
  };

  const handleBookmark = () => {
    // Handle bookmark button press
  };

  const handleToggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleCloseFilter = () => {
    setFilterVisible(false);
  };

  return (
    <View style={tw`flex-1 bg-gray-900`}>
      <View style={tw`bg-purple-600 rounded-b-3xl p-4`}>
        <View style={tw`flex-row items-center justify-between mb-4 pt-4`}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require("../../asset/Icons/previous.png")}
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
          <Text style={tw`text-2xl font-bold text-black`}>Search</Text>
          <TouchableOpacity onPress={handleBookmark}>
            <Image
              source={require("../../asset/Icons/saved.png")}
              style={tw`w-7 h-7`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center mb-4 mx-4 my-6`}>
          <Searchbar
            placeholder="Search"
            icon={() => (
              <Image
                source={require("../../asset/Icons/magnifying-glass.png")}
                style={tw`w-5 h-5`}
              />
            )}
            onChangeText={handleSearch}
            value={searchQuery}
            style={tw`rounded-xl flex-1 bg-gray-700 border border-gray-400 text-black`}
          />
          <TouchableOpacity
            style={tw`ml-2 bg-white p-3 rounded-xl bg-gray-700 border border-gray-400`}
            onPress={handleToggleFilter}
          >
            <Image
              source={require("../../asset/Icons/options.png")}
              style={tw`w-7 h-7`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-gray-500 text-black`}>No results found</Text>
      </View>
      {filterVisible && (
        <FilterOption
          visible={filterVisible}
          onClose={handleCloseFilter}
          header="Filter Options"
          buttonText="Apply Filters"
        />
      )}
    </View>
  );
};

export default SearchScreen;
