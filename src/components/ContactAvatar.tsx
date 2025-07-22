import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ContactAvatarProps {
  initials: string;
  size?: number;
}

const ContactAvatar: React.FC<ContactAvatarProps> = ({initials, size = 120}) => {
  return (
    <View style={[styles.avatar, {width: size, height: size, borderRadius: size / 2}]}>
      <Text style={[styles.initials, {fontSize: size * 0.4}]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: '#FFF',
    fontWeight: '300',
  },
});

export default ContactAvatar;