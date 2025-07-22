import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ActionSectionProps {
  icon: string;
  title: string;
  onPress: () => void;
}

const ActionSection: React.FC<ActionSectionProps> = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.section} onPress={onPress}>
      <Icon name={icon} size={24} color="#FFF" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.48,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
});

export default ActionSection;