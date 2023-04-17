//rafc crea el componente 
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { MyColors } from '../theme/AppTheme'

interface Props{ //creamos la interfaz
  text:string,//definimos el parametro que va a recibir
  onPress:()=>void
}

export const RoundedButton = ({text,onPress}:Props ) => {//definimos e parametro{text}:Props y la interfaz
  return (
    //touchable tiene elementos hijos 
    <TouchableOpacity
      style={styles.roundedButton}
      onPress={() => onPress()}//funciona como un boton 
    >
      
      <Text   style={styles.textButton}>
      {text} {/* Definimos el parametro*/}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  roundedButton: {
    width: '100%', //ponerlo en 100%
    backgroundColor: MyColors.primary,
    alignItems:'center',
    height:50,
    justifyContent:'center',
    borderRadius:30,
   
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold'
  }
});
