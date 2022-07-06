import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomNav = () => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 3,
          marginRight: 30,
          marginLeft: 30,
        },
        tw`shadow-2xl`,
      ]}
    >
      <TouchableOpacity>
        <View style={tw`items-center`}>
          <Ionicons name="home" size={25} color="white" />
          <Text style={tw`text-sm text-white font-bold`}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={tw`items-center`}>
          <Ionicons name="search" size={25} color="gray" />
          <Text style={tw`text-sm text-white font-bold`}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={tw`items-center`}>
          <Ionicons name="library" size={25} color="gray" />
          <Text style={tw`text-sm text-white font-bold`}>Library</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({})
