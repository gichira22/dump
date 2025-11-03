// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export type RootStackParamList = {
//   Home: undefined;
//   PostDetail: { postId: number };
//   CategoryPosts: { categoryId: number; categoryName: string };
//   Bookmarks: undefined;
//   Categories: undefined;
//   Contacts: undefined;
//   Explore: undefined;
//   Menu: undefined;
// };

// // Define the navigation prop type for components
// export type PostCardNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'PostDetail'
// >;
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  PostDetail: { postId: number };
  CategoryPosts: { categoryId: number; categoryName: string };
  Bookmarks: undefined;
  Categories: undefined;
  Contacts: undefined;
  Explore: undefined;
 
};

export type MainTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  CategoriesTab: undefined;
  BookmarksTab: undefined;
};

export type DrawerParamList = {
  MainApp: undefined;
  Contacts: undefined;
  Settings: undefined;
  About: undefined;
};

// Navigation prop types
export type HomeStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type PostCardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PostDetail'
>;
export type PostDetailRouteProp = RouteProp<RootStackParamList, 'PostDetail'>;
export type CategoryPostsRouteProp = RouteProp<RootStackParamList, 'CategoryPosts'>;