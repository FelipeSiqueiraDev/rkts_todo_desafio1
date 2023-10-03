import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./style";
import { EmptyList } from "../../components/EmptyList";
import { Card } from "../../components/Card";

export function Home() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [done, setDone] = useState(0);

  function handleTodoAdd() {
    if (todoList.includes(task)) {
      return Alert.alert("Tarefa já existe", "Já existe esta tarefa na lista!");
    }

    setTodoList((prevState) => [...prevState, task]);
    setTask("");
  }

  function handleTodoRemove(task: string) {
    return Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover essa tarefa ${task}?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTodoList((prevState) =>
              prevState.filter((todoList) => todoList !== task)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

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
            value={task}
            style={styles.input}
            onChangeText={setTask}
            placeholder="Adicione uma tarefa"
            placeholderTextColor={"#808080"}
          />
          <TouchableOpacity style={styles.button} onPress={handleTodoAdd}>
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
            <Text style={styles.createdQtd}> {todoList.length} </Text>
          </View>

          <View style={styles.completedContainer}>
            <Text style={styles.completed}> Concluídas </Text>
            <Text style={styles.completedQtd}> {done} </Text>
          </View>
        </View>

        <View style={styles.separator} />

        <FlatList
          data={todoList}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              task={item}
              setDone={setDone}
              onRemove={() => handleTodoRemove(item)}
            />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}
