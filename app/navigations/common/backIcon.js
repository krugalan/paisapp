import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

// import backIcon from '../../assets/icons/back.png'

export default ({ navigation }) => (
  <TouchableOpacity onPress={navigation.goBack}>
    {/* <Image source={backIcon} style={styles.icon} /> */}
    <Text>Atras</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 5,
    top: 12,
  },
  icon: {
    width: 30,
    height: 30,
    padding: 10,
    marginLeft: 12,
  },
})
