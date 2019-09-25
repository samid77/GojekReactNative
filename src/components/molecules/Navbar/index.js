import React from 'react';
import {Image, View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

const Navbar = (props) => {
    return (
        <View style={styles.nav}>
          <Image style={styles.icon} source={props.img}></Image>
          <Text style={{fontSize:10, marginTop: 4, color: props.active? '#43AB4A' : '#545454'}}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 26,
        height: 26,
    },
})

export default Navbar;