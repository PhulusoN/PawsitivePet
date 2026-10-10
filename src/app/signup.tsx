import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
export default function SignUpScreen() {
  const router = useRouter();
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {

    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    console.log('Registering user:', name, email, password);
  
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

   
      <View style={styles.topSection}>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.subText}>Sign up to get started</Text>
      </View>

  
      <View style={styles.bottomSection}>
        <View style={styles.formContainer}>
          
  
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              placeholderTextColor="#a0b3c6"
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
            />
          </View>

        
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="example@email.com"
              placeholderTextColor="#a0b3c6"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </View>

      
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#a0b3c6"
              secureTextEntry={true} 
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Date Of Birth </Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#a0b3c6"
              autoCapitalize="none"
              autoCorrect={false}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.signUpButton} 
              activeOpacity={0.8}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>


            <TouchableOpacity 
              style={styles.backButton} 
              activeOpacity={0.8}
              onPress={() => router.back()} 
            >
              <Text style={styles.backButtonText}>Go Back</Text>
            </TouchableOpacity>
          </View>

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
    flex: 1.5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900',
  },
  subText: {
    color: '#888888',
    fontSize: 16,
    marginTop: 5,
  },
  bottomSection: {
    flex: 4.5, 
    backgroundColor: '#739bc4',
    borderTopLeftRadius: 40,   
    borderTopRightRadius: 40,  
    paddingTop: 35,
    paddingHorizontal: 40,
  },
  formContainer: {
    width: '100%',
    gap: 16, 
  },
  inputGroup: {
    width: '100%',
    gap: 6,
  },
  inputLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    fontSize: 16,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 10, 
    marginTop: 15,
  },
  signUpButton: {
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
  backButton: {
    width: '85%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
