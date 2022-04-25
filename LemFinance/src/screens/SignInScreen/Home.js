import React, {Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity, Text, Button} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary"
import MaterialButtonPrimary1 from "../../Components/CustomButton/MaterialButtonPrimary1";
import Login from "./Login";

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                source={require("./../../../assets/images/LEM_Logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />

            <TouchableOpacity style={[styles.containerButton, styles.identificationButton]}
                              onPress={() =>
                                  navigation.navigate('Login')}
            >
                <Text style={styles.caption}>SE CONNECTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.containerButton, styles.accountCreationButton]}
                              onPress={() =>
                                  navigation.navigate('Signup')}>
                <Text style={styles.caption}>CRÉER UN COMPTE</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: 150,
        marginLeft: 88
    },
    identificationButton: {
        height: 46,
        width: 274,
        borderRadius: 12,
        backgroundColor: "rgba(77,166,169,1)",
        marginTop: 263,
        marginLeft: 51
    },
    accountCreationButton: {
        height: 46,
        width: 274,
        backgroundColor: "rgba(160,189,191,1)",
        borderRadius: 12,
        marginTop: 22,
        marginLeft: 51

    },
    containerButton: {
        backgroundColor: "#2196F3",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16
    },
    caption: {
        color: "#fff",
        fontSize: 14
    }
});

export default Home;
