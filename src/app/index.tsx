import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

import { useRouter } from 'expo-router';

export default function WelcomeScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('@/assets/images/Logo.png')}
            style={styles.logoImage}
            resizeMode="cover"
          />
        </View>
      </View>

      
      <View style={styles.bottomSection}>
        <View style={styles.buttonContainer}>
          
       
          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

        
          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.buttonText}>sign up</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  topSection: {
    flex: 3,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 260,
    height: 260,
    borderRadius: 130, 
    overflow: 'hidden', 
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#333333',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 2, 
    backgroundColor: '#739bc4',
    borderTopLeftRadius: 40,   
    borderTopRightRadius: 40,  
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20, 
  },
  button: {
    width: '85%',
    backgroundColor: '#00FF00', 
    paddingVertical: 14,
    borderRadius: 4, 
    alignItems: 'center',
    justifyContent: 'center',
   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900', 
    textAlign: 'center',
  },
});
