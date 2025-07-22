import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from '../components/ActionButton';
import ContactAvatar from '../components/ContactAvatar';
import ActionSection from '../components/ActionSection';

const {width, height} = Dimensions.get('window');

const ContactDetailsScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBack = () => {
    Alert.alert('Back', 'Navigate back to previous screen');
  };

  const handleEdit = () => {
    Alert.alert('Edit', 'Edit contact details');
  };

  const handleSchedule = () => {
    Alert.alert('Schedule', 'Schedule spa appointment with Duane Beeman');
  };

  const handleText = () => {
    Alert.alert('Text', 'Send text message to Duane Beeman');
  };

  const handleCall = () => {
    Alert.alert('Call', 'Call Duane Beeman');
  };

  const handleEmail = () => {
    Alert.alert('Email', 'Send email to Duane Beeman');
  };

  const handlePhotos = () => {
    Alert.alert('Photos', 'View photos');
  };

  const handleNotes = () => {
    Alert.alert('Notes', 'View notes');
  };

  const handleCheckout = () => {
    Alert.alert('Checkout', 'Process spa service checkout');
  };

  const handleMarkAsPaid = () => {
    Alert.alert('Mark as Paid', 'Mark spa appointment as paid');
  };

  const handleDeleteAppointment = () => {
    Alert.alert(
      'Delete Appointment',
      'Are you sure you want to delete this spa appointment?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive'},
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.headerButton}>
          <Icon name="chevron-left" size={28} color="#E91E63" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Details</Text>
        
        <TouchableOpacity onPress={handleEdit} style={styles.headerButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Info */}
      <View style={styles.contactSection}>
        <ContactAvatar initials="DB" />
        <Text style={styles.contactName}>Duane Beeman</Text>
        
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <ActionButton
            icon="event"
            label="Schedule"
            onPress={handleSchedule}
          />
          <ActionButton
            icon="message"
            label="Text"
            onPress={handleText}
          />
          <ActionButton
            icon="phone"
            label="Call"
            onPress={handleCall}
          />
          <ActionButton
            icon="email"
            label="Email"
            onPress={handleEmail}
          />
        </View>

        {/* Page Indicator */}
        <View style={styles.pageIndicator}>
          <View style={[styles.dot, currentPage === 0 && styles.activeDot]} />
          <View style={[styles.dot, currentPage === 1 && styles.activeDot]} />
        </View>
      </View>

      {/* Action Sections */}
      <View style={styles.actionSections}>
        <View style={styles.sectionRow}>
          <ActionSection
            icon="photo-camera"
            title="Photos"
            onPress={handlePhotos}
          />
          <ActionSection
            icon="note"
            title="Notes"
            onPress={handleNotes}
          />
        </View>

        {/* Checkout Button */}
        <TouchableOpacity onPress={handleCheckout} style={styles.checkoutContainer}>
          <LinearGradient
            colors={['#00BCD4', '#E91E63']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Mark as Paid */}
        <TouchableOpacity onPress={handleMarkAsPaid} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Mark as paid</Text>
        </TouchableOpacity>

        {/* Delete Appointment */}
        <TouchableOpacity onPress={handleDeleteAppointment} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Delete appointment</Text>
        </TouchableOpacity>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.servicesTitle}>SERVICES</Text>
        <View style={styles.serviceItem}>
          <View style={styles.serviceDot} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 10,
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#E91E63',
    fontSize: 18,
    fontWeight: '400',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  editText: {
    color: '#E91E63',
    fontSize: 18,
    fontWeight: '400',
  },
  contactSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  contactName: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '300',
    marginTop: 20,
    marginBottom: 40,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFF',
  },
  actionSections: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkoutContainer: {
    marginBottom: 15,
  },
  checkoutButton: {
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '400',
  },
  servicesSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  servicesTitle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2,
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E91E63',
  },
});

export default ContactDetailsScreen;