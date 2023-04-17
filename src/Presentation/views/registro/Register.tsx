import { useNavigation } from '@react-navigation/native';

import React from 'react'
import { View, Image, Text, TextInput, ToastAndroid, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';

export const RegisterScreen = () => {
  return (
    //con la etiqueta view se crea una columna 
    //el text input no tiene hijos
    //el view funciona como un div
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/chef.jpg')}
        style={styles.ImageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/registro.logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Selecciona tu imagen de perfil</Text>
      </View>
      {/* Seccion formulario de inicio de sesion*/}
      <View style={styles.form}>
        <Text style={styles.formText}>Registrarse</Text>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/user.png')} />
          <TextInput
            style={styles.formtextInput}
            placeholder='Nombres'
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/my_user.png')} />
          <TextInput
            style={styles.formtextInput}
            placeholder='Apellidos'
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/direccion.png')} />
          <TextInput
            style={styles.formtextInput}
            placeholder='Direccion'
            keyboardType='default'
          />
        </View>


        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/correo-electronico.png')} />
          <TextInput
            style={styles.formtextInput}
            placeholder='Correo electronico'
            keyboardType='email-address'
          />

        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/phonepurple.png')} />
          <TextInput
            style={styles.formtextInput}
            placeholder='Celular'
            keyboardType='numeric'
          />

        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/candado.png')} />
          <TextInput
            style={styles.formtextInput}
            placeholder='Contrasenia'
            keyboardType='default'
            secureTextEntry={true}
          />

        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/confirm_password.png')} />
          <TextInput
            style={styles.formtextInput}
            placeholder='Contrasenia'
            keyboardType='default'
            secureTextEntry={true}
          />

        </View>
        <View style={{ marginTop: 30 }}>

          <RoundedButton text='Confirmar'
            onPress={() => ToastAndroid.show('Hola', ToastAndroid.LONG)}
          />



        </View>


      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //necesitamos estilos para la imagen
    flex: 1,//expande todos los elementos
    backgroundColor: 'purple',

  },
  ImageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
    bottom: '30%'
  },
  form: {
    width: '100%',
    height: '75%',
    backgroundColor: '#e6e6e6',
    position: 'absolute',
    bottom: 0, //le digo que baje hasta abajo de la pantalla 
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 40 //padding afecta a lo que esta dentro margin a lo que esta afuera
  },
  logoContainer: {
    position: 'absolute',
    //centrando
    alignSelf: 'center',
    //bajando le decimos que este al 15% de la pantalla 
    top: '5%',
    alignItems: 'center'
  },
  logoImage: {
    height: 100,
    width: 100
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    //margen hacia arriba
    marginTop: 10,
    fontWeight: 'bold'
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center' //esto es para alinear el texto al centro
  },
  formtextInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#3772FF',
    marginLeft: 18
  },
  formIcon: {
    width: 30,
    height: 30,
    paddingRight: '10%'
    
  },
  formInput: {
    flexDirection: 'row', //los coloca en fila
    marginTop: 30
  },
  formRegister: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'purple',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    marginLeft: 10
  }
});


