import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Allyson: Especialista em Dev Web Full-Stack, Logo Maker e Freelancer!</Text>
      <Text style={styles.text}>Gabriel P.G: Cursando segundo ano do ensino médio anexado a informática para internet  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },

});
