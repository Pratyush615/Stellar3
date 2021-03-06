import React, { Component } from 'react'
import { View, Text, TextInput, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = ({
            latitude: '',
            longitude: ''
        })
    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (

            <View style = {{flex:1, backgroundColor: "#1a0023"}}>
                <SafeAreaView style={styles.safeArea}/>
                <View style={{flex:0.3,alignItems:"center"}}>
                    <Text style={styles.titleText}>Star Map</Text>
                    <TextInput
                        style={{ height: 40, borderColor: "gray", borderWidth: 1, borderRadius: 10, width: 300, alignSelf: "center" }}
                        placeholder="Enter your latitude"
                        placeholderTextColor="#ffffff"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={{ height: 40, borderColor: "gray", borderWidth: 1, borderRadius: 10, width: 300 }}
                        placeholder="Enter your longitude"
                        placeholderTextColor="#ffffff"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                </View>


                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20 }}
                />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    safeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
})