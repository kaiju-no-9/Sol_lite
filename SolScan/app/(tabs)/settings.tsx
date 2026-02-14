import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function settings() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text>
                Setttings
            </Text>
            <TouchableOpacity style={{
                marginTop: 20,
                padding: 10,
                backgroundColor: "#eee",
                borderRadius: 5,
                //alignItems:"center",
                justifyContent: "center",

            }}
                onPress={() => {
                    router.push("/orders");
                }}>
                <Text> My Order History ! </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
const style = StyleSheet.create({});