import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'AdminPassword123';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }

  if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
    router.replace('/main');
  } else {
    Alert.alert('Login Failed', 'Invalid email or password');
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topSection}>
        <Text style={styles.headerText}>Welcome Back</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.formContainer}>
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

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  topSection: { padding: 40, alignItems: 'center' },
  headerText: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  subText: { fontSize: 16, color: '#a0b3c6', marginTop: 8 },
  bottomSection: { flex: 1, paddingHorizontal: 24 },
  formContainer: { marginTop: 20 },
  inputGroup: { marginBottom: 20 },
  inputLabel: { color: '#fff', marginBottom: 8, fontWeight: '600' },
  input: { backgroundColor: '#1e293b', color: '#fff', padding: 14, borderRadius: 8, fontSize: 16 },
  buttonContainer: { marginTop: 10 },
  button: { backgroundColor: '#0284c7', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
