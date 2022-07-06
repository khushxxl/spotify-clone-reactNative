import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Album from './Album.js'

const Episodes = () => {
  return (
    <View style={tw`mt-4`}>
      <Text style={tw`text-white text-2xl font-bold ml-2`}>
        Episodes for you
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Album
          title={'Exploring Crypto'}
          subtitle={'The Ranveer Show'}
          img="https://yt3.ggpht.com/4syhBAa6d4sK_J8YxhRFHDyARee3qoR2bUtGMtRDyyVncFn41bSHUDf-FNmvcu3TD2JwowD8sA=s900-c-k-c0x00ffffff-no-rj"
        />
        <Album
          img={
            'http://res.cloudinary.com/daojones/image/upload/v1643946440/nolkpllrqu3uqcnk6a2m.jpg'
          }
          title={'Crypto Tokens'}
          subtitle={'Superteam Podcast'}
        />
        <Album
          title={'Managing Time'}
          subtitle="The Warikoo Podcast"
          img={
            'https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s900-c-k-c0x00ffffff-no-rj'
          }
        />
        <Album
          title={'Exploring Crypto'}
          subtitle={'The Ranveer Show'}
          img="https://yt3.ggpht.com/4syhBAa6d4sK_J8YxhRFHDyARee3qoR2bUtGMtRDyyVncFn41bSHUDf-FNmvcu3TD2JwowD8sA=s900-c-k-c0x00ffffff-no-rj"
        />
        <Album
          img={
            'http://res.cloudinary.com/daojones/image/upload/v1643946440/nolkpllrqu3uqcnk6a2m.jpg'
          }
          title={'Learning About tokens'}
          subtitle={'Superteam Podcast'}
        />
        <Album
          title={'Managing Time'}
          subtitle="The Warikoo Podcast"
          img={
            'https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s900-c-k-c0x00ffffff-no-rj'
          }
        />
      </ScrollView>
    </View>
  )
}

export default Episodes

const styles = StyleSheet.create({})
