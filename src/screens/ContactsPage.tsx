import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Alert
} from 'react-native';
import { mockUsers } from '../data/mockData';
import { User } from '../services/types/types';

const ContactsPage: React.FC = () => {
  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`).catch(err => {
      Alert.alert('Error', 'Could not open email app');
    });
  };

  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`).catch(err => {
      Alert.alert('Error', 'Could not make phone call');
    });
  };

  const handleEmergencyPress = () => {
    Alert.alert(
      'IT Emergency Support',
      'For critical system outages or security incidents, call our 24/7 emergency line:\n\n📞 (555) 123-EMER (3637)\n\nThis line is monitored 24/7 for urgent IT issues affecting business operations.',
      [
        { text: 'Call Now', onPress: () => Linking.openURL('tel:5551233637') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const renderContactCard = (user: User) => (
    <View key={user.id} style={styles.contactCard}>
      <Image 
        source={{ uri: user.avatar_urls['96'] }} 
        style={styles.avatar}
      />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{user.name}</Text>
        <Text style={styles.contactPosition}>{user.position}</Text>
        <Text style={styles.contactDepartment}>{user.department}</Text>
        
        <View style={styles.expertiseContainer}>
          {user.expertise.slice(0, 3).map((skill, index) => (
            <View key={index} style={styles.skillTag}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.contactDescription}>{user.description}</Text>

        <View style={styles.contactActions}>
          {user.email && (
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={() => handleEmailPress(user.email!)}
            >
              <Text style={styles.contactButtonText}>📧 Email</Text>
            </TouchableOpacity>
          )}
          {user.phone && (
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={() => handlePhonePress(user.phone!)}
            >
              <Text style={styles.contactButtonText}>📞 Call</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Emergency Banner */}
      <TouchableOpacity style={styles.emergencyBanner} onPress={handleEmergencyPress}>
        <Text style={styles.emergencyTitle}>🚨 IT Emergency Support</Text>
        <Text style={styles.emergencyText}>
          24/7 Critical Incident Response - Tap for emergency contact
        </Text>
      </TouchableOpacity>

      {/* IT Leadership Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>IT Leadership</Text>
        <Text style={styles.sectionDescription}>
          Strategic leadership and technology direction
        </Text>
        {mockUsers.filter(user => user.department.includes('Leadership')).map(renderContactCard)}
      </View>

      {/* Cybersecurity Team */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cybersecurity Team</Text>
        <Text style={styles.sectionDescription}>
          Security specialists protecting our digital assets
        </Text>
        {mockUsers.filter(user => user.department.includes('Cybersecurity')).map(renderContactCard)}
      </View>

      {/* Cloud Services Team */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cloud & Infrastructure</Text>
        <Text style={styles.sectionDescription}>
          Cloud architecture and infrastructure management
        </Text>
        {mockUsers.filter(user => user.department.includes('Cloud')).map(renderContactCard)}
      </View>

      {/* Software Development */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Software Engineering</Text>
        <Text style={styles.sectionDescription}>
          Application development and engineering teams
        </Text>
        {mockUsers.filter(user => user.department.includes('Software') || user.department.includes('Development')).map(renderContactCard)}
      </View>

      {/* AI & Data Science */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI & Data Science</Text>
        <Text style={styles.sectionDescription}>
          Artificial intelligence and advanced analytics
        </Text>
        {mockUsers.filter(user => user.department.includes('Artificial Intelligence')).map(renderContactCard)}
      </View>

      {/* IT Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>IT Support & Helpdesk</Text>
        <Text style={styles.sectionDescription}>
          User support and service management
        </Text>
        {mockUsers.filter(user => user.department.includes('Support')).map(renderContactCard)}
      </View>

      {/* General IT Contacts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General IT Contacts</Text>
        <View style={styles.generalContacts}>
          <TouchableOpacity style={styles.generalContactCard}>
            <Text style={styles.generalContactTitle}>🛠️ IT Helpdesk</Text>
            <Text style={styles.generalContactText}>General Support: ext. 4357</Text>
            <Text style={styles.generalContactText}>Email: helpdesk@company.com</Text>
            <Text style={styles.generalContactHours}>Mon-Fri: 7:00 AM - 7:00 PM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.generalContactCard}>
            <Text style={styles.generalContactTitle}>🔒 Security Team</Text>
            <Text style={styles.generalContactText}>Security Issues: ext. 4389</Text>
            <Text style={styles.generalContactText}>Email: security@company.com</Text>
            <Text style={styles.generalContactHours}>24/7 Monitoring</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.generalContactCard}>
            <Text style={styles.generalContactTitle}>☁️ Cloud Support</Text>
            <Text style={styles.generalContactText}>Cloud Issues: ext. 4376</Text>
            <Text style={styles.generalContactText}>Email: cloud-support@company.com</Text>
            <Text style={styles.generalContactHours}>Mon-Fri: 8:00 AM - 6:00 PM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.generalContactCard}>
            <Text style={styles.generalContactTitle}>💻 Development</Text>
            <Text style={styles.generalContactText}>App Support: ext. 4362</Text>
            <Text style={styles.generalContactText}>Email: dev-support@company.com</Text>
            <Text style={styles.generalContactHours}>Mon-Fri: 8:00 AM - 5:00 PM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  emergencyBanner: {
    backgroundColor: '#EF4444',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  emergencyTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  emergencyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.9,
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2,
  },
  contactPosition: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
    marginBottom: 2,
  },
  contactDepartment: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  expertiseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  skillTag: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 4,
  },
  skillText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  contactDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  contactActions: {
    flexDirection: 'row',
  },
  contactButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  generalContacts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  generalContactCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    width: '48%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  generalContactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  generalContactText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  generalContactHours: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
    marginTop: 4,
  },
});

export default ContactsPage;