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

import Navbar from './src/components/molecules/Navbar';
import HomeGoPay from './src/containers/organisms/HomeGoPay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNewsFeature from './src/components/molecules/GoNewsFeature';
import GoFoodBannerFeature from './src/components/molecules/GoFoodBannerFeature';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';

const App = () => {
  return(
    <View style={styles.container}>
      <ScrollView style={styles.container1}>
        <SearchFeature searchimg={require('./src/assets/icon/search.png')} promoimg={require('./src/assets/icon/promo.png')}/>
        <HomeGoPay />
        <HomeMainFeature />
        <GoNewsFeature newsbannerimg={require('./src/assets/dummy/demo-mahasiswa.jpg')} newsbannerlogoimg={require('./src/assets/logo/white.png')} newsDescription="Ribuan mahasiswa demo tolak RUU KUHP di depan gedung DPR."/>
        <GoFoodBannerFeature foodbanner={require('./src/assets/dummy/food-banner.jpg')} gofoodlogo={require('./src/assets/logo/white.png')} />
        <View style={styles.borderBottom}></View>
        <ScrollableProducts />
      </ScrollView>
      <Navbar />
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
  borderBottom: {
    marginTop: 3,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 2,
  },

});

export default App;
