import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light';

    return(
        <View style={styles.container}>
            <Text style={isDarkMode? styles.darkText : styles.whiteText }>
                Satish Patil!
            </Text>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },

    whiteText: {
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize: 30,
    },
 
    darkText: {
        color: '#000000',
        fontWeight:'bold',
        fontSize: 30,
    },

})

export default AppPro
