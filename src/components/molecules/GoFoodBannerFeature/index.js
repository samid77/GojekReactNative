import React from 'react';
import {Image, View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GoFoodBannerFeature = (props) => {
    return(
        <View style={styles.goFoodSection}>
          <View style={styles.goFoodWrapper}>
            <Image style={styles.goFoodImage} source={props.foodbanner}/>
            <View style={styles.goFoodBannerLogoView}>
              <Image style={styles.goFoodBannerLogo} source={props.gofoodlogo}/>
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
    );
}

const styles = StyleSheet.create({

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
  goFoodBannerLogoView: {
      height: 15,
      width: 60,
      position: 'absolute',
      top: 26,
      left: 11,
  },
  goFoodBannerLogo: {
      width: undefined,
      height: undefined,
      resizeMode: 'contain',
      flex: 1,
  },

});

export default GoFoodBannerFeature;