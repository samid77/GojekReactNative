/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Navbar from './src/components/molecules/Navbar';
import GoPayFeature from './src/components/molecules/GoPayFeature';
import MainFeature from './src/components/molecules/MainFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNewsFeature from './src/components/molecules/GoNewsFeature';
import GoFoodBannerFeature from './src/components/molecules/GoFoodBannerFeature';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';

const App = () => {
  return(
    <View style={styles.container}>
      <ScrollView style={styles.container1}>
        <SearchFeature searchimg={require('./src/assets/icon/search.png')} promoimg={require('./src/assets/icon/promo.png')}/>
        <View style={styles.gopaySection}>
          <View style={styles.gopayBalance}>
            <Image source={require('./src/assets/icon/gopay.png')}/>
            <Text style={styles.gopayAmount}>Rp 50,576</Text>
          </View>
          <View style={styles.gopayMenu}>
            <GoPayFeature title="Pay" img={require('./src/assets/icon/pay.png')}/>
            <GoPayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')}/>
            <GoPayFeature title="Top Up" img={require('./src/assets/icon/topup.png')}/>
            <GoPayFeature title="More" img={require('./src/assets/icon/more.png')}/>
          </View>
        </View>
        <View style={styles.cardMenuSection}>
          <View style={styles.firstRowMenu}>
            <MainFeature title="GO-RIDE" img={require('./src/assets/icon/go-ride.png')}/>
            <MainFeature title="GO-CAR" img={require('./src/assets/icon/go-car.png')}/>
            <MainFeature title="GO-BLUEBIRD" img={require('./src/assets/icon/go-bluebird.png')}/>
            <MainFeature title="GO-SEND" img={require('./src/assets/icon/go-send.png')}/>
            <MainFeature title="GO-DEALS" img={require('./src/assets/icon/go-deals.png')}/>
            <MainFeature title="GO-PULSA" img={require('./src/assets/icon/go-pulsa.png')}/>
            <MainFeature title="GO-FOOD" img={require('./src/assets/icon/go-food.png')}/>
            <MainFeature title="MORE" img={require('./src/assets/icon/more.png')}/>
          </View>
        </View>
        <GoNewsFeature newsbannerimg={require('./src/assets/dummy/demo-mahasiswa.jpg')} newsbannerlogoimg={require('./src/assets/logo/white.png')} newsDescription="Ribuan mahasiswa demo tolak RUU KUHP di depan gedung DPR."/>
        <GoFoodBannerFeature foodbanner={require('./src/assets/dummy/food-banner.jpg')} gofoodlogo={require('./src/assets/logo/white.png')} />
        <View style={styles.borderBottom}></View>
        <ScrollableProducts />
      </ScrollView>
      <View style={styles.container2}>
        <Navbar img={require('./src/assets/icon/home-active.png')} title="Home" active/>
        <Navbar img={require('./src/assets/icon/order.png')} title="Order"/>
        <Navbar img={require('./src/assets/icon/help.png')} title="Help"/>
        <Navbar img={require('./src/assets/icon/inbox.png')} title="Inbox"/>
        <Navbar img={require('./src/assets/icon/account.png')} title="Account"/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  container2: {
    height: 70,
    flexDirection: 'row'
  },
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
  borderBottom: {
    marginTop: 3,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 2,
  },

});

export default App;
