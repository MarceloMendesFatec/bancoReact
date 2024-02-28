import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import React, { useState, useEffect } from "react";

export default function App() {
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState(0);
  const [nome, setNome] = useState("");
  const [limite, setLimite] = useState(0);
  const [estudante, setEstudante] = useState(false);
  const showData = () => {
    if(nome == "" || idade == 0 || sexo == "" || limite == 0){
      alert("Preencha todos os campos!")
      return
    }
    alert(
      "Nome: " +
        nome +
        "\nIdade: " +
        idade +
        "\nSexo: " +
        sexo +
        "\nLimite: " +
        limite +
        "\nEstudante: " +
        estudante
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.tittle}>Banco React</Text>

      <View>
        <Text style={styles.paragraph}>Digite seu nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui"
          value={nome}
          onChangeText={(nome => setNome(nome))}
          
        />
        <Text style={styles.paragraph}>
          Digite sua idade:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui"
          keyboardType="numeric"
          onChangeText={(idade) => setIdade(idade)}
        />
        <Text style={styles.paragraph}>Selecione seu sexo:</Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          <Picker.Item label="Masculino" value="M" />
          <Picker.Item label="Feminino" value="F" />
        </Picker>
        <Text style={styles.paragraph}>Selecione seu limite:</Text>
        <Slider
          style={{ width: "90%", height: 48 }}
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(value) => setLimite(value)}
        />
        <Text style={styles.paragraph}>Seu limite é: {limite.toFixed(0)}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.paragraph}>Voce é estudante? </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={estudante ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => setEstudante(value)}
            value={estudante}
            style={{ marginStart: 16, marginTop: 24 }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonSubmit} onPress={showData}>
        <Text style={{ fontSize: 26, color: "#ffffff" }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tittle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "skyblue",
    marginTop: 50,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    marginStart: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    width: "90%",
    marginStart: 16,
    padding: 10,
    fontSize: 16,
  },
  buttonSubmit: {
    marginTop: 20,
    padding: 20,
    width: "80%",
    marginStart: 36,
    backgroundColor: "skyblue",
    alignItems: "center",
    borderRadius: 10,
  },
});
