import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,Button,Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RoundedButton } from '../../components/RoundedButton';
export const Ejemplo = () => {
  const [user, setUser] = useState({
    name: 'Juan',
    email: 'juan@gmail.com',
    phone: '70567038',
    avatar: require('../../../../assets/user_image.png'),
  });
  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
     setUser({ ...user, avatar: result.uri });
    }
  };
  return (
    <View style={ styles.container }>

    <Image
        source={ require('../../../../assets/chef.jpg') } 
        style={ styles.imageBackground }
        
    />
    
    <Pressable 
      style={ styles.logout }
      onPress={() => {
       // removeUserSession();
      }}>
      <Image
            source={ require('../../../../assets/chef.jpg') } 
            style={ styles.logoutImage }
        />
    </Pressable>
   
    <View style={ styles.logoContainer }>
        { 
          //user?.image !== '' 
          //  &&
          <Image 
          source={require('../../../../assets/user_image.png')}
          style={styles.logoImage}
          />
          
        }
        <Text style={styles.logoText}>Juan</Text>
        <Image source={require('../../../../assets/celular.png')} style={styles.editIcon} />
    </View>

    <View style={ styles.form }>
        <View style={ styles.formInfo }>
          <Image
            source={ require('../../../../assets/chef.jpg')}
            style={ styles.formImage }
          />
          <View style={ styles.formContent }>
            <Text>{ /*user?.name*/ } {/*user?.lastname*/}Juan</Text>
            <Text style={ styles.formTextDescription }>Nombre del usuario</Text>
          </View>
        </View>
        
        <View style={ {...styles.formInfo, marginTop: 25} }>
          <Image
            source={ require('../../../../assets/chef.jpg')}
            style={ styles.formImage }
          />
          <View style={ styles.formContent }>
            <Text>{ /*user?.email*/ }jaun@gmail.com</Text>
            <Text style={ styles.formTextDescription }>Correo electronico</Text>
          </View>
        </View>

        <View style={ {...styles.formInfo, marginTop: 25, marginBottom: 70} }>
          <Image
            source={ require('../../../../assets/chef.jpg')}
            style={ styles.formImage }
          />
          <View style={ styles.formContent }>
            <Text>{/* user?.phone */}70567038</Text>
            <Text style={ styles.formTextDescription }>Telefono</Text>
          </View>
        </View>

        <RoundedButton
          onPress={() => {
           /* navigation.navigate('ProfileUpdateScreen', { user: user! })*/
          }}
          text='ACTUALIZAR INFORMACION' />

    </View>

</View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
},
imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
    bottom: '30%'
},
form: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30
},
formText: {
    fontWeight: 'bold',
    fontSize: 16
},
formInfo: {
    flexDirection: 'row',
    alignItems: 'center'
},
formContent: {
    marginLeft: 15
},
formImage: {
    height: 30,
    width: 30
},
formTextDescription: {
    fontSize: 12,
    color: 'gray'
},
logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '11%'
},
logoImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
},
logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
},
logout: {
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    right: 15,
},
logoutImage: {
    width: 40,
    height: 40,
},
editIcon: {
  position: 'absolute',
  width: 30,
  height: 30,
  bottom: 0,
  right: 0,
},
});

export default Ejemplo;