import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router'; // 1. Import the router

export default function HomeScreen() {
  const router = useRouter(); // 2. Initialize the router

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to Pawsitive Academy</Text>
        </View>

        <Image source={require('@/assets/images/MainImage.jpg')} style={styles.heroImage} resizeMode="cover" />

        <View style={styles.coursesBanner}>
          <Text style={styles.bannerText}>Courses</Text>
        </View>

        <View style={styles.blackSection}>
          <Image source={require('@/assets/images/Course1.jpg')} style={styles.courseImage} resizeMode="cover" />
          
          {/* 3. Add onPress to navigate to the 'Course1' file */}
          <TouchableOpacity 
            style={[styles.button, styles.blueButton]}
            onPress={() => router.push('/Course1')}
          >
            <Text style={styles.buttonText}>SIX-Month Course</Text>
          </TouchableOpacity>

          <Image source={require('@/assets/images/Course2.jpg')} style={styles.courseImage} resizeMode="cover" />
          <TouchableOpacity style={[styles.button, styles.greenButton]}
             onPress={() => router.push('/Course2')}
             >
            <Text style={styles.buttonText}>SIX-Weeks Course</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  heroImage: {
    width: '100%',
    height: 220,
  },
  coursesBanner: {
    backgroundColor: '#E50000',
    paddingVertical: 12,
    alignItems: 'center',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  blackSection: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  courseImage: {
    width: '100%',
    height: 120,
    marginTop: 15,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
  },
  blueButton: {
    backgroundColor: '#729FCF',
  },
  greenButton: {
    backgroundColor: '#4E9A06',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
