import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookmarksPage from "@screens/BookmarksPage";
import CategoriesPage from "@screens/CategoriesPage";
import ExplorePage from "@screens/ExplorePage";
import React from "react";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Services") {
            iconName = focused ? "apps" : "apps-outline";
          } else if (route.name === "News") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Contact") {
            iconName = focused ? "people" : "people-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#69a1d8",
        tabBarInactiveTintColor: "#192f45",
      })}
    >
      <Tab.Screen name="Home" component={ExplorePage} />
      <Tab.Screen name="Services" component={CategoriesPage} />
      <Tab.Screen name="News" component={BookmarksPage} />
      {/* <Tab.Screen name="Contact" component={ContactPage} /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;