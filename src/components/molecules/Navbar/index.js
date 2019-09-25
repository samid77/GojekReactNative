import React, {Component} from 'react';
import {Image, View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import NavbarDetail from '../../../containers/organisms/NavbarDetail';

class Navbar extends Component {
    render(){
        return(
            <View style={styles.container2}>
                <NavbarDetail img={require('../../../assets/icon/home-active.png')} title="Home" active/>
                <NavbarDetail img={require('../../../assets/icon/order.png')} title="Order"/>
                <NavbarDetail img={require('../../../assets/icon/help.png')} title="Help"/>
                <NavbarDetail img={require('../../../assets/icon/inbox.png')} title="Inbox"/>
                <NavbarDetail img={require('../../../assets/icon/account.png')} title="Account"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container2: {
        height: 70,
        flexDirection: 'row'
    },
    nav: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Navbar;