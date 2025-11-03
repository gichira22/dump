// // layout/CustomHeader.tsx
// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   ActivityIndicator,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { iconMapping } from '../data/iconMapping';

// const { width } = Dimensions.get('window');

// export type RootStackParamList = {
//   Home: undefined;
//   News: undefined;
//   About: undefined;
//   NewEmployees: undefined;
//   InforCentral: undefined;
//   MyCCI: undefined;
//   Engagements: undefined;
//   Contact: undefined;
//   Canteen: undefined;
//   Profile: undefined;
//   Settings: undefined;
//   Notifications: undefined;
//   HelpSupport: undefined;
//   Logout: undefined;
// };

// interface CustomHeaderProps {
//   title?: string;
// }

// interface MenuItem {
//   id: number;
//   name: string;
//   icon: string; // Option B: flexible string type
//   screen: keyof RootStackParamList;
//   isDestructive?: boolean;
// }

// const CustomHeader: FC<CustomHeaderProps> = ({ title = 'CCI Connect' }) => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const menuItems: MenuItem[] = [
//     { id: 1, name: 'Home', icon: 'home', screen: 'Home' },
//     { id: 2, name: 'News', icon: 'news', screen: 'News' },
//     { id: 3, name: 'About CCI', icon: 'about-cci', screen: 'About' },
//     { id: 4, name: 'New Employees', icon: 'new-employees', screen: 'NewEmployees' },
//     { id: 5, name: 'Infor Central', icon: 'infor-central', screen: 'InforCentral' },
//     { id: 6, name: 'My CCI', icon: 'my-cci', screen: 'MyCCI' },
//     { id: 7, name: 'Engagements', icon: 'engagements', screen: 'Engagements' },
//     { id: 8, name: 'Contact Us', icon: 'contact-us', screen: 'Contact' },
//     { id: 9, name: 'Canteen', icon: 'canteen', screen: 'Canteen' },
//   ];

//   const sideMenuOptions: MenuItem[] = [
//     { id: 1, name: 'Profile', icon: 'my-cci', screen: 'Profile' },
//     { id: 2, name: 'Settings', icon: 'settings', screen: 'Settings' },
//     { id: 3, name: 'Notifications', icon: 'notifications', screen: 'Notifications' },
//     { id: 4, name: 'Help & Support', icon: 'help-circle', screen: 'HelpSupport' },
//     { id: 5, name: 'Logout', icon: 'log-out', screen: 'Logout', isDestructive: true },
//   ];

//   const handleMenuItemPress = (screenName: keyof RootStackParamList) => {
//     if (isMenuOpen) setIsMenuOpen(false);

//     if (screenName === 'Logout') {
//       handleLogout();
//       return;
//     }

//     navigation.navigate(screenName);
//   };

//   const handleLogout = () => {
//     Alert.alert('Logout', 'Are you sure you want to logout?', [
//       { text: 'Cancel', style: 'cancel' },
//       { text: 'Logout', style: 'destructive', onPress: performLogout },
//     ]);
//   };

//   const performLogout = async () => {
//     setIsLoggingOut(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       Alert.alert('Logged Out', 'You have been successfully logged out.');
//     } catch {
//       Alert.alert('Error', 'Failed to logout. Please try again.');
//     } finally {
//       setIsLoggingOut(false);
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Main Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
//           <MaterialIcon name="menu" size={28} color="#000" />
//         </TouchableOpacity>

//         <Text style={styles.title}>{title}</Text>
//         <View style={styles.spacer} />
//       </View>

//       {/* Side Menu Overlay */}
//       {isMenuOpen && (
//         <View style={styles.menuOverlay}>
//           <TouchableOpacity style={styles.menuBackdrop} onPress={toggleMenu} activeOpacity={1} />
//           <View style={[styles.menuPanel, { width: width * 0.75 }]}>
//             <View style={styles.menuHeader}>
//               <Text style={styles.menuTitle}>CCI Connect</Text>
//               <TouchableOpacity onPress={toggleMenu}>
//                 <MaterialIcon name="close" size={28} color="#fff" />
//               </TouchableOpacity>
//             </View>

//             <ScrollView style={styles.menuScrollView}>
//               <View style={styles.menuSection}>
//                 <Text style={styles.sectionTitle}>Quick Access</Text>
//                 {menuItems.map(item => (
//                   <TouchableOpacity
//                     key={item.id}
//                     style={styles.menuOption}
//                     onPress={() => handleMenuItemPress(item.screen)}
//                   >
//                     <MaterialIcon name={iconMapping[item.icon] || 'help'} size={24} color="#4b5563" />
//                     <Text style={styles.menuOptionText}>{item.name}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>

//               <View style={styles.menuSection}>
//                 <Text style={styles.sectionTitle}>Account</Text>
//                 {sideMenuOptions.map(option => (
//                   <TouchableOpacity
//                     key={option.id}
//                     style={styles.menuOption}
//                     onPress={() => handleMenuItemPress(option.screen)}
//                   >
//                     <MaterialIcon
//                       name={iconMapping[option.icon] || 'help'}
//                       size={24}
//                       color={option.isDestructive ? '#ef4444' : '#4b5563'}
//                     />
//                     <Text
//                       style={[
//                         styles.menuOptionText,
//                         option.isDestructive && styles.menuOptionTextDestructive,
//                       ]}
//                     >
//                       {option.name}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       )}

//       {/* Loading Overlay */}
//       {isLoggingOut && (
//         <View style={styles.loadingOverlay}>
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#3b82f6" />
//             <Text style={styles.loadingText}>Logging out...</Text>
//           </View>
//         </View>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//     justifyContent: 'space-between',
//   },
//   menuButton: {
//     padding: 8,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//     flexShrink: 1,
//     textAlign: 'center',
//   },
//   spacer: { width: 32 },
//   menuOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 },
//   menuBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' },
//   menuPanel: { height: '100%', backgroundColor: '#fff' },
//   menuHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#3b82f6' },
//   menuTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
//   menuScrollView: { flex: 1 },
//   menuSection: { marginTop: 16 },
//   sectionTitle: { fontSize: 16, fontWeight: '600', color: '#6b7280', marginLeft: 20, marginBottom: 8 },
//   menuOption: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#f1f1f1' },
//   menuOptionText: { fontSize: 16, fontWeight: '500', color: '#000', marginLeft: 12, flex: 1 },
//   menuOptionTextDestructive: { color: '#ef4444' },
//   loadingOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', zIndex: 1001 },
//   loadingContainer: { backgroundColor: '#fff', padding: 24, borderRadius: 12, alignItems: 'center' },
//   loadingText: { fontSize: 16, fontWeight: '500', marginTop: 12, color: '#000' },
// });

// export default CustomHeader;
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showMenu = true }) => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3B82F6" barStyle="light-content" />
      <View style={styles.content}>
        {showMenu && (
          <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B82F6',
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 56,
  },
  menuButton: {
    padding: 4,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  placeholder: {
    width: 32,
  },
});

export default Header;