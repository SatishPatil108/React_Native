import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>😎</Text>
        </View>
      </ScrollView>
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
       padding:8,     
    },

    card: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        width: 100,
        height: 100,
        margin:2,
        borderRadius:3
    },

    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation:4,
        shadowOffset:{
            width: 1,
            height:1,
        },

        shadowColor:'#EF5354',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    }


})