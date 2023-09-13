import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
                <Text style={styles.textBold}>Red</Text>
          </View>

          <View style={[styles.card, styles.cardTwo]}>
                <Text style={styles.textBold}>Green</Text>
          </View>

          <View style={[styles.card, styles.cardThree]}>
                <Text style={styles.textBold}>Yellow</Text>
          </View>

          <View style={[styles.card, styles.cardOne]}>
                <Text style={styles.textBold}>Red</Text>
          </View>
          
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 8,
        color:'#000000'
    },

    container: {
        flex:1, 
        flexDirection:'row', 
        padding:8,       
    },

    textBold: {
        fontWeight: 'bold',
    },

    card: {
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },

    cardOne: {
        backgroundColor:'#FF0000',
    },

    cardTwo: {
        backgroundColor:'#008000',
    },
    
    cardThree: {
        backgroundColor:'#ecf813',
    },
    
})