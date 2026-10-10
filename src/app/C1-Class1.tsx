import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Stack } from 'expo-router';

const { width } = Dimensions.get('window');

export default function CoursesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Hide default header to use the custom design */}
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container} bounces={false}>
        
        {/* 1. Header Banner */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Our Courses</Text>
        </View>

        {/* 2. Dog Banner Image */}
        <Image 
           source={require('@/assets/images/MainImage.jpg')} 
          style={styles.bannerImage}
          resizeMode="cover"
        />

        {/* 3. Duration Section */}
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>Six-Month Course</Text>
        </View>

        {/* 4. Main Black Content Wrapper */}
        <View style={styles.contentBody}>
          
          {/* 5. Blue Title Card */}
          <View style={styles.blueCard}>
            <Text style={styles.blueCardTitle}>canine obedience training</Text>
            <Text style={styles.blueCardSubtitle}>Course Fees: R1500</Text>
          </View>

          {/* 6. Main Details Card */}
          <View style={styles.detailsCard}>
            <Text style={styles.bodyTextRegular}>
              <Text style={styles.bodyTextBold}>Purpose:</Text> To teach effective dog obedience and behavioural training techniques.
            </Text>

            <Text style={[styles.bodyTextBold, styles.underline, styles.sectionMargin]}>
              Content
            </Text>

            <Text style={styles.listItem}>Basic commands</Text>
            <Text style={styles.listItem}>Leash training</Text>
            <Text style={styles.listItem}>Behaviour correction</Text>
            <Text style={styles.listItem}>Positive reinforcement</Text>
            <Text style={styles.listItem}>Socialisation techniques</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#cccccc', // Matches top header block background color
  },
  container: {
    flex: 1,
    backgroundColor: '#000000', // Black background for the bottom content area
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
    backgroundColor: '#e60000', // Solid vibrant red
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
    backgroundColor: '#7ea4cb', // Light slate blue color matching image
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
    backgroundColor: '#e9ecef', // Soft off-white / light gray card
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
