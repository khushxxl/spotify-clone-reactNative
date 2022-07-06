import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { LinearGradient } from 'expo-linear-gradient'
import Artists from '../components/Artists'
import Middle from '../components/Middle'
import BottomNav from '../components/BottomNav'
import tw from 'tailwind-react-native-classnames'
import Episodes from '../components/Episodes'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-yellow-200`}>
      <ScrollView
        style={{ flex: 1, backgroundColor: 'black' }}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={['#111', '#FF7276']}
          start={{ x: 0, y: 0 }}
          end={{ x: 3.5, y: 0 }}
        >
          <SafeAreaView>
            <Navbar />
          </SafeAreaView>
          <Artists navigation={navigation} />
          <Middle />
          <Episodes />
          <Episodes />

          <View style={{ height: 100 }} />
        </LinearGradient>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 80,
          backgroundColor: '#111',
          right: 0,
        }}
      >
        <BottomNav />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
