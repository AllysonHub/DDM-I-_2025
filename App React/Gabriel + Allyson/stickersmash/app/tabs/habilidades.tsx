import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Habilidades</Text>
      <Text style={styles.text}>Sei usar Word, Excel, Powerpoint, Possuo experiencia com figma e desing</Text>
      <Text style={styles.text}>Sei usar HTML, CSS e programar em Javascript, Python, PhP, SQL.</Text>
      <Text style={styles.text}>Sei usar fireworks para ajudar nos trbalhos e projetos</Text>
      <Text style={styles.text}>Sei usar o basico de Game Engines, para criaçao de games 2 e 3D </Text>
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
