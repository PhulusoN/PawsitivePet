import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Stack } from 'expo-router';

const { width } = Dimensions.get('window');

export default function CoursesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
  
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container} bounces={false}>
        

        <View style={styles.header}>
          <Text style={styles.headerText}>Our Courses</Text>
        </View>

        <Image 
            source={require('@/assets/images/MainImage.jpg')} 
          style={styles.bannerImage}
          resizeMode="cover"
        />

        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>Six-Month Course</Text>
        </View>


        <View style={styles.contentBody}>
  
          <View style={styles.blueCard}>
            <Text style={styles.blueCardTitle}>Pet Grooming</Text>
            <Text style={styles.blueCardSubtitle}>Course Fees: R1500</Text>
          </View>

          <View style={styles.detailsCard}>
            <Text style={styles.bodyTextRegular}>
              <Text style={styles.bodyTextBold}>Purpose:</Text> To teach effective pet grooming techniques and care.
            </Text>

            <Text style={[styles.bodyTextBold, styles.underline, styles.sectionMargin]}>
              Content
            </Text>

            <Text style={styles.listItem}>Coat care</Text>
            <Text style={styles.listItem}>Bathing techniques</Text>
            <Text style={styles.listItem}>Nail trimming</Text>
            <Text style={styles.listItem}>Ear  and eye cleaning</Text>
            <Text style={styles.listItem}>Grooming Equipment</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#cccccc', 
  },
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  header: {
    backgroundColor: '#cccccc',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  bannerImage: {
    width: width,
    height: 220,
  },
  durationBadge: {
    backgroundColor: '#e60000', 
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  contentBody: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 40,
    alignItems: 'center',
  },
  blueCard: {
    backgroundColor: '#7ea4cb', 
    width: '100%',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#628bb3',
  },
  blueCardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  blueCardSubtitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
    textAlign: 'center',
  },
  detailsCard: {
    backgroundColor: '#e9ecef', 
    width: '100%',
    borderRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  bodyTextRegular: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 20,
  },
  bodyTextBold: {
    fontWeight: '800',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  sectionMargin: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 15,
  },
  listItem: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 6,
  },
});
