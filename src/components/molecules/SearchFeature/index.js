import React from 'react';
import {Image, View, TextInput, StyleSheet} from 'react-native';

const SearchFeature = (props) => {
    return(
        <View style={styles.searchSection}>
            <View style={{position: 'relative', flex: 1}}>
                <TextInput placeholder='What do you want to eat?' style={styles.inputSearch}/>
                <Image style={styles.iconSearch} source={props.searchimg}/>
            </View>
            <View style={styles.promo}>
                <Image source={props.promoimg}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        top: 60,
        marginHorizontal: 17,
        flexDirection: 'row'
    },
    inputSearch: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 25,
        height: 40,
        fontSize: 13,
        paddingLeft: 45,
        paddingRight: 20,
        marginRight: 18,
        backgroundColor: 'white',
    },
    iconSearch: {
        position: 'absolute',
        top: 5,
        left: 12
    },
    promo: {
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default SearchFeature