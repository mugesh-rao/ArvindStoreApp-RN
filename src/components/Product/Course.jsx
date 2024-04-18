import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Description = () => {
  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-black font-bold text-xl pb-4 pl-2`}>
        About Company
      </Text>
      <Text style={tw`text-black px-4`}>
        The University of Toronto is a public research university in Toronto,
        Ontario, Canada, located on the grounds that surround Queen's Park. It
        was founded by royal charter in 1827 as King's College, the first
        institution of higher learning in Upper Canada. At vero eos et accusamus
        et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
        deleniti atque corrupti quos dolores et quas. Nor again is there anyone
        who loves or pursues or desires to obtain pain of itself, because it is
        pain.
      </Text>
      <Text style={tw`text-black text-xl pt-4 font-bold pl-2 mb-2`}>
        Rating
      </Text>
      <View style={tw`flex flex-row ml-2 mt-2`}>
        <AntDesign
          name="star"
          size={26}
          color="#ffba08"
          style={tw`mr-2 mr-2`}
        />
        <AntDesign
          name="star"
          size={26}
          color="#ffba08"
          style={tw`mr-2 mr-2`}
        />
        <AntDesign
          name="star"
          size={26}
          color="#ffba08"
          style={tw`mr-2 mr-2`}
        />
        <AntDesign
          name="star"
          size={26}
          color="#ffba08"
          style={tw`mr-2 mr-2`}
        />
        <AntDesign
          name="star"
          size={26}
          color="#ffba08"
          style={tw`mr-2 mr-2`}
        />
      </View>
    </View>
  );
};

const Course = () => {
  const navigation = useNavigation();
  const route = useRoute();


  const [activeSection, setActiveSection] = useState("description");

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderContent = () => {
    if (activeSection === "description") {
      return <Description />;
    } else if (activeSection === "review") {
      return <Review />;
    } else if (activeSection === "cost") {
      return <Cost />;
    }

    return null;
  };


  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 `}>
        <LinearGradient
          colors={[
            "#47126b",
            "#973aa8",
            "#ac46a1",
            "#d55d92",
            "#ea698b",
            "#ea6950",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={tw`p-4`}
        >
          <View style={tw`pb-4 flex`}>
            <View style={tw`flex flex-row justify-between mt-10 ml-6 mr-4`}>
              <TouchableOpacity onPress={handleGoBack}>
                <Octicons
                  name="chevron-left"
                  size={45}
                  color="black"
                  style={tw`mt-1 right-3`}
                />
              </TouchableOpacity>
              <Image
                style={tw`w-23 h-23 ml-4 border border-black mt-6 rounded-full`}
                source={{
                  uri: "https://images.creativemarket.com/0.1.0/ps/1822915/6793/3682/m1/fpnw/wm1/british-flag-.jpg?1477811604&s=392fc272ec4e558e1e9f3b7dea190f2f",
                }}
              />
              <Feather
                name="bookmark"
                size={35}
                color="black"
                style={tw`mt-1 left-3`}
              />
            </View>
            <View style={tw`flex items-center justify-center`}>
              <Text
                style={tw`text-center ml-4 text-lg font-semibold text-black pt-4`}
              >
                {/* {courseName} */}
              </Text>
              <View style={tw`flex  flex-row justify-between pt-4`}>
                <Text style={tw`text-xl ml-2 font-bold text-black`}>1</Text>
                <Text style={tw`text-xl ml-2 font-bold text-black`}>2</Text>
                <Text style={tw`text-xl ml-2 font-bold text-black`}>
                  {" "}
                  {/* {courseName} */}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <ScrollView style={tw`flex-1 bg-[#F3F4F6] `}>
          <View style={tw`p-5`}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={tw`flex flex-row my-5 px-3 `}
            >
              <LinearGradient
                colors={["#ea698b", "#d55d92", "#c05299"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={tw`rounded-xl py-1 mb-2`}
              >
                <TouchableOpacity
                  style={tw`py-2.5 px-4 rounded-lg  mx-2`}
                  onPress={() => setActiveSection("description")}
                >
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={["#ea698b", "#d55d92", "#c05299"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={tw`rounded-xl py-1 mb-2 mx-2`}
              >
                <TouchableOpacity
                  style={tw` py-2.5 px-4 rounded-lg mx-2`}
                  onPress={() => setActiveSection("review")}
                >
                  <Text style={tw`text-black`}>Review</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={["#ea698b", "#d55d92", "#c05299"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={tw`rounded-xl py-1 mb-2`}
              >
                <TouchableOpacity
                  style={tw`mx-2 py-2.5 px-4 rounded-lg mx-2`}
                  onPress={() => setActiveSection("cost")}
                >
                  <Text style={tw`text-black`}>Cost</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ScrollView>

            {renderContent()}
          </View>
        </ScrollView>
      </View>
      <View style={tw`bg-gray-900 bg-opacity-95 flex flex-row items-center`}>
        <View style={tw`p-4`}>
          <LinearGradient
            colors={["#ea698b", "#d55d92", "#c05299"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={tw`rounded-xl left-17`}
          >
            <TouchableOpacity
              style={tw`px-15 py-4 rounded-xl`}
              onPress={() => navigation.navigate("Document")}
            >
              <Text style={tw`text-black font-bold text-base`}>Apply Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Course;
