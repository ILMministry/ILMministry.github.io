import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ActionButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color="#FFF" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    color: '#E91E63',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default ActionButton;