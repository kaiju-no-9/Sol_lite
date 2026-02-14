
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


export default function OrdersScreen() {
    const router = useRouter();

    return (
        <SafeAreaView >
            <TouchableOpacity style ={{
                marginHorizontal:16,
                marginVertical:16,
                flexDirection:'row',
                alignItems:'center',
                gap:8,
                backgroundColor:'#54ca67ff',
                padding:16,
                borderRadius:12,
            }} onPress={()=>router.back()}>
                <Text>Go Back</Text>

            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
