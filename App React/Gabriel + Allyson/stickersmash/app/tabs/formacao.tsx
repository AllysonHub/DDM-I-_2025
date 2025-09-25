import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formação</Text>
      <Text style={styles.text}>Possuo certificado de logica, fornecido pela unidade de Harvard 50/50</Text>
      <Text style={styles.text}>Sei Inglês Basico e estou desenvolvendohabilidades desenvolvmento</Text>
      <Text style={styles.text}>Possuo o Ensino Médio em Desenvolvimento integrado com ensino técnico de Informática para Internet, também estou cursando Escrita Criativa na Emarp</Text>
      <Text style={styles.text}>Formação</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
