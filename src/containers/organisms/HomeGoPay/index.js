import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GoPayFeature from '../../../components/molecules/GoPayFeature';

class HomeGoPay extends Component {
    render() {
        return(
            <View style={styles.gopaySection}>
                <View style={styles.gopayBalance}>
                    <Image source={require('../../../assets/icon/gopay.png')}/>
                    <Text style={styles.gopayAmount}>Rp 50,576</Text>
                </View>
                <View style={styles.gopayMenu}>
                    <GoPayFeature title="Pay" img={require('../../../assets/icon/pay.png')}/>
                    <GoPayFeature title="Nearby" img={require('../../../assets/icon/nearby.png')}/>
                    <GoPayFeature title="Top Up" img={require('../../../assets/icon/topup.png')}/>
                    <GoPayFeature title="More" img={require('../../../assets/icon/more.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    gopaySection: {
        top: 70,
        marginHorizontal: 17,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    gopayBalance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2C5FB8',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        padding: 14
    },
    gopayAmount: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    gopayMenu: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 14,
        backgroundColor: '#2F65BD',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },

})

export default HomeGoPay;