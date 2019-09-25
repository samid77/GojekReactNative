import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
    render() {
        return(
            <View style={styles.cardMenuSection}>
                <View style={styles.firstRowMenu}>
                    <MainFeature title="GO-RIDE" img={require('../../../assets/icon/go-ride.png')}/>
                    <MainFeature title="GO-CAR" img={require('../../../assets/icon/go-car.png')}/>
                    <MainFeature title="GO-BLUEBIRD" img={require('../../../assets/icon/go-bluebird.png')}/>
                    <MainFeature title="GO-SEND" img={require('../../../assets/icon/go-send.png')}/>
                    <MainFeature title="GO-DEALS" img={require('../../../assets/icon/go-deals.png')}/>
                    <MainFeature title="GO-PULSA" img={require('../../../assets/icon/go-pulsa.png')}/>
                    <MainFeature title="GO-FOOD" img={require('../../../assets/icon/go-food.png')}/>
                    <MainFeature title="MORE" img={require('../../../assets/icon/more.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardMenuSection: {
        top: 90,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 18,
    },
    firstRowMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 18,
        flexWrap: 'wrap',
    },
})

export default HomeMainFeature;