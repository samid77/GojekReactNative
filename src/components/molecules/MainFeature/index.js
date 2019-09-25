import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const MainFeature = (props) => {
    return(
        <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
            <View style={styles.cardMenu}>
                <Image style={styles.cardMenuIcon} source={props.img}/>
            </View>
            <Text style={styles.cardMenuTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardMenu: {
        width: 58,
        height: 58,
        borderWidth:1,
        borderColor: '#EFEFEF',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardMenuTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
        color: '#1C1C1C'
    },
    cardMenuIcon: {},
});

export default MainFeature;