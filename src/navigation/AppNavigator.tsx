// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import CategoryPostsScreen from '../screens/CategoryPostsScreen';
import BookmarksPage from '../screens/BookmarksPage';
import CategoriesPage from '../screens/CategoriesPage';
import ContactsPage from '../screens/ContactsPage';
import ExplorePage from '../screens/ExplorePage';
import Menu from '../screens/Menu';

// Types
import {
  RootStackParamList,
  MainTabParamList,
  DrawerParamList,
} from '../services/types/navigation';

// Typed navigators
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

// Individual stack navigators
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#3B82F6' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'IT Department News' }}
    />
    <Stack.Screen
      name="PostDetail"
      component={PostDetailScreen}
      options={{ title: 'News Detail' }}
    />
    <Stack.Screen
      name="CategoryPosts"
      component={CategoryPostsScreen}
      options={({ route }) => ({
        title: route.params.categoryName || 'Category Posts',
      })}
    />
  </Stack.Navigator>
);

const ExploreStack = () => (
  <Stack.Navigator screenOptions={HomeStack['screenOptions']}>
    <Stack.Screen
      name="Explore"
      component={ExplorePage}
      options={{ title: 'Explore IT News' }}
    />
  </Stack.Navigator>
);

const BookmarksStack = () => (
  <Stack.Navigator screenOptions={HomeStack['screenOptions']}>
    <Stack.Screen
      name="Bookmarks"
      component={BookmarksPage}
      options={{ title: 'Saved Articles' }}
    />
  </Stack.Navigator>
);

const CategoriesStack = () => (
  <Stack.Navigator screenOptions={HomeStack['screenOptions']}>
    <Stack.Screen
      name="Categories"
      component={CategoriesPage}
      options={{ title: 'News Categories' }}
    />
  </Stack.Navigator>
);

// Bottom-tab navigator (contains the stacks)
const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName:
          | 'home'
          | 'home-outline'
          | 'compass'
          | 'compass-outline'
          | 'bookmark'
          | 'bookmark-outline'
          | 'grid'
          | 'grid-outline';

        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'ExploreTab') {
          iconName = focused ? 'compass' : 'compass-outline';
        } else if (route.name === 'BookmarksTab') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else {
          // CategoriesTab
          iconName = focused ? 'grid' : 'grid-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3B82F6',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
    <Tab.Screen name="ExploreTab" component={ExploreStack} options={{ title: 'Explore' }} />
    <Tab.Screen name="CategoriesTab" component={CategoriesStack} options={{ title: 'Categories' }} />
    <Tab.Screen name="BookmarksTab" component={BookmarksStack} options={{ title: 'Saved' }} />
  </Tab.Navigator>
);

// Drawer navigator (wraps the tab navigator)
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainApp"
        drawerContent={props => <Menu {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: '#3B82F6' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerStyle: { backgroundColor: '#fff', width: 280 },
          drawerActiveTintColor: '#3B82F6',
          drawerInactiveTintColor: '#6B7280',
          drawerLabelStyle: { fontSize: 16, fontWeight: '500', marginLeft: -16 },
        }}
      >
        <Drawer.Screen
          name="MainApp"
          component={MainTabNavigator}
          options={{
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contacts"
          component={ContactsPage}
          options={{
            title: 'IT Contacts',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
          }}
        />
        {/* Placeholder screens – replace with real ones later */}
        <Drawer.Screen
          name="Settings"
          component={ExplorePage}
          options={{
            title: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={ExplorePage}
          options={{
            title: 'About IT Dept',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;