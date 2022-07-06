import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
        }}
        style={{ height: 70, width: 70 }}
      />

      <Text
        style={{
          color: 'white',
          fontSize: 30,
          marginTop: 30,
          fontWeight: '800',
          textAlign: 'center',
        }}
      >
        Millions of songs,{'\n'} Free on Spotify.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          width: 300,
          backgroundColor: '#90ee90',
          padding: 14,
          marginTop: 15,
          borderRadius: 20,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '700' }}>Sign up free</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 300,
          borderColor: '#fff',
          padding: 10,
          borderWidth: 1,
          marginTop: 15,
          borderRadius: 20,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Ionicons name="phone-portrait" color="#fff" size={24} />
        <Text style={{ fontWeight: '700', color: '#fff', marginLeft: 20 }}>
          Continue with phone number
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 300,
          borderColor: '#fff',
          padding: 10,
          borderWidth: 1,
          marginTop: 15,
          borderRadius: 20,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Image
          source={{
            uri:
              'https://cdn-icons.flaticon.com/png/512/720/premium/720255.png?token=exp=1653838538~hmac=c2fa25b48a61709ecfaabd164a3ef884',
          }}
          style={{ height: 25, width: 25 }}
        />
        <Text style={{ fontWeight: '700', color: '#fff', marginLeft: 50 }}>
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white', marginTop: 20, fontWeight: 'bold' }}>
          Log in
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
