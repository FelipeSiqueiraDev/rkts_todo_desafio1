import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";

export function Card() {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.checkbox} />

      <Text style={styles.cardTitle}>Desafio RocketSeat #1</Text>

      <Image style={styles.delete} source={require("../../assets/trash.png")} />
    </View>
  );
}
