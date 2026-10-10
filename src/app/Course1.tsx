import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router'; 

export default function Course1Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
   
        <View style={styles.header}>
          <Text style={styles.headerText}>Our Courses</Text>
        </View>

      
        <Image 
          source={require('@/assets/images/Course1.jpg')} 
          style={styles.heroImage} 
          resizeMode="cover" 
        />

        <View style={styles.coursesBanner}>
          <Text style={styles.bannerText}>Six-Month Course</Text>
        </View>

        <View style={styles.blackSection}>
          
         
          <TouchableOpacity 
            style={styles.blueButton}
            onPress={() => router.push('/C1-Class1')}
          >
            <Text style={styles.buttonText}>canine obedience training</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blueButton}
            onPress={() => router.push('/C1-Class2')}
          >
            <Text style={styles.buttonText}>Pet Grooming</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blueButton}
            onPress={() => router.push('/C1-Class3')}
          >
            <Text style={styles.buttonText}>Animal Behaviour</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blueButton}
            onPress={() => router.push('/C1-Class4')}
          >
            <Text style={styles.buttonText}>Pet Management Business</Text>
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
  },
  heroImage: {
    width: '100%',
    height: 220,
  },
  coursesBanner: {
    backgroundColor: '#E50000', 
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  blackSection: {
    backgroundColor: '#000000', 
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 40,
  },
  blueButton: {
    backgroundColor: '#729FCF',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
