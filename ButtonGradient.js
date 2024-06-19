import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient() {
    return (
      <TouchableOpacity>
            <LinearGradient
                // Button Linear Gradient
                colors={['#9D50BB', '#6E48AA', '#FF007F']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}>
                <Text style={styles.text}>Log In</Text>
            </LinearGradient>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    width: 150,
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
