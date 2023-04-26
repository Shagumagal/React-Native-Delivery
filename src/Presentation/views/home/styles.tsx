import { StyleSheet } from "react-native";
const Homestyles = StyleSheet.create({
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
export default Homestyles;