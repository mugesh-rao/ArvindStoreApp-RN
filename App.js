import React from "react";
import { Image, StatusBar, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import Onboarding from "./src/components/Home/Onboarding";
import ForgotPassword from "./src/components/Auth/ForgotPassword";
import Dashboard from "./src/components/Home/Dashboard";
import Login from "./src/components/Auth/Login";
import SignUp from "./src/components/Auth/SignUp";
import SearchScreen from "./src/components/Product/Search";
import Course from "./src/components/Product/Course";
import Categories from "./src/components/Home/Categories";
import OTPLogin from "./src/components/Auth/OTPLogin";
import LoginSuccess from "./src/components/Auth/LoginSuccess";
import tailwind from "twrnc";
import CartScreen from "./src/screens/Cart";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Settings from "./src/components/Profile/Settings";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;
    
        if (route.name === "Dashboard") {
          iconName = "home";
        } else if (route.name === "Categories") {
          iconName = "apps";
        } else if (route.name === "Cart") {
          iconName = "cart";
        } else if (route.name === "Settings") {
          iconName = "account";
        }
    
        return (
          <MaterialCommunityIcons name={iconName} size={28} color={color} />
        );
      },
      tabBarActiveTintColor: "red", // Active icon color
      tabBarInactiveTintColor: "gray", // Inactive icon color
      tabBarStyle: tailwind`bg-white w-full border-t border-red-600 py-4 border-gray-200 `,
      tabBarLabelStyle: tailwind`hidden`,
      tabBarShowLabel: false,
    })}
    
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar hidden />
        <Stack.Navigator>
          <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Course"
            component={Course}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTPLogin"
            component={OTPLogin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginSuccess"
            component={LoginSuccess}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
