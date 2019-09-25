import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ScrollableItem = (props) => {
    return(
        <View style={styles.nearbyRestaurant}>
            <View style={styles.nearbyRestaurantBox}>
            <Image style={styles.nearbyRestaurantImage} source={props.img}/>
            </View>
            <Text style={styles.nearbyRestaurantText}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nearbyRestaurant: {
        marginRight: 16,
    },
    nearbyRestaurantBox: {
        width: 150,
        height: 150,
    },
    nearbyRestaurantImage: {
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 6,
    },
    nearbyRestaurantText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1C1C1C',
    },
})


export default ScrollableItem;