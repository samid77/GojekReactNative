import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const GoPayFeature = (props) => {
  return (
    <View style={styles.gopaySubMenu}>
      <Image source={props.img}/>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginTop: 15}}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    gopaySubMenu: {
        flex:1,
        alignItems: 'center',
    },
});

export default GoPayFeature;