import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Alert
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const Menu: React.FC<DrawerContentComponentProps> = (props) => {
  const handleFeedback = () => {
    Alert.prompt(
      'Send Feedback',
      'What would you like to tell the IT department?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Send', 
          onPress: (feedback) => {
            if (feedback) {
              Alert.alert('Thank You', 'Your feedback has been submitted to the IT team.');
            }
          }
        },
      ]
    );
  };

  const handleEmergency = () => {
    Alert.alert(
      'IT Emergency',
      'For critical system issues:\n\n📞 Call: (555) 123-EMER\n📧 Email: it-emergency@company.com',
      [
        { text: 'Call Now', onPress: () => Linking.openURL('tel:5551233637') },
        { text: 'Email', onPress: () => Linking.openURL('mailto:it-emergency@company.com') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* Header */}
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200' }}
            style={styles.logo}
          />
          <Text style={styles.departmentName}>IT Department</Text>
          <Text style={styles.departmentTagline}>Technology Solutions & Innovation</Text>
        </View>

        {/* Main Navigation Items */}
        <DrawerItemList {...props} />

        {/* Custom Items */}
        <View style={styles.customSection}>
          <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>
          
          <TouchableOpacity style={styles.customItem} onPress={handleEmergency}>
            <Ionicons name="warning-outline" size={22} color="#EF4444" />
            <Text style={[styles.customItemText, { color: '#EF4444' }]}>
              Emergency Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customItem} onPress={handleFeedback}>
            <Ionicons name="chatbubble-outline" size={22} color="#3B82F6" />
            <Text style={styles.customItemText}>Send Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customItem}>
            <Ionicons name="document-text-outline" size={22} color="#10B981" />
            <Text style={styles.customItemText}>IT Policies</Text>
          </TouchableOpacity>
        </View>

        {/* Department Links */}
        <View style={styles.customSection}>
          <Text style={styles.sectionTitle}>OTHER DEPARTMENTS</Text>
          
          <TouchableOpacity style={styles.customItem}>
            <Ionicons name="business-outline" size={22} color="#6B7280" />
            <Text style={styles.customItemText}>HR Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customItem}>
            <Ionicons name="cash-outline" size={22} color="#6B7280" />
            <Text style={styles.customItemText}>Finance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customItem}>
            <Ionicons name="megaphone-outline" size={22} color="#6B7280" />
            <Text style={styles.customItemText}>Marketing</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>IT Helpdesk: ext. 4357</Text>
        <Text style={styles.footerText}>v2.1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#fff',
  },
  departmentName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  departmentTagline: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
    textAlign: 'center',
  },
  customSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 8,
    marginLeft: 16,
    letterSpacing: 1,
  },
  customItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
  },
  customItemText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
});

export default Menu;