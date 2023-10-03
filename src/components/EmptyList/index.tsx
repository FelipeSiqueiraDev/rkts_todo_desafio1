import { View, Image, Text } from "react-native";
import { styles } from "./style";

export function EmptyList() {
  return (
    <View style={styles.listContainer}>
      <Image
        style={styles.emptyListIcon}
        source={require("../../assets/clipboard.png")}
      />
      <Text style={[styles.emptyListText, { fontWeight: "bold" }]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyListText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
