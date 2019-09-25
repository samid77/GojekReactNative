import React, {Component} from 'react';
import {Image, View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
    render() {
        return(
            <View style={styles.nearbySection}>
          <View style={styles.nearbyLogo}>
            <Image style={styles.nearbyGoFoodLogo} source={require('../../../assets/logo/go-food.png')}/>
          </View>
          <View style={styles.nearbyHeading}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurants</Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
          </View>
          <ScrollView horizontal={true} style={styles.nearbyImages}>
            <ScrollableItem title="KFC" img={require('../../../assets/dummy/go-food-kfc.jpg')}/>
            <ScrollableItem title="Bakmi GM" img={require('../../../assets/dummy/go-food-gm.jpg')}/>
            <ScrollableItem title="Martabak Orins" img={require('../../../assets/dummy/go-food-orins.jpg')}/>
            <ScrollableItem title="Martabak Bangka" img={require('../../../assets/dummy/go-food-banka.jpg')}/>
            <ScrollableItem title="Ayam Bakar Pak Boss" img={require('../../../assets/dummy/go-food-pak-boss.jpg')}/>
          </ScrollView>

          <View style={styles.borderBottom}></View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    nearbyHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    nearbyImages: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 16,
    },
    nearbySection: {},
    nearbyLogo: {
        height: 15,
        width: 60,
        marginLeft: 16,
    },
    nearbyGoFoodLogo: {
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
        flex: 1,
    },
});

export default ScrollableProducts;