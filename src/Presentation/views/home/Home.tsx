//rafc

import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react'
import { View, Image, Text, TextInput, ToastAndroid, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput1 } from '../../components/CustomTextInput1';
export const HomeScreen = () => {

    const {email,password,OnChange}=useViewModel();
    //useState Snippet Capturando valores
   // const [email, setEmail] = useState('');//lo inicialisamos como un string vacio
   // const [password, setPassword] = useState('');
    //
    //Creamos una constante
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()


    //fin del use state
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
                    source={require('../../../../assets/logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>Food App</Text>
            </View>
            {/* Seccion formulario de inicio de sesion*/}
            <View style={styles.form}>
                <Text style={styles.formText}>Ingresar</Text>
             <CustomTextInput1 
             image={require('../../../../assets/email.png')}
             placeholder='Correo Electronico'
             keyboardType='email-address'
             property='email'
             onChangeText={OnChange}
             value={email}
             
             /> 
              {/*<View style={styles.formInput}>
    <Image
        style={styles.formIcon}
        source={require('../../../../assets/email.png')} />
    <TextInput
        style={styles.formtextInput}
        placeholder='Correo electronico'
        keyboardType='email-address'
        //Configuramos para capturar el input
        value={email}
        onChangeText={text => OnChange('email',text)} //envia valores cada vez que se escribe en el input
    />
</View>*/}
            <CustomTextInput1 
             image={require('../../../../assets/candado.png')}
             placeholder='Contraseña'
             keyboardType='default'
             property='password'
             onChangeText={OnChange}
             value={password}
             secureTextEntry={true}
             
             /> 
                
                <View style={{ marginTop: 30 }}>

                    <RoundedButton text='Login'
                        //onPress={() => ToastAndroid.show(email, ToastAndroid.LONG)}

                      onPress={()=>{
                        console.log('Email:'+email,'contrasenia:'+password);
                      }} 
                        
                    />



                </View>
                <View style={styles.formRegister}>
                    <Text>No tienes cuenta?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>{/*con .navigate pasa de pantalla */}
                        <Text style={styles.formRegisterText}>Registrate  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Ejemplo')}>{/*con .navigate pasa de pantalla */}
                        <Text style={styles.formRegisterText}>Ejemplo Pantalla </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        //necesitamos estilos para la imagen
        flex: 1,//expande todos los elementos
        backgroundColor: 'black',

    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.6,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '50%',
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
        top: '15%'
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
        width: 25,
        height: 25,
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
