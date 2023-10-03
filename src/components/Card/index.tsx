import { useState } from "react";
import { styles } from "./style";
import { View, Text, TouchableOpacity, Image } from "react-native";

type Props = {
  task: string;
  setDone: React.Dispatch<React.SetStateAction<number>>;
  onRemove: () => void;
};

export function Card({ task, setDone, onRemove }: Props) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => {
          setStatus(!status);
          setIsCompleted(!isCompleted);
          if (status == false) {
            setDone((prevState) => prevState + 1);
          } else {
            setDone((prevState) => prevState - 1);
          }
        }}
      >
        {isCompleted ? (
          <Image
            style={styles.check}
            source={require("../../assets/check.png")}
          />
        ) : (
          <View style={styles.uncheck} />
        )}
      </TouchableOpacity>

      {status == false ? (
        <Text style={styles.cardTitle}>{task}</Text>
      ) : (
        <Text
          style={[styles.cardTitle, { textDecorationLine: "line-through" }]}   
        >
          {task}
        </Text>
      )}

      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.delete}
          source={require("../../assets/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
