import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context";
export default function explorer() {

    return (
        <SafeAreaView>
            <Text> Exploror </Text>
            <TouchableOpacity>
                <Text> Search </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({});