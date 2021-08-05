import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea} />
                <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/main-icon.png")} style={{width:150,height:150}}/>
                        <Text style={styles.titleText}> Stellar App </Text>
                
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('SpaceCrafts')
                    }}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                      
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('StarMap')
                    }}>
                        <Text style={styles.routeText}>Star Map</Text>
                        
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('DailyPic')
                    }}>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}/>
                    </TouchableOpacity>
                </ImageBackground>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    safeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    routeCard: {
        flex: 0.12,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white",
        justifyContent:"center",
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:20
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover"
    },
    iconImage:{
        position:"absolute",
        height:80,
        width:80,
        resizeMode:"contain",
        right:20,
        top:-10
    }
})