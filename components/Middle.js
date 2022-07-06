import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Haptics from 'expo-haptics'
import { Audio } from 'expo-av'

const Middle = () => {
  const [like, setLike] = useState(false)

  const [sound, setSound] = React.useState()
  const [Status, SetStatus] = React.useState(false)

  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/azmale.mp3'),
    )
    setSound(sound)
    SetStatus(true)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function pauseSound() {
    console.log('Pausing Sound')
    const result = await sound.getStatusAsync()

    if (result.isLoaded) {
      if (result.isPlaying === true) {
        sound.pauseAsync()
        SetStatus(false)
      }
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View style={tw`mt-2 ml-2`}>
      <View style={tw`flex flex-row items-center`}>
        <Image
          source={{
            uri:
              'https://i.scdn.co/image/ab6761610000e5eb276369b9195d6f67470fd51a',
          }}
          style={tw`h-16 w-16 rounded-full`}
        />
        <View style={tw`ml-3 text-center items-start`}>
          <Text style={tw`font-light text-sm text-white`}>
            New Release From
          </Text>
          <Text style={tw`text-2xl text-white font-bold`}>Talha Anjum</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#2a2a2a',
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          <Image
            source={{
              uri:
                'https://snooplyrics.com/wp-content/uploads/2022/05/Aazma-Le-Lyrics-Talhah-Yunus-Talha-Anjum-Ft.-Bilal-Ali.jpg',
            }}
            style={{ height: 150, width: 150 }}
          />
        </View>

        <View style={{ marginLeft: 13 }}>
          <View>
            <Text style={tw`font-extrabold text-white text-lg`}>Aazma Le</Text>
          </View>
          <View>
            <Text style={tw`font-semibold text-white text-sm text-gray-400`}>
              Single · Young Stunners,{'\n'}Talha Anjum , Talha Yunus
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (like == true) {
                  setLike(false)
                } else if (like == false) {
                  setLike(true)
                }
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                pauseSound()
              }}
            >
              <Ionicons
                name={like ? 'heart' : 'heart-outline'}
                size={35}
                color={'#FF7276'}
              />
            </TouchableOpacity>
            {!Status ? (
              <TouchableOpacity
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
                  playSound()
                }}
              >
                <Ionicons name="play-circle" size={50} color="#fff" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
                  pauseSound()
                }}
              >
                <Ionicons name="pause-circle" size={50} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

export default Middle

const styles = StyleSheet.create({})
