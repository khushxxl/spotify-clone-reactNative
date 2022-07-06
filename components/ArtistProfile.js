import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ArtistProfile = ({ name, pic, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
        width: 180,
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: pic,
        }}
        style={{ height: 50, width: 50 }}
      />

      <Text
        style={{
          color: 'white',
          marginLeft: 10,
          fontSize: 14,
          fontWeight: '700',
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default ArtistProfile

const styles = StyleSheet.create({})
