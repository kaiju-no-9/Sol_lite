import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWalletStore } from "../store/wallet";

interface Props {
    address: string;
}

export function FavoriteButton({ address }: Props) {
    const isFavorite = useWalletStore((s) => s.isFavorite(address));
    const addFavorite = useWalletStore((s) => s.addFavorite);
    const removeFavorite = useWalletStore((s) => s.removeFavorite);

    const toggle = () => {
        if (isFavorite) {
            removeFavorite(address);
        } else {
            addFavorite(address);
        }
    };

    return (
        <TouchableOpacity onPress={toggle} style={s.btn}>
            <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={22}
                color={isFavorite ? "red" : "#6B7280"}
            />
        </TouchableOpacity>
    );
}

const s = StyleSheet.create({
    btn: {
        padding: 8,
    },
});