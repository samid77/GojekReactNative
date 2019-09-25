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

import GoPayFeature from './src/components/molecules/GoPayFeature';
import MainFeature from './src/components/molecules/MainFeature';

const App = () => {
  return(
    <View style={styles.container}>
      <ScrollView style={styles.container1}>
        
        <View style={styles.searchSection}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder='What do you want to eat?' style={styles.inputSearch}/>
            <Image style={styles.iconSearch} source={require('./src/assets/icon/search.png')}/>
          </View>
          <View style={styles.promo}>
            <Image source={require('./src/assets/icon/promo.png')}/>
          </View>
        </View>

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

        <View style={styles.newsSection}>
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>

            <View style={styles.newsBanner}>
              <Image style={styles.newsBannerImage} source={require('./src/assets/dummy/demo-mahasiswa.jpg')}/>
              <View style={styles.newsBannerLogoView}>
                <Image style={styles.newsBannerLogo} source={require('./src/assets/logo/white.png')}/>
              </View>
            </View>
            <View style={styles.newsDescription}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#1C1C1C', marginBottom: 13}}>Ribuan mahasiswa demo tolak RUU KUHP di depan gedung DPR.</Text>
              <TouchableOpacity style={styles.newsButton}>
                <Text style={styles.newsButtonText}>READ</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.goFoodSection}>
          <View style={styles.goFoodWrapper}>
            <Image style={styles.goFoodImage} source={require('./src/assets/dummy/food-banner.jpg')}/>
            <View style={styles.newsBannerLogoView}>
              <Image style={styles.newsBannerLogo} source={require('./src/assets/logo/white.png')}/>
            </View>
            <View style={styles.goFoodDescription}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white', marginBottom: 5}}>FREE GO-FOOD VOUCHER</Text>
                <Text style={{color: 'white', fontWeight: '400', fontSize: 12}}>Quick before they run out!</Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity style={styles.goFoodButton}>
                  <Text style={styles.goFoodButtonText}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.borderBottom}></View>

        <View style={styles.nearbySection}>
          <View style={styles.nearbyLogo}>
            <Image style={styles.nearbyGoFoodLogo} source={require('./src/assets/logo/go-food.png')}/>
          </View>
          <View style={styles.nearbyHeading}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurants</Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
          </View>
          <ScrollView horizontal={true} style={styles.nearbyImages}>

            <View style={styles.nearbyRestaurant}>
              <View style={styles.nearbyRestaurantBox}>
                <Image style={styles.nearbyRestaurantImage} source={require('./src/assets/dummy/go-food-kfc.jpg')}/>
              </View>
              <Text style={styles.nearbyRestaurantText}>KFC</Text>
            </View>
            <View style={styles.nearbyRestaurant}>
              <View style={styles.nearbyRestaurantBox}>
                <Image style={styles.nearbyRestaurantImage} source={require('./src/assets/dummy/go-food-gm.jpg')}/>
              </View>
              <Text style={styles.nearbyRestaurantText}>Bakmi GM</Text>
            </View>
            <View style={styles.nearbyRestaurant}>
              <View style={styles.nearbyRestaurantBox}>
                <Image style={styles.nearbyRestaurantImage} source={require('./src/assets/dummy/go-food-orins.jpg')}/>
              </View>
              <Text style={styles.nearbyRestaurantText}>Martabak Orins</Text>
            </View>
            <View style={styles.nearbyRestaurant}>
              <View style={styles.nearbyRestaurantBox}>
                <Image style={styles.nearbyRestaurantImage} source={require('./src/assets/dummy/go-food-pak-boss.jpg')}/>
              </View>
              <Text style={styles.nearbyRestaurantText}>Ayam Bakar Pak Boss</Text>
            </View>
            <View style={styles.nearbyRestaurant}>
              <View style={styles.nearbyRestaurantBox}>
                <Image style={styles.nearbyRestaurantImage} source={require('./src/assets/dummy/go-food-banka.jpg')}/>
              </View>
              <Text style={styles.nearbyRestaurantText}>Martabak Bangka</Text>
            </View>

          </ScrollView>

          <View style={styles.borderBottom}></View>


        </View>
        
      </ScrollView>
      <View style={styles.container2}>
        <View style={styles.nav}>
          <Image style={styles.icon} source={require('./src/assets/icon/home-active.png')}></Image>
          <Text style={{fontSize:10, marginTop: 4, color: '#43AB4A'}}>Home</Text>
        </View>
        <View style={styles.nav}>
          <Image style={styles.icon} source={require('./src/assets/icon/order.png')}></Image>
          <Text style={styles.navTitle}>Orders</Text>
        </View>
        <View style={styles.nav}>
          <Image style={styles.icon} source={require('./src/assets/icon/help.png')}></Image>
          <Text style={styles.navTitle}>Help</Text>
        </View>
        <View style={styles.nav}>
          <Image style={styles.icon} source={require('./src/assets/icon/inbox.png')}></Image>
          <Text style={styles.navTitle}>Inbox</Text>
        </View>
        <View style={styles.nav}>
          <Image style={styles.icon} source={require('./src/assets/icon/account.png')}></Image>
          <Text style={styles.navTitle}>Account</Text>
        </View>
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
  nav: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 26,
    height: 26,
  },
  navTitle: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4
  },
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
  newsSection: {
    height: 19,
    backgroundColor: '#F2F2F4',
    top: 90,
  },
  newsBanner: {
    position: 'relative',
  },
  newsBannerImage: {
    height: 170,
    marginTop: 15,
    width: '100%',
    borderRadius: 6,
  },
  newsBannerLogoView: {
    height: 15,
    width: 60,
    position: 'absolute',
    top: 26,
    left: 11,
  },
  newsBannerLogo: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  newsDescription: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  newsButton: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    alignSelf: 'flex-end',
    borderRadius: 5,
  },
  newsButtonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goFoodSection: {
    marginTop: 400,
    padding: 16,
  },
  goFoodWrapper: {
    position: 'relative',
  },
  goFoodImage: {
    height: 170,
    // top: 400,
    marginTop: 20,
    width: '100%',
    borderRadius: 6,
  },
  goFoodDescription: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  goFoodButton: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 5,
    alignSelf: 'stretch'
  },
  goFoodButtonText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  borderBottom: {
    marginTop: 3,
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 2,
  },
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

export default App;
