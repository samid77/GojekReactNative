import React from 'react';
import {Image, View, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoNewsFeature = (props) => {
    return(
        <View style={styles.newsSection}>
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>

            <View style={styles.newsBanner}>
              <Image style={styles.newsBannerImage} source={props.newsbannerimg}/>
              <View style={styles.newsBannerLogoView}>
                <Image style={styles.newsBannerLogo} source={props.newbannerlogoimg}/>
              </View>
            </View>
            <View style={styles.newsDescription}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#1C1C1C', marginBottom: 13}}>{props.newsDescription}</Text>
              <TouchableOpacity style={styles.newsButton}>
                <Text style={styles.newsButtonText}>READ</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
    );
}

const styles = StyleSheet.create({

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

})

export default GoNewsFeature;