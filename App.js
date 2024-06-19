import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonGradient from './ButtonGradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={require('./assets/head.png')} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <TextInput style={styles.textInput} placeholder='example@email.com' />
        <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
        <Text style={styles.textForgot}>Forgot your password?</Text>
        <ButtonGradient />
        <Text style={styles.textForgot}>Don't have an account? Sign up</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 200, // Añadido para asegurar que el contenido no se superponga con el header
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#34434D',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 20,
  },
  textForgot: {
    fontSize: 15,
    color: '#34434D',
    marginBottom: 20,
    paddingTop: 20,
  },
  textInput: {
    width: '80%',
    height: 50,
    padding: 10,
    paddingStart: 25,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
