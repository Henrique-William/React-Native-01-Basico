import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';

function BoasVindas(props) {
  const [sobrenome, setsobrenome] = useState('');
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [MostraMensagem, setMostraMensagem] = useState(false);

  const _apresentarMensagem = () => {
    if(!nome == '' && !sobrenome == ''){
        setMostraMensagem(true);
    } else {
        Alert.alert(
            'Preenchimento obrigatório',
            'Informe o nome e o sobrenome!',
            [
                { text: 'OK' },
            ],
        );
    }
}

const _limpar = () => {
    setNome('');
    setsobrenome('');
    setMostraMensagem(false);
}
  return (
    <View style={styles.container}>

        <Text style={styles.titulo}> identifique-se </Text> 

        <TextInput
            style={styles.campo}
            placeholder="Digite seu nome"
            onChangeText={nome => setNome(nome)}
            value={nome}  
        />

        <TextInput
            style={styles.campo}
            placeholder="Digite seu sobrenome"
            onChangeText={sobrenome => setsobrenome(sobrenome)}
            value={sobrenome}  
        />

        <View style={styles.botaocontainer}>
            <Button 
                onPress={_apresentarMensagem}
                title='Ok'
            />
        </View>
    {MostraMensagem && (
    <View>
      <Text style={styles.texto}>Olá, {nome} {sobrenome} {props.saudacao}</Text>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  )}

  <View style={styles.botaocontainer}>
      <Button
        onPress={_limpar}
        title="limpar"
      />
  </View>
</View>
  )
}
const styles = StyleSheet.create({
 botaoContainer: {
    backgroundColor: '#081a31',
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },    
  titulo: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: "center",
  },
  container: {
     backgroundColor: 'white',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  texto: {
    fontSize: 14,
    color: 'grey',
    textAlign: "center",
  },
  campo: {
    backgroundColor: 'white',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 5,
    height: 35,
    color: 'black',
  },
});
export default BoasVindas;