import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType, Keyboard } from 'react-native';

interface Props{
  image:any,
  placeholder:string,
  value:string,
  keyboardType:KeyboardType,
  secureTextEntry?:boolean,
  property:string,
  onChangeText:(property:string,value:any)=>void
}
export const CustomTextInput1 = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry=false,
  property,
  onChangeText
}:Props) => {
  return (
    <View style={styles.formInput}>
    <Image
        style={styles.formIcon}
        source={image} />
    <TextInput
        style={styles.formtextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        //Configuramos para capturar el input
        value={value}
        onChangeText={text => onChangeText(property,text)} //envia valores cada vez que se escribe en el input
        secureTextEntry={secureTextEntry}
    />
</View>

  )
}
const styles=StyleSheet.create({
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
})


