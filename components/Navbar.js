import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import tw from 'tailwind-react-native-classnames'

const Navbar = () => {
  var today = new Date()
  var curHr = today.getHours()

  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    if (curHr < 12) {
      setGreeting('Good Morning')
    } else if (curHr < 18) {
      setGreeting('Good Afternoon')
    } else {
      setGreeting('Good Evening')
    }
  }, [])

  return (
    <View>
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 22,
              marginLeft: 12,
            }}
          >
            {greeting}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={tw`flex flex-row`}>
            <View
              style={[
                tw`rounded-full h-2 w-2  absolute bottom-5 `,
                { backgroundColor: 'yellow', right: 27 },
              ]}
            />

            <Ionicons
              name="notifications-outline"
              color="white"
              size={30}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="time-outline"
              color="white"
              size={30}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="settings-outline"
              color="white"
              size={30}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
})
