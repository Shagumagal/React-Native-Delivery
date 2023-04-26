import { useNavigation } from '@react-navigation/native';

import React from 'react'
import { View, Image, Text, TextInput, ToastAndroid, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'
import { CustomTextInput1 } from '../../components/CustomTextInput1';
export const RegisterScreen = () => {
  //traemos los campos del viewModel
  const{name,lastname,direction,email,phone,password,confirmPassword,onChange,register}=useViewModel();
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
        {/* Aca todos los text inputs*/}
        <CustomTextInput1 
       placeholder='Nombres'
       keyboardType='default'
       image={require('../../../../assets/user.png')}
       property='name'
       onChangeText={onChange}
       value={name}
      />

<CustomTextInput1 
       placeholder='Apellidos'
       keyboardType='default'
       image={require('../../../../assets/my_user.png')}
       property='lastname'
       onChangeText={onChange}
       value={lastname}
      />
      <CustomTextInput1
       placeholder='Direccion'
       keyboardType='default'
       image={require('../../../../assets/direccion.png')}
       property='direction'
       onChangeText={onChange}
       value={direction}
      />
       <CustomTextInput1
       placeholder='Correo electronico'
       keyboardType='email-address'
       image={require('../../../../assets/correo-electronico.png')}
       property='email'
       onChangeText={onChange}
       value={email}
      />
      <CustomTextInput1
       placeholder='Celular'
       keyboardType='numeric'
       image={require('../../../../assets/phonepurple.png')}
       property='phone'
       onChangeText={onChange}
       value={phone}
      />
      <CustomTextInput1
       placeholder='Contraseña'
       keyboardType='default'
       image={require('../../../../assets/candado.png')}
       property='password'
       onChangeText={onChange}
       value={password}
       secureTextEntry={true}
      />
       <CustomTextInput1
       placeholder='Confirmar contraseña'
       keyboardType='default'
       image={require('../../../../assets/confirm_password.png')}
       property='confirmPassword'
       onChangeText={onChange}
       value={confirmPassword}
       secureTextEntry={true}
      />
      


        
       
        {/*ejemplo sin componente personalizado*/}
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
            //onPress={() => ToastAndroid.show('Hola', ToastAndroid.LONG)}
            onPress={()=>register()}
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


