import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Album = ({ img, title, subtitle }) => {
  return (
    <View style={{ marginTop: 10, alignItems: 'flex-start', marginLeft: 10 }}>
      <Image
        source={{
          uri: img,
        }}
        style={{ height: 150, width: 150, borderRadius: 10 }}
      />
      <Text style={tw`font-bold text-white text-sm mt-2`}>{title}</Text>
      <Text style={tw`font-normal text-gray-100 text-xs`}>{subtitle}</Text>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({})
