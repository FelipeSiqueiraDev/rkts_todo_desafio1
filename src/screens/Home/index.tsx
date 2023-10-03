import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { EmptyList } from "../../components/EmptyList";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainter}>
          <Image
            style={styles.logo}
            source={require("../../assets/rocket.png")}
          />
          <Text style={styles.titleOne}>to</Text>
          <Text style={styles.titleTwo}>do</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma tarefa"
            placeholderTextColor={"#808080"}
          />
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              source={require("../../assets/plus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.listStatus}>
          <View style={styles.createdContainer}>
            <Text style={styles.created}> Criadas </Text>
            <Text style={styles.createdQtd}> 0 </Text>
          </View>

          <View style={styles.completedContainer}>
            <Text style={styles.completed}> Concluídas </Text>
            <Text style={styles.completedQtd}> 0 </Text>
          </View>
        </View>

        <View style={styles.separator} />

        <EmptyList />
        <Card />
      </View>
    </View>
  );
}
